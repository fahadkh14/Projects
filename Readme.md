# 📝 Notes App

A simple **3-Tier Notes Application** built using **HTML, CSS, JavaScript, Node.js, Express, PostgreSQL, Docker, and Docker Compose**.

---

# 🎯 Project Goal

The goal of this project is to understand the fundamentals of **3-Tier Architecture** and **Docker Containerization**.

This project demonstrates how:

- The **Frontend** displays the user interface.
- The **Backend** processes user requests.
- The **Database** stores application data.
- Docker packages each service into its own container.
- Docker Compose runs all services together.

---

# 🏗️ 3-Tier Architecture

```
             User
               │
               ▼
+-----------------------------+
| Frontend (HTML/CSS/JS)      |
| Nginx Web Server            |
+-------------+---------------+
              │ HTTP
              ▼
+-----------------------------+
| Backend (Node.js + Express) |
| REST API                    |
+-------------+---------------+
              │ SQL
              ▼
+-----------------------------+
| PostgreSQL Database         |
+-----------------------------+
```

---

# 📂 Project Structure

```
notes-app/

├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── nginx.conf
│   └── Dockerfile
│
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── package.json
│   └── Dockerfile
│
├── database/
│   └── init.sql
│
├── docker-compose.yml
├── .env
└── README.md
```

---

# 🐳 Frontend Dockerfile

## Goal

The Frontend Dockerfile creates a Docker image that serves the HTML, CSS, and JavaScript files using **Nginx**.

### Step 1: Use Nginx Image

```dockerfile
FROM nginx:alpine
```

**Purpose**

- Uses the official lightweight Nginx image.
- Nginx will serve the frontend files.

---

### Step 2: Copy Frontend Files

```dockerfile
COPY . /usr/share/nginx/html
```

**Purpose**

Copies all frontend files:

- index.html
- style.css
- script.js

into Nginx's default web directory.

---

### Step 3: Copy Nginx Configuration

```dockerfile
COPY nginx.conf /etc/nginx/conf.d/default.conf
```

**Purpose**

Replaces the default Nginx configuration with the custom configuration.

---

### Step 4: Expose Port

```dockerfile
EXPOSE 80
```

**Purpose**

Tells Docker that the web server runs on port **80**.

---

### Step 5: Start Nginx

```dockerfile
CMD ["nginx","-g","daemon off;"]
```

**Purpose**

Starts the Nginx server when the container starts.

---

### Build Frontend Image

```bash
docker build -t notes-frontend ./frontend
```

---

# 🐳 Backend Dockerfile

## Goal

The Backend Dockerfile creates a Docker image for the Node.js API.

It installs all required packages and starts the Express server.

---

### Step 1: Use Node.js Image

```dockerfile
FROM node:20-alpine
```

**Purpose**

Uses the lightweight official Node.js image.

---

### Step 2: Create Working Directory

```dockerfile
WORKDIR /app
```

**Purpose**

Creates the `/app` directory inside the container.

All commands run from this directory.

---

### Step 3: Copy package.json

```dockerfile
COPY package*.json ./
```

**Purpose**

Copies the dependency files before the source code.

This allows Docker to cache the `npm install` layer and speeds up future builds.

---

### Step 4: Install Dependencies

```dockerfile
RUN npm install
```

**Purpose**

Installs all Node.js packages required by the application.

---

### Step 5: Copy Source Code

```dockerfile
COPY . .
```

**Purpose**

Copies:

- server.js
- db.js
- other backend files

into the container.

---

### Step 6: Expose Port

```dockerfile
EXPOSE 5000
```

**Purpose**

The backend API listens on port **5000**.

---

### Step 7: Start Server

```dockerfile
CMD ["node","server.js"]
```

**Purpose**

Starts the Express server automatically.

---

### Build Backend Image

```bash
docker build -t notes-backend ./backend
```

---

# 🐳 Docker Compose Goal

The purpose of **docker-compose.yml** is to manage multiple containers together.

It:

- Builds the frontend image
- Builds the backend image
- Pulls the PostgreSQL image
- Creates a shared Docker network
- Connects all services together
- Starts everything with one command

Run the complete project:

```bash
docker compose up --build
```

Stop the project:

```bash
docker compose down
```

---

# 🚀 Learning Outcomes

After completing this project, you will understand:

- 3-Tier Architecture
- Docker Images
- Docker Containers
- Dockerfiles
- Docker Compose
- Node.js API Development
- PostgreSQL Integration
- Container Networking
- Multi-container Applications

---
