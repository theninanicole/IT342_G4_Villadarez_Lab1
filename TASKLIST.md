# Mini Authentication App – Task List

## Project Status
**Stack:** ReactJS, Spring Boot (Java), Kotlin (Android)  
**Authentication:** JWT-based authentication  

**Legend:**
- [x] Completed  
- [ ] To Do  

## 1. Backend – Core Authentication
- [x] Create `User` entity  
- [x] Create `UserRepository`  
- [x] Implement `PasswordEncoder` (BCrypt)  
- [x] Implement `JwtTokenProvider`  
- [x] Implement `AuthService`  
- [x] Implement `AuthController`  

## 2. Backend – Security Layer
- [x] Configure Spring Security (`SecurityConfig`)  
- [x] Secure protected endpoints using JWT  

## 3. Backend – DTOs
- [x] Create `RegisterRequest`  
- [x] Create `LoginRequest`  
- [x] Create `AuthResponse`  

## 4. Frontend – React Web App

### UI Pages
- [x] Login page  
- [x] Register page  
- [x] Profile page  
- [x] Logout confirmation modal  

### API Integration
- [x] Connect `/login` API  
- [x] Connect `/register` API  
- [x] Connect `/profile` API
- [x] Store JWT in `localStorage`  
- [x] Send JWT in `Authorization` header  
- [x] Protect routes  

## 5. Mobile – Android Kotlin App

### UI Pages
- [ ] Login page  
- [ ] Register page  
- [ ] Profile page  
- [ ] Logout confirmation modal  

### API Integration
- [ ] Connect `/login` API  
- [ ] Connect `/register` API  
- [ ] Connect `/profile` API  
- [ ] Store JWT in `SharedPreferences` / `DataStore`  
- [ ] Send JWT in `Authorization` header  
- [ ] Protect routes  

## 6. Security Enhancements
- [x] Hash passwords using BCrypt  
- [ ] Handle token expiration (web and mobile)  

## 7. Testing
- [x] Test user registration flow  
- [x] Test user login flow  
- [x] Test protected profile access  
- [ ] Test invalid JWT handling  
- [ ] Test expired JWT handling  

## 8. Documentation
- [x] Update `README.md`  
- [ ] Add API request/response examples  
- [x] Add system architecture diagrams on /docs

