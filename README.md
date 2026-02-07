# Mini Authentication App 📱
## Project Description

A mini authentication application that demonstrates a full-stack setup with ReactJS for the frontend, Spring Boot for the backend, Kotlin for the mobile, and MySQL for the database.
It supports:

User registration and login

JWT-based authentication

Secure access to user profile data

This project can be used as a base for learning authentication flows in modern web and mobile applications.

## Technologies Used

Frontend: ReactJS, HTML, CSS, JavaScript

Backend: Spring Boot, Spring Data JPA, JWT

Mobile: Kotlin

Database: MySQL (via XAMPP)

Build Tools: Maven

Others: Postman for API testing, Git/GitHub for version control

## Steps to Run Backend

Start MySQL

Open XAMPP Control Panel → Start MySQL.

Create a database, e.g., miniapp_db.

Configure application.properties

Run the backend

Using IDE (IntelliJ, VS Code): Open BackendApplication.java → Run.

OR using Maven (if installed):

cd backend

mvn spring-boot:run


Backend runs on http://localhost:8080
 by default.

## Steps to Run Web App

Open a terminal in the frontend project folder.

Install dependencies:

npm install


Start the React development server:

npm start


The app runs on http://localhost:3000
 and communicates with the backend for authentication.

## Steps to Run Mobile App

Open Mobile Project:

- Open **Android Studio**
- Click **Open**
- Select the `mobile/` project folder

Configure API Base URL:

Update the backend API URL to use your machine’s local IP address:
```kotlin
const val BASE_URL = "http://192.168.1.100:8080/"
```

Sync Gradle:

Allow Android Studio to finish downloading and syncing Gradle dependencies

Run the Application:

Connect an Android device or start an emulator

Click Run ▶ in Android Studio

## Branch Naming Convention 

All branch names must clearly identify the **Type**, the **Scope** (where the change occurs), and a short, descriptive name.

Format: `<type>/<scope>/<description>`
- Use **lowercase letters**
- Use **hyphens (-)** for word separation
- Keep descriptions **short and meaningful**

| Main Task Type | Prefix | Scope Options | Description | Example Branch Name |
| :--- | :--- | :--- | :--- | :--- |
| **Feature** | `feature/` | `web/`, `backend/`, `mobile/` | For adding new user-facing functionality. | `feature/web/user-profile-ui` |
| **Bug Fix** | `fix/` | `web/`, `backend/`, `mobile/` | For fixing bugs or unexpected behavior. | `fix/backend/auth-endpoint-bug` |
| **Technical** | `tech/` | `web/`, `backend/`, `mobile/` | For non-functional changes such as refactoring, optimization, or internal improvements. | `tech/web/optimize-image-loading` |
| **Chore** | `chore/` | `web/`, `backend/`, `mobile/` | For maintenance tasks (cleanup, documentation, minor updates). | `chore/backend/update-dependencies` |
| **Setup** | `setup/` | `web/`, `backend/`, `mobile/`, `infra/`, `deps/` | For initial setup, configuration, or environment changes. | `setup/backend/add-flyway-migration` |

---

### Branch Naming Rules
- Always follow the `<type>/<scope>/<description>` format
- Avoid vague names like `test`, `temp`, or `new-branch`
- Do not include personal names in branch names
- Delete branches after they are merged

---

### Example Usage
```bash
git checkout -b feature/backend/user-authentication
git commit -m "Add JWT-based user authentication"
git push origin feature/backend/user-authentication
```

## List of API Endpoints

| Endpoint   | Method | Description                                      |
|------------|--------|--------------------------------------------------|
| `/register` | POST   | Register a new user                              |
| `/login`    | POST   | Authenticate user and return JWT                |
| `/logout`   | POST   | Invalidate JWT (optional)                       |
| `/profile`  | GET    | Get the logged-in user’s profile (JWT required) |
