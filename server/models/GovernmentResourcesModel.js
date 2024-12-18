// server/models/GovernmentResourcesModel.js
const mongoose = require('mongoose');

const GovernmentResourcesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  type: { type: String, required: true }, // E.g., "Grant", "Loan", "Tax Incentive"
  eligibilityCriteria: { type: String },
  link: { type: String }, // URL for more information
  contactInfo: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('GovernmentResource', GovernmentResourcesSchema);
