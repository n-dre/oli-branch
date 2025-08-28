// server/config/db.js
const { Pool } = require('pg');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

// PostgreSQL setup
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production'
    ? { rejectUnauthorized: false }
    : false
});

const connectPostgres = async () => {
  try {
    const client = await pool.connect();
    console.log('Connected to PostgreSQL successfully');
    client.release(); // Release after initial test connection
  } catch (error) {
    console.error('Failed to connect to PostgreSQL:', error);
    process.exit(1); // Exit on critical DB failure
  }
};

// MongoDB setup
let mongoClientInstance = null;

const connectMongoDB = async () => {
  if (mongoClientInstance) return mongoClientInstance;

  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    await client.connect();
    console.log('Connected to MongoDB successfully');

    // Store the connected client for reuse
    mongoClientInstance = client;
    return client.db("oli-branch");
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1); // Exit on critical DB failure
  }
};

// Gracefully close MongoDB connection
const closeMongoDBConnection = async () => {
  if (mongoClientInstance) {
    await mongoClientInstance.close();
    console.log('MongoDB connection closed');
    mongoClientInstance = null;
  }
};

module.exports = {
  pool,
  connectPostgres,
  connectMongoDB,
  closeMongoDBConnection,
};


