// server/middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
  // Log full error stack trace only in development or test
  if (process.env.NODE_ENV !== 'production') {
    console.error(`[${new Date().toISOString()}] Unhandled Error:\n`, err.stack);
  }

  const statusCode = err.status || 500;
  const message = err.message || 'Internal Server Error';

  // Send structured error response
  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { error: err.stack || err }),
  });
};

module.exports = errorHandler;