// server/models/GovernmentResourcesModel.js
const mongoose = require('mongoose');

const GovernmentResourceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    type: {
      type: String,
      required: [true, 'Resource type is required'],
      enum: {
        values: ['Grant', 'Loan', 'Tax Incentive', 'Subsidy', 'Program', 'Other'],
        message: '{VALUE} is not supported as a resource type',
      },
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
      //   minRevenue: 50000,
      //   maxEmployees: 100,
      //   location: "New York"
      // }
    },
    link: {
      type: String,
      validate: {
        validator: function (v) {
          return /^(https?:\/\/)/.test(v);
        },
        message: props => `${props.value} is not a valid URL!`,
      },
    },
    contactInfo: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

// Indexes for common queries
GovernmentResourceSchema.index({ type: 1 });
GovernmentResourceSchema.index({ title: 'text', description: 'text' });

module.exports = mongoose.model('GovernmentResource', GovernmentResourceSchema);
