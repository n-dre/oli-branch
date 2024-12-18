// server/models/NearbyProductsModel.js
const mongoose = require('mongoose');

const NearbyProductsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, // E.g., "ATM", "Bank Branch", "Financial Advisor"
  description: { type: String },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  distance: { type: Number }, // Distance from the user's current location
  contactInfo: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('NearbyProduct', NearbyProductsSchema);
