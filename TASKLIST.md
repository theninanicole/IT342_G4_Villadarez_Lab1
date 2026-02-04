# Mini Authentication App – Task List 

## Project Status
**Stack:** ReactJS + Spring Boot
**Auth:** JWT-based authentication

Legend:
- [x] Completed  
- [ ] To Do  

---

## 1. Backend – Core Authentication
- [x] Create `User` entity  
- [x] Create `UserRepository`  
- [x] Implement `PasswordEncoder`
- [x] Implement `JwtTokenProvider`
- [x] Implement `AuthService`
- [x] Implement `AuthController`

---

## 2. Backend – Security Layer 

- [ ] Create `JwtAuthenticationFilter`
- [ ] Create `SecurityConfig`

---

## 3. Backend – DTOs & Validation

- [x] Create `RegisterRequest`
- [x] Create `LoginRequest`
- [x] Create `AuthResponse`

---

## 4. Frontend – React App

### UI Pages
- [ ] Login page
- [ ] Register page
- [ ] Profile page
- [ ] Logout button

### API Integration
- [ ] Connect /login API
- [ ] Connect /register API
- [ ] Store JWT in localStorage
- [ ] Send JWT in Authorization header
- [ ] Protect routes
- [ ] Handle token expiration

---

## 5. Security Enhancements

- [ ] Hash passwords using BCrypt
- [ ] Add refresh token support (optional)
- [ ] Add token expiration handling
- [ ] Add rate limiting (optional)

---

## 6. Testing

- [ ] Test register flow
- [ ] Test login flow
- [ ] Test protected profile
- [ ] Test invalid tokens
- [ ] Test expired tokens

---

## 7. Documentation

- [x] Update README.md
- [x] Add API examples
- [x] Add ERD + Class Diagram

---

## 9. Final Review

- [ ] Secrets removed from code
- [ ] JWT secured endpoints
- [ ] Clean UI
