# Mini Authentication App
## Project Description

A mini authentication application that demonstrates a full-stack setup with ReactJS for the frontend, Spring Boot + Kotlin for the backend, and MySQL for the database.
It supports:

User registration and login

JWT-based authentication

Secure access to user profile data

This project can be used as a base for learning authentication flows in modern web and mobile applications.

## Technologies Used

Frontend: ReactJS, HTML, CSS, JavaScript

Backend: Spring Boot (Java/Kotlin), Spring Data JPA, JWT

Database: MySQL (via XAMPP)

Build Tools: Maven

Others: Postman for API testing, Git/GitHub for version control

## Steps to Run Backend

Start MySQL

Open XAMPP Control Panel → Start MySQL.

Create a database, e.g., miniapp_db.

Configure application.properties (Spring Boot backend)

spring.datasource.url=jdbc:mysql://localhost:3306/miniapp_db?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=  # your MySQL password if any
spring.jpa.hibernate.ddl-auto=update


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

## List of API Endpoints

| Endpoint   | Method | Description                                      |
|------------|--------|--------------------------------------------------|
| `/register` | POST   | Register a new user                              |
| `/login`    | POST   | Authenticate user and return JWT                |
| `/logout`   | POST   | Invalidate JWT (optional)                       |
| `/profile`  | GET    | Get the logged-in user’s profile (JWT required) |
