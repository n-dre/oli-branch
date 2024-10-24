const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const path = require('path');
const { Pool } = require('pg'); // PostgreSQL setup

// Access environment variables
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://contact:y5k01zXkkZRKIZaF@cluster0.kwqwu.mongodb.net/oli-branch?retryWrites=true&w=majority';
const port = process.env.PORT || 3000;

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// PostgreSQL connection setup (if you still need it)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false  // Disable SSL here
});

// MongoDB connection setup
async function runMongoDB() {
  try {
    const client = new MongoClient(mongoURI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    console.log("Connected to MongoDB:", mongoURI);

    // Use the 'oli-branch' database
    const db = client.db('oli-branch');

    // Example route to fetch users from MongoDB
    app.get('/users', (req, res) => {
      db.collection('users').find({}).toArray((err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Error fetching users');
        }
        res.json(result);
      });
    });

  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
  }
}

// Start MongoDB connection
runMongoDB().catch(console.dir);

// Route for registering a new user (PostgreSQL)
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  console.log('POST /register hit');
  res.send('Register endpoint hit');

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

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Example API route to test PostgreSQL database connection
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

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



