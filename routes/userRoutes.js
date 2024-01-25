const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to create a user (no authentication required during creation)
router.post('/create', userController.createUser);

// Other user-related routes (login, logout, etc.) can be added here

module.exports = router;
