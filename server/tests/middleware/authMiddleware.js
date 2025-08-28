// server/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user to request object
    req.user = decoded;

    // Proceed to next middleware
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired. Please log in again.' });
    } else if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token format.' });
    } else if (err.name === 'NotBeforeError') {
      return res.status(401).json({ message: 'Token not yet valid.' });
    } else {
      console.error('JWT Error:', err.message);
      return res.status(401).json({ message: 'Authentication failed.' });
    }
  }
};

module.exports = authMiddleware;
