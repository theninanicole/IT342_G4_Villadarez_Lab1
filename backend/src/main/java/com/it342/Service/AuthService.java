package com.it342.Service;

import com.it342.DTO.*;
import com.it342.Entity.User;
import com.it342.Repository.UserRepository;
import com.it342.Security.JwtTokenProvider;
import com.it342.Security.PasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenProvider tokenProvider;

    public AuthResponse registerUser(RegisterRequest req) {
        if (userRepository.existsByUsername(req.getUsername()) || userRepository.existsByEmail(req.getEmail())) {
            throw new RuntimeException("Username or email already exists");
        }

        User user = new User();
        user.setUsername(req.getUsername());
        user.setEmail(req.getEmail());
        user.setPassword(passwordEncoder.encode(req.getPassword()));
        user.setFirst_name(req.getFirst_name());
        user.setLast_name(req.getLast_name());

        userRepository.save(user);

        String token = tokenProvider.createToken(user.getUsername());
        return new AuthResponse(token);
    }

    public AuthResponse authenticate(LoginRequest req) {
        Optional<User> userOpt = userRepository.findByUsername(req.getUsername());
        if (userOpt.isEmpty()) {
            throw new RuntimeException("User not found");
        }

        User user = userOpt.get();
        if (!passwordEncoder.matches(req.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        String token = tokenProvider.createToken(user.getUsername());
        return new AuthResponse(token);
    }

    public void logout(String token) {
        tokenProvider.invalidateToken(token);
    }

    public User getUserProfile(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }
}
