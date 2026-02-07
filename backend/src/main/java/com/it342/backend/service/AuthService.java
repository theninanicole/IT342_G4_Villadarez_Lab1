package com.it342.backend.service;

import com.it342.backend.dto.AuthResponse;
import com.it342.backend.dto.LoginRequest;
import com.it342.backend.dto.RegisterRequest;
import com.it342.backend.model.User;
import com.it342.backend.repository.UserRepository;
import com.it342.backend.security.JwtTokenProvider;
import com.it342.backend.security.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider tokenProvider;

    public AuthService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder,
                       JwtTokenProvider tokenProvider) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.tokenProvider = tokenProvider;
    }

    public AuthResponse registerUser(RegisterRequest req) {
        if (userRepository.existsByUsername(req.getUsername())) {
            throw new RuntimeException("Username already exists");
        }

        if (userRepository.existsByEmail(req.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        User user = new User();
        user.setUsername(req.getUsername());
        user.setEmail(req.getEmail());
        user.setPassword(passwordEncoder.encode(req.getPassword()));
        user.setFirst_name(req.getFirst_name());
        user.setLast_name(req.getLast_name());

        userRepository.save(user);

        String token = tokenProvider.createToken(user.getUsername());
        return new AuthResponse(token, user.getUsername(), user.getEmail());
    }

    public AuthResponse authenticate(LoginRequest req) {

        String identifier = req.getUsername(); // username or email

        User user = userRepository.findByUsername(identifier)
            .orElseGet(() ->
                userRepository.findByEmail(identifier)
                    .orElseThrow(() ->
                        new RuntimeException("Invalid username or password")
                    )
            );

        if (!passwordEncoder.matches(req.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid username or password");
        }

        String token = tokenProvider.createToken(user.getUsername());
        return new AuthResponse(token, user.getUsername(), user.getEmail());
    }

    public User getUserProfile(String username) {
        return userRepository.findByUsername(username)
            .orElseThrow(() -> new RuntimeException("User not found"));
    }
}
