// controllers/nearbyProductController.js
const NearbyProduct = require('../models/NearbyProductsModel');

exports.createProduct = async (req, res) => {
  try {
    const product = await NearbyProduct.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get nearby products based on current location
exports.getNearbyProducts = async (req, res) => {
  try {
    const { lng, lat, maxDistance } = req.query;

    const products = await NearbyProduct.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(lng), parseFloat(lat)]
          },
          $maxDistance: parseInt(maxDistance) || 10000 // meters
        }
      }
    });

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};