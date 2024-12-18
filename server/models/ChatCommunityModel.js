// server/models/ChatCommunityModel.js
const mongoose = require('mongoose');

const ChatCommunitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  topic: { type: String }, // E.g., "Financial Advice", "Product Recommendations"
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ChatCommunity', ChatCommunitySchema);
