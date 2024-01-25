# Task Manager API

Task Manager API is a RESTful API for managing tasks with user authentication.

## Features

- User registration and authentication
- Create, update, and delete tasks
- Filter and paginate tasks
- Soft deletion of tasks
- Subtask management

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sKyi01/jwt-auth-task-manager-nodejs-api.git
   
### Install dependencies:

cd task-manager-api
npm install


### Set up environment variables:

Create a .env file in the root directory and add the following:


PORT=3000
MONGODB_URI="#"
JWT_SECRET_KEY="#"

### Replace the MongoDB URI and JWT secret key with your configurations.

### Run the application:

npm start
The API will be accessible at http://localhost:2525.

### Usage
Register a new user

Log in to get an authentication token

Use the token to access protected routes

Testing

### To run tests, use:


npm test

### Contributing

Fork the repository.

Create a new branch: git checkout -b feature-name

Make your changes and commit them: git commit -m 'Add feature'

Push to the branch: git push origin feature-name

Submit a pull request.

### Feel free to customize it further based on your project's specific needs.
