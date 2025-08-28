// server/models/NearbyProductsModel.js
const mongoose = require('mongoose');

const NearbyProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    type: {
      type: String,
      required: [true, 'Product type is required'],
      enum: {
        values: ['ATM', 'Bank Branch', 'Financial Advisor', 'Credit Union', 'Loan Office', 'Other'],
        message: '{VALUE} is not supported as a product type',
      },
    },
    description: {
      type: String,
      trim: true,
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point'
      },
      coordinates: {
        type: [Number],
        required: true,
        validate: {
          validator: function (coords) {
            const [lng, lat] = coords;
            return lng >= -180 && lng <= 180 && lat >= -90 && lat <= 90;
          },
          message: 'Coordinates must be [longitude (-180 to 180), latitude (-90 to 90)]'
        }
      }
    },
    distance: {
      type: Number,
      unit: { type: String, default: 'meters' }
    },
    contactInfo: {
      type: String,
      trim: true,
    }
  },
  {
    timestamps: true // Adds createdAt and updatedAt
  }
);

// Geospatial index for location-based queries
NearbyProductSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('NearbyProduct', NearbyProductSchema);
