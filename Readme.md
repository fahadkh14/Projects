# 🎯 Project Goal

The objective of this project is to build a simple **3-Tier Task Manager Application** by containerizing each layer with Docker and managing all services using Docker Compose.

This project helps you understand how a modern web application is structured and deployed using containers.

## Goals

- Build a **Frontend** using HTML, JavaScript, and Nginx.
- Build a **Backend** REST API using Node.js and Express.
- Store application data in a **PostgreSQL** database.
- Create separate **Dockerfiles** for the Frontend and Backend.
- Build custom Docker images using Dockerfiles.
- Run all services together using Docker Compose.
- Learn Docker networking and communication between containers.
- Understand how a 3-tier architecture works in a real-world application.

---

# 🐳 Docker Build Goals

## Frontend Dockerfile

The Frontend Dockerfile is responsible for:

- Creating a Docker image for the frontend.
- Using the official **Nginx** image as the base image.
- Copying HTML, CSS, and JavaScript files into the Nginx web directory.
- Copying the custom `nginx.conf` file.
- Serving the application on **Port 80** inside the container.

Build manually:

```bash
docker build -t task-frontend ./frontend
```

Run manually:

```bash
docker run -d -p 3000:80 task-frontend
```

---

## Backend Dockerfile

The Backend Dockerfile is responsible for:

- Creating a Docker image for the Node.js backend.
- Using the official **Node.js** image.
- Installing all project dependencies.
- Copying the application source code.
- Exposing **Port 5000**.
- Starting the Express server.

Build manually:

```bash
docker build -t task-backend ./backend
```

Run manually:

```bash
docker run -d -p 5000:5000 task-backend
```

---

# 🐳 Docker Compose Goal

Instead of starting each container manually, Docker Compose allows you to:

- Start the Frontend container.
- Start the Backend container.
- Start the PostgreSQL container.
- Create a private Docker network.
- Connect all three containers automatically.
- Manage the complete application using a single command.

Build all services:

```bash
docker-compose build
```

Start all services:

```bash
docker-compose up
```

Run in detached mode:

```bash
docker-compose up -d
```

Stop all services:

```bash
docker-compose down
```

---

# 🚀 Expected Outcome

After completing this project, you will be able to:

- Write Dockerfiles for multiple services.
- Build Docker images.
- Run multi-container applications.
- Understand 3-tier architecture.
- Connect containers using Docker networking.
- Deploy a complete application using Docker Compose.
- Gain hands-on experience with containerized web applications.
