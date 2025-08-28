// server/middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
  // Log error stack trace only in development or test
  if (process.env.NODE_ENV !== 'test') {
    console.error(`[${new Date().toISOString()}] Unhandled error:\n`, err.stack);
  }

  const statusCode = err.status || 500;
  const message = err.message || 'Internal Server Error';

  // Send error response
  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { error: err }),
  });
};

module.exports = errorHandler;
  