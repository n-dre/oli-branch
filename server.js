const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const path = require('path');
const { Pool } = require('pg'); // PostgreSQL setup
const router = express.Router();

const authMiddleware = require('../../middleware/authMiddleware');
console.log('authMiddleware:', authMiddleware); // This should log the contents of the file or an empty object if not found

// ... rest of your code
const errorHandler = require('./middleware/errorHandler');
const requestLogger = require('./middleware/requestLogger');

// Access environment variables
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://contact:y5k01zXkkZRKIZaF@cluster0.kwqwu.mongodb.net/oli-branch?retryWrites=true&w=majority';
const port = process.env.PORT || 3000;

console.log(authMiddleware); // Should print the contents of the file or an empty object if correctly loaded

const app = express();
const cors = require('cors');

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
app.use(requestLogger); // Logs every request

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

app.use('/api/protected', authMiddleware); // Only protected routes require auth

// Define routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));

// Catch 404 errors for undefined routes
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// Error handling middleware (always placed after route definitions)
app.use(errorHandler);

// Route for registering a new user (PostgreSQL)
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  console.log('POST /register hit');
  res.send('Register endpoint hit');

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

// Route for user login (PostgreSQL)
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

// Example route to get nearby products
router.get('/api/products/nearby', async (req, res) => {
  const { latitude, longitude, radius } = req.query;

  // Dummy data to simulate response; replace with database query in production
  const products = [
    { id: 1, name: "Product A", description: "Sample product", distance: 5 },
    { id: 2, name: "Product B", description: "Another product", distance: 8 },
  ];

  // Filter products within the radius
  const nearbyProducts = products.filter((product) => product.distance <= radius);

  res.json(nearbyProducts);
});

module.exports = router;



