# Task-Management

This is a Task Management project where tasks can be created along with the title and description.

# TASK MANAGEMENT Application

## Overview

This is a full-stack Task Management application that allows users to manage their tasks efficiently. It includes features such as task creation, viewing, editing, marking as completed, and deletion, with data persistence using a database.

## Features

- Create tasks with a title and description.
- View a list of all tasks.
- Edit task details.
- Mark tasks as completed.
- Delete tasks.
- Data persistence using MongoDB.
- Validation to ensure task titles are not empty and proper error handling.

## Installation Instructions

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   MONGO_URI=<your_mongo_db_connection_string>
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

## Usage

1. Open the browser and navigate to `http://localhost:8000`.
2. Use the interface to:
   - Add new tasks with a title and description.
   - View the list of tasks.
   - Edit or delete tasks.
   - Mark tasks as completed.

## Code Structure

### Backend

- **`controllers/`**: Contains logic for handling API requests.
- **`models/`**: Includes Mongoose models for database schemas.
- **`routes/`**: Defines API endpoints for task-related operations.
- **`config/`**: Handles database connection setup.
- **`middleware/`**: Error handling middleware.

## Key Design Decisions

1. Separation of Concerns: The backend handles API logic, while the frontend focuses on user interactions and UI.
2. MongoDB for Persistence: Chosen for its flexibility and seamless integration with Node.js using Mongoose.
3. RESTful API Design: Simplifies communication between frontend and backend.
4. Error Handling: Implemented centralized error handling for better debugging and user feedback.

---
