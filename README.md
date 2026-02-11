# Mini Authentication App 📱

## Project Description

A full-stack authentication application that demonstrates modern authentication flows using JWT (JSON Web Tokens). The application includes:

- **User Registration** - Create new accounts with validation
- **User Login** - Authenticate with username/email and password
- **JWT-based Authentication** - Secure, stateless authentication
- **Protected User Profile** - Access user data with valid JWT tokens
- **Toast Notifications** - User-friendly feedback for all actions
- **Multi-platform Support** - Web (React) and Mobile (Kotlin) clients

This project serves as a learning base for understanding system integration, authentication flows, Spring Security, JWT tokens, and full-stack development.

---

## Technologies Used

### Frontend (Web)
- **ReactJS** - UI framework
- **React Router** - Navigation
- **Axios** - HTTP client
- **React Toastify** - Toast notifications
- **CSS3** - Styling

### Backend
- **Spring Boot 2.x/3.x** - Java framework
- **Spring Security** - Authentication & authorization
- **Spring Data JPA** - Database ORM
- **JWT (jjwt)** - Token generation & validation
- **MySQL** - Relational database
- **Maven** - Build tool

### Mobile
- **Kotlin** - Programming language
- **Android SDK** - Mobile platform
- **Retrofit** - HTTP client

### Development Tools
- **Postman** - API testing
- **XAMPP** - MySQL server
- **Git/GitHub** - Version control
- **IntelliJ IDEA / VS Code** - IDEs

---

## Prerequisites

Before running this project, ensure you have:

- **Java 17**
- **Node.js 16+** and npm
- **MySQL 8.0+** (via XAMPP or standalone)
- **Maven 3.6+** (or use Maven wrapper)
- **Android Studio** (for mobile app)
- **Git** (for version control)

---

## Database Setup

### Step 1: Start MySQL Server

Using XAMPP:
1. Open **XAMPP Control Panel**
2. Click **Start** next to MySQL
3. Wait for "Running" status

### Step 2: Create Database

**Option A: Using phpMyAdmin**
1. Go to http://localhost/phpmyadmin
2. Click **New** in left sidebar
3. Database name: `miniapp_db`
4. Collation: `utf8mb4_general_ci`
5. Click **Create**

**Option B: Using MySQL Command Line**
```sql
CREATE DATABASE miniapp_db CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE miniapp_db;
```

### Step 3: Create User Table

Run this SQL in phpMyAdmin or MySQL command line:

```sql
CREATE TABLE users (
    user_id BIGINT(20) AUTO_INCREMENT PRIMARY KEY,      
    created_at DATETIME(6) NOT NULL,                     
    email VARCHAR(255) NOT NULL UNIQUE,                 
    first_name VARCHAR(255) NULL,                        
    last_name VARCHAR(255) NULL,                        
    password VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE               
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

### Step 4: Verify Table Creation

```sql
DESCRIBE users;
```

You should see:
```
+------------+--------------+------+-----+-------------------+-----------------------------+
| Field      | Type         | Null | Key | Default           | Extra                       |
+------------+--------------+------+-----+-------------------+-----------------------------+
| user_id    | bigint       | NO   | PRI | NULL              | auto_increment              |
| first_name | varchar(255) | YES  |     | NULL              |                             |
| last_name  | varchar(255) | YES  |     | NULL              |                             |
| username   | varchar(255) | NO   | UNI | NULL              |                             |
| email      | varchar(255) | NO   | UNI | NULL              |                             |
| password   | varchar(255) | NO   |     | NULL              |                             |
| created_at | datetime     | NO   |     | NULL              |                             |
+------------+--------------+------+-----+-------------------+-----------------------------+
```

---

## 🔧 Backend Configuration

### Step 1: Configure Database Connection

Edit `backend/src/main/resources/application.properties`:

```properties
# Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/miniapp_db
spring.datasource.username=root
spring.datasource.password=
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA/Hibernate Configuration
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

# Server Configuration
server.port=8080

# Logging
logging.level.com.it342.backend=DEBUG
logging.level.org.springframework.security=DEBUG
```

### Configuration Notes:

| Property | Value | Description |
|----------|-------|-------------|
| `spring.datasource.url` | `jdbc:mysql://localhost:3306/miniapp_db` | MySQL connection URL |
| `spring.datasource.username` | `root` | MySQL username (default for XAMPP) |
| `spring.datasource.password` | (empty) | MySQL password (default for XAMPP is empty) |
| `spring.jpa.hibernate.ddl-auto` | `update` | Auto-update database schema |
| `server.port` | `8080` | Backend server port |

**⚠️ Important Notes:**
- If you set a MySQL password, update `spring.datasource.password`
- For production, use `spring.jpa.hibernate.ddl-auto=validate` instead of `update`
- Never commit passwords to version control

---

## 🚀 Steps to Run Backend

### Option 1: Using IDE (IntelliJ IDEA / Eclipse)

