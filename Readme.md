# Mini LinkedIn-like Community Platform

A simplified professional community platform inspired by LinkedIn, built with a **React** frontend, **Node.js/Express** backend, and **MongoDB** database.  
It supports user authentication, profile management, creating and browsing public posts, and a clean responsive UI styled with **Tailwind CSS**.

---

I have used the same image for all the users due to shortage of time but we can use cloudinary for uploading the user avatar and displaying the images of different users

## Features

- **User Authentication:**

  - Register / Login with email & password
  - JWT-based authentication with access & refresh tokens (stored in secure httpOnly cookies)
  - Logout & token refresh support

- **User Profiles:**

  - Personal profile with name, email, bio
  - View posts of all the users
  - Update your own profile (email, bio)

- **Post Feed:**

  - Create text-only posts
  - Public feed with posts sorted newest first
  - Author info shown with each post (custom emoji avatars for users)

- **Frontend:**

  - Built with React.js and Tailwind CSS for responsive & modern UI
  - React Router v6 for SPA routing
  - Axios for backend API communication, with centralized API helpers
  - Auth context to manage logged-in user state and protected routes
  - User-friendly forms, validation, and notifications

- **Backend:**
  - Node.js + Express REST API
  - MongoDB with Mongoose ODM
  - Secure password hashing with bcrypt
  - JWT authentication with access and refresh tokens
  - Well-structured MVC pattern with controllers, routes, models, middleware
  - Error handling and validation
  - CORS configured for frontend-backend communication with credentials

---

## Tech Stack

| Layer      | Technology                             |
| ---------- | -------------------------------------- |
| Frontend   | React.js, Tailwind CSS                 |
| Backend    | Node.js, Express                       |
| Database   | MongoDB, Mongoose                      |
| Auth       | JWT (JSON Web Tokens)                  |
| API Client | Axios                                  |
| Dev Tools  | Vite (for frontend), Nodemon (backend) |

---

## Live Demo & Deployment

- Project URL : https://linkednmini.netlify.app/
- Deployed Backend on Render - https://linkedin-mini-sqz1.onrender.com
- Deployed Frontend on Netlify - https://linkednmini.netlify.app/

---

## Getting Started

Prerequisites
Node.js (v14+ recommended)

MongoDB instance (local or Atlas cloud database)

Git

Setup and Run Locally
Clone the repository

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Set up the backend

cd backend
npm install
Create a .env file in the backend directory with the following (fill out your own values):

text
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_here
PORT=8000
Start the backend server (with Nodemon for hot reload during dev):

npm run server
or to start normally:

npm start
Set up the frontend

cd ../frontend
npm install
In the frontend folder, create a .env file and add:

text
VITE_API_URL=http://localhost:8000/api/v1
(or the appropriate backend URL for production/cloud)

Run the React development server (Vite):

npm run dev
Access the Application

Frontend: Open http://localhost:5173 in your browser.

Backend API: http://localhost:8000/api/v1
