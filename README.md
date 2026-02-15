# 🎬 Movie Booking Backend API (In Progress)

A scalable backend system for a Movie Ticket Booking Application built using **Node.js, Express.js, and MongoDB**.

This project implements authentication, role-based authorization, booking workflow, and payment handling following a structured backend architecture.

---

## 🚀 Project Status

🔧 Actively under development.

Core backend modules are implemented and tested. Additional improvements and optimizations are ongoing.

---

## 🌿 Branch Structure

- `main` – Stable and tested code
- `Features_*` – Feature-specific development branches (e.g., Movie CRUD, Booking, Payment, Authentication)

Development is done in feature branches and merged into `main` after testing.

---

## ✅ Features Implemented

- User Registration & Login (JWT Authentication)
- Role-Based Access Control (Admin, Customer, Viewer)
- Movie Management (Create, Read, Update, Delete)
- Booking workflow with validation logic
- Payment processing and booking status update
- MongoDB integration using Mongoose ODM
- MVC architecture with modular routing
- Middleware-based authentication & error handling
- API testing using Postman

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JSON Web Token (JWT)
- **Architecture:** MVC Pattern
- **Tools:** Postman, Git, GitHub

---

## 📂 Project Structure

- `controllers/` – Business logic
- `models/` – Database schemas
- `routes/` – API routes
- `middlewares/` – Authentication & validation
- `config/` – Database configuration
- `app.js` / `server.js` – Application entry point

---

## ⚙️ How to Run

1. Clone the repository:
   git clone <your-repo-link>

2. Navigate to the project directory:
   cd <project-folder>

3. Install dependencies:
   npm install

4. Create a `.env` file and configure:
   PORT=5000
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-secret-key>

5. Start the server:
   npm start

---

## 📌 Upcoming Improvements

- Seat availability concurrency handling
- Payment gateway integration
- API documentation (Swagger)
- Deployment on cloud platform
- Pagination and filtering

---

## 🎯 Learning Outcomes

- Built secure RESTful APIs with Authentication & RBAC
- Implemented real-world booking and payment workflow
- Designed scalable backend architecture
- Practiced structured Git branching strategy
