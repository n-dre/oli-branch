// server/middleware/requestLogger.js

const requestLogger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass the request to the next middleware or route handler
};

module.exports = requestLogger;
