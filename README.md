# BlogFair

BlogFair is a full-stack blog application developed using Java Spring Boot for the backend and React.js for the frontend. It incorporates Spring Security for authentication and Spring Data JPA to interact with a MySQL database.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Database Configuration](#database-configuration)
- [Run the Application](#run-the-application)
- [Contributing](#contributing)

## Features

- User authentication and authorization using Spring Security.
- CRUD operations for blog posts.
- Responsive and user-friendly frontend built with React.js.
- MySQL database for data storage.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MySQL](https://www.mysql.com/)
- Your favorite Integrated Development Environment (IDE) for Java and JavaScript (e.g., IntelliJ IDEA, Eclipse, Visual Studio Code)

## Getting Started

Clone the repository:

```bash
git clone https://github.com/maanishsingh/blogfair.git
```

## Folder Structure

```
BlogFair/
|-- backend/
|   |-- src/
|   |   |-- main/
|   |   |   |-- java/
|   |   |   |   |-- com/
|   |   |   |   |   |-- blogging/
|   |   |   |   |   |   |-- blog/
|   |   |   |   |   |   |   |-- config/
|   |   |   |   |   |   |   |-- controller/
|   |   |   |   |   |   |   |-- entities/
|   |   |   |   |   |   |   |-- exceptions/
|   |   |   |   |   |   |   |-- payloads/
|   |   |   |   |   |   |   |-- repository/
|   |   |   |   |   |   |   |-- security/
|   |   |   |   |   |   |   |-- services/
|   |   |   |   |-- resources/
|   |   |   |   |   |-- application.properties
|   |-- pom.xml
|-- frontend/
|   |-- public/
|   |-- src/
|   |   |-- assets/
|   |   |-- auth/
|   |   |-- components/
|   |   |-- pages/
|   |   |-- services/
|   |   |-- App.css
|   |   |-- App.js
|   |   |-- index.js
|   |   |-- index.css
|   |-- tailwind.config.js
|   |-- package.json
|-- .gitignore
|-- README.md
```

## Backend Setup

1. Open the `backend` folder in your preferred IDE.
2. Build the project using Maven.
3. Run the Spring Boot application.

## Frontend Setup

1. Open the `frontend` folder in your preferred code editor.
2. Install dependencies using:

```bash
npm install
```

## Database Configuration

1. Create a MySQL database named `blogfair`.
2. Update the database connection details in `backend/src/main/resources/application.properties`.

## Run the Application

1. Start the backend server.
2. Start the frontend development server:

```bash
npm start
```

Visit `http://localhost:3000` in your browser to use the BlogFair application.

## Contributing

Feel free to contribute to the project. Fork the repository, make your changes, and submit a pull request.



---

Feel free to customize this README according to your specific details and add any additional information you find relevant for users and contributors.