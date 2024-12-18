// server.js
const express = require('express'); 
const { MongoClient, ServerApiVersion } = require('mongodb');
const path = require('path');
const { pool, connectPostgres, connectMongoDB } = require('./server/config/db'); // Only import once
// server.js
const authMiddleware = require('./server/middleware/authMiddleware');
const errorHandler = require('./server/middleware/errorHandler');
const requestLogger = require('./server/middleware/requestLogger');
const cors = require('cors');

// Environment variables and MongoDB URI
const uri = "mongodb+srv://contact:<db_password>@cluster0.kwqwu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const port = process.env.PORT || 3000;

const app = express();

// Middleware to parse JSON bodies and log requests
app.use(express.json());
app.use(cors());
app.use(requestLogger);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// Start MongoDB connection
runMongoDB().catch(console.dir);

// Define routes
app.use('/api/protected', authMiddleware);
app.use('/api/auth', require('./server/routes/authRoutes'));
app.use('/api/products', require('./server/routes/productRoutes'));

// Error handling middleware
app.use(errorHandler);

// Register user (PostgreSQL)
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
      [username, email, hashedPassword]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error registering user');
  }
});

// Login user (PostgreSQL)
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    const user = result.rows[0];

    if (user && await bcrypt.compare(password, user.password)) {
      res.status(200).json({ message: 'Login successful', user });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error logging in');
  }
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Test PostgreSQL connection route
app.get('/api/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()'); // Test query
    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.send('Error connecting to the database: ' + err);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app; // For testing



 
