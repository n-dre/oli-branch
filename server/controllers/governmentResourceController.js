// controllers/governmentResourceController.js
const GovernmentResource = require('../models/GovernmentResourcesModel');

exports.createResource = async (req, res) => {
  try {
    const resource = await GovernmentResource.create(req.body);
    res.status(201).json(resource);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getResources = async (req, res) => {
  try {
    const { type } = req.query;
    const filter = {};
    if (type) filter.type = type;

    const resources = await GovernmentResource.find(filter);
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};