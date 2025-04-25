# 🛒 E-Commerce Management System

A simple console-based E-Commerce Management System built using **Java**, **Spring Boot**, **JDBC**, and **MySQL**. This project provides basic functionalities to manage products, customers, and orders in an e-commerce platform.

## 🔧 Technologies Used
- Java
- Spring Boot
- JDBC (Java Database Connectivity)
- MySQL
- Maven

## 📌 Features
- Add, update, delete, and view products
- Manage customer details
- Place and manage customer orders
- Menu-driven interface for smooth navigation
- Robust database interaction using Spring Boot and JDBC

## 💻 How to Run

1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/ecom-proj.git
   cd ecom-proj
2.Set up MySQL database

Create a database (e.g., ecommerce_db)

Import SQL tables if provided (or allow the app to create tables)



3.Configure database in application.properties




spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce_db



spring.datasource.username=your_username



spring.datasource.password=your_password



4.Run the application

Open the project in an IDE like IntelliJ or Eclipse

Run the main class EcomProjApplication.java




📂 Project Structure
ecom-proj/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/ecomproj/
│   │   │       ├── controller/
│   │   │       ├── model/
│   │   │       ├── repository/
│   │   │       └── service/
│   │   └── resources/
│   │       └── application.properties
├── pom.xml
