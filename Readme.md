# Mini LinkedIn-like Community Platform

A simplified professional community platform inspired by LinkedIn, built with a **React** frontend, **Node.js/Express** backend, and **MongoDB** database.  
It supports user authentication, profile management, creating and browsing public posts, and a clean responsive UI styled with **Tailwind CSS**.

---

## Features

- **User Authentication:**

  - Register / Login with email & password
  - JWT-based authentication with access & refresh tokens (stored in secure httpOnly cookies)
  - Logout & token refresh support

- **User Profiles:**

  - Personal profile with name, email, bio
  - View profiles of other users and their posts
  - Update your own profile (email, bio)

- **Post Feed:**

  - Create text-only posts
  - Public feed with posts sorted newest first
  - View posts of specific users
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

- You can deploy backend on platforms like Render, Railway, or Heroku.
- Frontend can be deployed on Vercel, Netlify, or similar static hosts.
- Use **MongoDB Atlas** for cloud-hosted MongoDB.

See [Deployment Guide](#deployment) below.

---

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB instance (local or Atlas)
- Git

### Setup and Run Locally

1. Clone the repo
