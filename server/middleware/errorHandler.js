// server/middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err : {}, // Hide stack trace in production
  });
};

module.exports = errorHandler;
