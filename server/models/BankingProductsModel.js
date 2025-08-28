/// server/models/BankingProductsModel.js
const mongoose = require('mongoose');

const BankingProductsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
    },
    type: {
      type: String,
      required: [true, 'Product type is required'],
      enum: {
        values: ['Loan', 'Savings Account', 'Checking Account', 'Credit Card', 'CD', 'Mortgage', 'Other'],
        message: '{VALUE} is not supported as a product type',
      },
    },
    interestRate: {
      type: Number,
      min: [0, 'Interest rate cannot be negative'],
      max: [100, 'Interest rate cannot exceed 100%'],
    },
    fees: {
      type: Number,
      default: 0,
      min: [0, 'Fees cannot be negative'],
    },
    description: {
      type: String,
      trim: true,
    },
    eligibilityCriteria: {
      type: Map,
      of: mongoose.Schema.Types.Mixed,
      default: null,
      // Example:
      // eligibilityCriteria: {
      //   minCreditScore: 600,
      //   minIncome: 30000,
      //   residency: "US"
      // }
    },
    provider: {
      type: String,
      required: [true, 'Provider is required'],
      trim: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

// Indexes (optional, improve query performance)
BankingProductsSchema.index({ type: 1 });
BankingProductsSchema.index({ provider: 1 });
BankingProductsSchema.index({ name: 'text' }); // For full-text search

module.exports = mongoose.model('BankingProduct', BankingProductsSchema);