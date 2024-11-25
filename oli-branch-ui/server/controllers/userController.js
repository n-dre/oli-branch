// controllers/userController.js
exports.registerUser = (req, res) => {
    const { username, password } = req.body;
    // Add logic to handle registration
    res.status(200).json({ message: 'User registered successfully!' });
  };
  
  exports.loginUser = (req, res) => {
    const { username, password } = req.body;
    // Add logic to handle login
    res.status(200).json({ message: 'User logged in successfully!' });
  };
  