const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');
const { Pool } = require('pg'); // Import PostgreSQL

const mongoURI = process.env.MONGODB_URI;

const app = express();
const port = process.env.PORT || 3000;

// PostgreSQL connection setup
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// MongoDB connection
MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;

  const db = client.db('oli-branch');  // Replace with your MongoDB database name

  // Example route to fetch users from MongoDB
  app.get('/users', (req, res) => {
    db.collection('users').find({}).toArray((err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });
});

// Route for registering a new user (PostgreSQL)
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
      [username, email, password]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error registering user');
  }
});

// Serve static files (if applicable)
app.use(express.static(path.join(__dirname, 'public')));

// Example API route to test database connection (PostgreSQL)
app.get('/api/test-db', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()'); // Query to get the current time
    res.send(result.rows);
    client.release();
  } catch (err) {
    console.error(err);
    res.send('Error connecting to the database: ' + err);
  }
});

// Route for user login (PostgreSQL)
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);

    if (result.rows.length > 0) {
      res.status(200).json({ message: 'Login successful', user: result.rows[0] });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error logging in');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

