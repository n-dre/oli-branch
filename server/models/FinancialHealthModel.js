// server/models/FinancialHealthModel.js
const mongoose = require('mongoose');

const FinancialHealthSchema = new mongoose.Schema({
  monthlyExpenses: {
    labels: [String],
    data: [Number]
  },
  monthlyRevenue: {
    labels: [String],
    data: [Number]
  },
  profitability: {
    labels: [String],
    data: [Number]
  }
});

module.exports = mongoose.model('FinancialHealth', FinancialHealthSchema);
