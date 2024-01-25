const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authenticateToken = require('../middleware/authenticateToken');

// Route to create a task
router.post('/create', authenticateToken, taskController.createTask);

// Route to get all user tasks with filters and pagination
router.get('/get-all', authenticateToken, taskController.getAllUserTasks);

// Route to update a task
router.put('/update/:task_id', authenticateToken, taskController.updateTask);

// Route to delete a task (soft deletion)
router.delete('/delete/:task_id', authenticateToken, taskController.deleteTask);

module.exports = router;
