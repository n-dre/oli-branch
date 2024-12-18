// server/config/db.js
const { Pool } = require('pg');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const connectPostgres = async () => {
  try {
    await pool.connect();
    console.log("Connected to PostgreSQL");
  } catch (error) {
    console.error("Failed to connect to PostgreSQL:", error);
  }
};

const connectMongoDB = async () => {
  const mongoURI = process.env.MONGODB_URI;
  const client = new MongoClient(mongoURI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("oli-branch");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

module.exports = { pool, connectPostgres, connectMongoDB };


