// server/models/EducationalResourcesModel.js
const mongoose = require('mongoose');

const EducationalResourceSchema = new mongoose.Schema(
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
        values: ['Article', 'Video', 'Course', 'Podcast', 'PDF', 'Interactive Quiz', 'Webinar'],
        message: '{VALUE} is not supported as a resource type',
      },
    },
    description: {
      type: String,
      trim: true,
    },
    link: {
      type: String,
      required: [true, 'Link is required'],
      validate: {
        validator: function (v) {
          return /^(https?:\/\/)/.test(v);
        },
        message: props => `${props.value} is not a valid URL!`,
      },
    },
    duration: {
      type: String,
      // Example format: "10 minutes", "1 hour", "3 weeks"
    },
    categories: {
      type: [String],
      default: [],
      index: true,
    },
    tags: {
      type: [String],
      default: [],
      index: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

// Indexes for common queries
EducationalResourceSchema.index({ title: 'text', description: 'text' });
EducationalResourceSchema.index({ categories: 1 });
EducationalResourceSchema.index({ tags: 1 });

module.exports = mongoose.model('EducationalResource', EducationalResourceSchema);
