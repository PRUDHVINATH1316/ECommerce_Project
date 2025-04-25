# 🛒 E-Commerce Management System

A simple console-based E-Commerce Management System built using **Java**, **Spring Boot**, **JDBC**, and **MySQL**. This project provides basic functionalities to manage products, customers, and orders in an e-commerce platform.

## 🔧 Technologies Used
- Java
- Spring Boot
- JDBC (Java Database Connectivity)
-  H2 (In-Memory Database)
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
2.Run the application

Open the project in an IDE like IntelliJ or Eclipse

Run the main class EcomProjApplication.java

📝 Note: The project uses an H2 in-memory database, so there's no need for manual database setup. Data will be reset on each run.


3.⚙️ Configuration - application.properties

spring.application.name=ecom-proj


spring.datasource.url=jdbc:h2:mem:prudhvi


spring.datasource.driverClassName=org.h2.Driver


spring.jpa.show-sql=true


spring.jpa.hibernate.ddl-auto=update


spring.jpa.defer-datasource-initialization=true




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
