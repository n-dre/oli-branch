const express = require('express');
const path = require('path');
const { Pool } = require('pg'); // Import PostgreSQL

const app = express();
const port = process.env.PORT || 3000;

// PostgreSQL connection setup
const pool = new Pool({
  connectionString: process.env.HEROKU_POSTGRESQL_ORANGE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Serve static files (if applicable)
app.use(express.static(path.join(__dirname, 'public')));

// Example API route to test database connection
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
