// server/models/EducationalResourcesModel.js
const mongoose = require('mongoose');

const EducationalResourcesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true }, // E.g., "Article", "Course", "Video"
  description: { type: String },
  link: { type: String, required: true }, // URL to the resource
  duration: { type: String }, // Duration for videos or courses
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('EducationalResource', EducationalResourcesSchema);
