const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to handle JSON requests
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Oli-Branch Server');
});

// Add more routes as needed here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
