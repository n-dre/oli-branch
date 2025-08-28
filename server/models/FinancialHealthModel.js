// server/models/FinancialHealthModel.js
const mongoose = require('mongoose');

const FinancialMetricsSchema = new mongoose.Schema({
  labels: {
    type: [String],
    required: true,
    validate: {
      validator: arr => Array.isArray(arr) && arr.length > 0,
      message: 'Labels array cannot be empty',
    }
  },
  data: {
    type: [Number],
    required: true,
    validate: {
      validator: arr => Array.isArray(arr) && arr.length > 0,
      message: 'Data array cannot be empty',
    }
  }
}, { _id: false });

const FinancialHealthSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required'],
    index: true
  },
  monthlyExpenses: {
    type: FinancialMetricsSchema,
    default: undefined
  },
  monthlyRevenue: {
    type: FinancialMetricsSchema,
    default: undefined
  },
  profitability: {
    type: FinancialMetricsSchema,
    default: undefined
  }
}, {
  timestamps: true // Adds createdAt and updatedAt
});

module.exports = mongoose.model('FinancialHealth', FinancialHealthSchema);
