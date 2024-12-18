// server/models/BankingProductsModel.js
const mongoose = require('mongoose');

const BankingProductsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, // e.g., "Loan", "Savings Account"
  interestRate: { type: Number },
  fees: { type: Number },
  description: { type: String },
  eligibilityCriteria: { type: String },
  provider: { type: String }, // Bank or institution providing the product
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('BankingProduct', BankingProductsSchema);
