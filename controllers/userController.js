const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
  try {
    const { username, password, phone_number, priority } = req.body;

    // Hash the password before saving it to the database

    const newUser = await User.create({
      username,
      phone_number,
      priority,
    });

    console.log("User Id ",newUser._id)

    // Generate a JWT
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

    // Include the JWT in the response
    res.json({
      message: 'User created successfully',
      user: newUser,
      token: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add other user-related controller functions as needed