1. **Import Project**
   - File → Open → Select `backend` folder
   - Wait for Maven dependencies to download

2. **Configure MySQL**
   - Ensure MySQL is running in XAMPP
   - Database `miniapp_db` exists

3. **Run Application**
   - Navigate to `src/main/java/com/it342/backend/BackendApplication.java`
   - Right-click → Run 'BackendApplication'

4. **Verify Startup**
   - Look for: `Started BackendApplication in X.XXX seconds`
   - Backend is now running on **http://localhost:8080**

### Option 2: Using Maven Command Line

```bash
# Navigate to backend folder
cd backend

# Clean and install dependencies
mvn clean install

# Run the application
mvn spring-boot:run
```

### Option 3: Using Maven Wrapper (No Maven installation required)

**Windows:**
```bash
cd backend
.\mvnw clean install
.\mvnw spring-boot:run
```

**Mac/Linux:**
```bash
cd backend
./mvnw clean install
./mvnw spring-boot:run
```

### Verify Backend is Running

Test the health endpoint:
```bash
curl http://localhost:8080/api/auth/register
```

You should get a response (even if it's an error - it means the server is running).

---

## 🌐 Steps to Run Web App

### Step 1: Install Dependencies

```bash
# Navigate to frontend folder
cd frontend

# Install all dependencies
npm install
```

### Step 2: Configure API Base URL

Edit `frontend/src/api/apiClient.js`:

```javascript
const API_BASE_URL = 'http://localhost:8080';
```

**⚠️ Important:**
- Make sure this matches your backend port (default: 8080)
- No trailing slash

### Step 3: Start Development Server

```bash
npm start
```

The React app will automatically open at **http://localhost:3000**

### Step 4: Verify Web App

You should see:
- Login page at http://localhost:3000/login
- Register page at http://localhost:3000/register
- No console errors

---

## 📱 Steps to Run Mobile App

### Step 1: Open Project in Android Studio

1. Launch **Android Studio**
2. Click **File** → **Open**
3. Navigate to and select the `mobile/` folder
4. Click **OK**
5. Wait for Gradle sync to complete

### Step 2: Configure API Base URL

Edit `mobile/app/src/main/java/com/it342/miniapp/api/ApiConfig.kt`:

```kotlin
object ApiConfig {
    // Replace with your computer's local IP address
    const val BASE_URL = "http://192.168.1.100:8080/"
}
```

**⚠️ Important: Find Your Local IP Address**

**Windows:**
```bash
ipconfig
# Look for "IPv4 Address" under your active network adapter
```

**Mac:**
```bash
ifconfig | grep "inet "
# Look for an address like 192.168.x.x
```

**Linux:**
```bash
ip addr show
# Look for an address like 192.168.x.x
```

**DO NOT USE:**
- ❌ `localhost` or `127.0.0.1` (won't work on mobile)
- ❌ `10.0.2.2` (only works in emulator, not on real device)

**USE:**
- ✅ Your actual local IP (e.g., `192.168.1.100`)

### Step 3: Sync Gradle Dependencies

1. Click **File** → **Sync Project with Gradle Files**
2. Wait for sync to complete (check bottom status bar)
3. Resolve any dependency issues if prompted

### Step 4: Set Up Device or Emulator

**Option A: Physical Device**
1. Enable **Developer Options** on your Android device
2. Enable **USB Debugging**
3. Connect device via USB
4. Allow USB debugging when prompted

**Option B: Android Emulator**
1. Click **Device Manager** (phone icon in toolbar)
2. Click **Create Device**
3. Select device (e.g., Pixel 5)
4. Select system image (e.g., Android 13 / API 33)
5. Click **Finish**

### Step 5: Run the App

1. Select your device/emulator from the dropdown
2. Click **Run** ▶ (green play button)
3. Wait for app to install and launch

### Verify Mobile App

- App opens successfully
- You can navigate to Register screen
- Attempting to register shows network activity
- Check that the API base URL is correct if you get connection errors

---

## 📡 API Endpoints

### Public Endpoints (No Authentication Required)

| Endpoint | Method | Description | Request Body |
|----------|--------|-------------|--------------|
| `/api/auth/register` | POST | Register a new user | `{ firstName, lastName, username, email, password }` |
| `/api/auth/login` | POST | Authenticate user and get JWT token | `{ username, password }` |

### Protected Endpoints (Requires JWT Token)

| Endpoint | Method | Description | Headers Required |
|----------|--------|-------------|------------------|
| `/api/auth/me` | GET | Get current authenticated user's profile | `Authorization: Bearer <token>` |
| `/api/auth/profile` | GET | Get user profile (legacy endpoint) | `Authorization: Bearer <token>` |

### Example Requests

#### Register User
```bash
POST http://localhost:8080/api/auth/register
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (201 Created):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9...",
  "user": {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "username": "johndoe",
    "email": "john@example.com"
  }
}
```

#### Login
```bash
POST http://localhost:8080/api/auth/login
Content-Type: application/json

{
  "username": "johndoe",
  "password": "password123"
}
```

**Response (200 OK):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9...",
  "user": {
    "id": 1,
    "username": "johndoe",
    "email": "john@example.com",
    ...
  }
}
```

#### Get Current User (/me)
```bash
GET http://localhost:8080/api/auth/me
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...
```

**Response (200 OK):**
```json
{
  "id": 1,
  "firstName": "John",
  "lastName": "Doe",
  "username": "johndoe",
  "email": "john@example.com",
  "createdAt": "2024-02-11T10:30:00",
  "password": null
}
```

**Error Response (401 Unauthorized):**
```json
{
  "error": "Unauthorized",
  "message": "Full authentication is required to access this resource"
}
```

---

## 🌳 Branch Naming Convention

All branch names must clearly identify the **Type**, **Scope**, and a short **Description**.

### Format
```
<type>/<scope>/<description>
```

### Rules
- Use **lowercase letters**
- Use **hyphens (-)** for word separation
- Keep descriptions **short and meaningful**
- Avoid vague names like `test`, `temp`, or `new-branch`
- Do not include personal names
- Delete branches after merging

### Types and Scopes

| Type | Prefix | Scope Options | Description | Example |
|------|--------|---------------|-------------|---------|
| **Feature** | `feature/` | `web/`, `backend/`, `mobile/` | New user-facing functionality | `feature/web/user-profile-ui` |
| **Bug Fix** | `fix/` | `web/`, `backend/`, `mobile/` | Fixing bugs or unexpected behavior | `fix/backend/auth-endpoint-bug` |
| **Technical** | `tech/` | `web/`, `backend/`, `mobile/` | Refactoring, optimization, internal improvements | `tech/web/optimize-image-loading` |
| **Chore** | `chore/` | `web/`, `backend/`, `mobile/` | Maintenance, documentation, minor updates | `chore/backend/update-dependencies` |
| **Setup** | `setup/` | `web/`, `backend/`, `mobile/`, `infra/`, `deps/` | Initial setup, configuration, environment | `setup/backend/add-flyway-migration` |

### Example Usage

```bash
# Create a new feature branch
git checkout -b feature/backend/user-authentication

# Make changes and commit
git add .
git commit -m "Add JWT-based user authentication"

# Push to remote
git push origin feature/backend/user-authentication

# After merging, delete the branch
git branch -d feature/backend/user-authentication
git push origin --delete feature/backend/user-authentication
```

---

## 🐛 Troubleshooting

### Backend Issues

#### Error: "Cannot connect to database"
**Solution:**
1. Check MySQL is running in XAMPP
2. Verify database `miniapp_db` exists
3. Check `application.properties` credentials are correct

#### Error: "Port 8080 already in use"
**Solution:**
```bash
# Find process using port 8080
netstat -ano | findstr :8080  # Windows
lsof -i :8080                 # Mac/Linux

# Kill the process or change port in application.properties
server.port=8081
```

#### Error: "Cannot resolve JwtAuthenticationFilter"
**Solution:**
1. Create `JwtAuthenticationFilter.java` in `security/` package
2. Create `CustomUserDetailsService.java` in `security/` package
3. Verify both files are in the correct package

#### Error: "403 Forbidden"
**Solution:**
- Check Spring Boot version in `pom.xml`
- If 2.x: Use `SecurityConfig-SpringBoot2.java`
- If 3.x: Use `SecurityConfig.java`
- See `FIX-403-FORBIDDEN.md` for detailed guide

### Frontend Issues

#### Error: "Network Error"
**Solution:**
1. Backend must be running on port 8080
2. Check `apiClient.js` has correct base URL
3. Check CORS is enabled in backend

#### Toast notifications not showing
**Solution:**
```bash
# Install react-toastify
npm install react-toastify

# Verify import in App.js
import 'react-toastify/dist/ReactToastify.css';
```

### Mobile Issues

#### Error: "Unable to connect to server"
**Solution:**
1. Use your **local IP address**, not `localhost`
2. Ensure backend is running
3. Device/emulator must be on same network
4. Check firewall isn't blocking port 8080

#### Gradle sync failed
**Solution:**
1. File → Invalidate Caches → Invalidate and Restart
2. Check internet connection
3. Delete `.gradle` folder and sync again

---

## ✅ Success Checklist

- [ ] MySQL running and database created
- [ ] Backend starts without errors
- [ ] Backend accessible at http://localhost:8080
- [ ] Frontend starts without errors
- [ ] Frontend accessible at http://localhost:3000
- [ ] Can register a new user
- [ ] Can login with credentials
- [ ] Can view profile page
- [ ] Can logout successfully
- [ ] Mobile app connects to backend (development ongoing)

---

**Developer: Villadarez, Niña Nicole S.**
