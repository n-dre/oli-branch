// server/routes/productRoutes.js
const express = require('express');

module.exports = (client) => {
  const router = express.Router();
  const db = client.db('your_db_name'); // Replace with your actual DB name

  // Get all products
  router.get('/', async (req, res) => {
    try {
      const products = await db.collection('products').find().toArray();
      res.json(products);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching products', error: err.message });
    }
  });

  return router;
};
