// controllers/educationalResourceController.js
const EducationalResource = require('../models/EducationalResourcesModel');

exports.createResource = async (req, res) => {
  try {
    const resource = await EducationalResource.create(req.body);
    res.status(201).json(resource);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getResources = async (req, res) => {
  try {
    const { category, tag, q } = req.query;
    let filter = {};

    if (category) filter.categories = category;
    if (tag) filter.tags = tag;
    if (q) filter.$text = { $search: q };

    const resources = await EducationalResource.find(filter);
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};