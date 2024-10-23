// routes/userRoutes.js
const express = require('express');
const router = express.Router();

// Import controllers
const { registerUser, loginUser } = require('../controllers/userController');

// Route for registering a user
router.post('/register', registerUser);

// Route for logging in a user
router.post('/login', loginUser);

module.exports = router;
