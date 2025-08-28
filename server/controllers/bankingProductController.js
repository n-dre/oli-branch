// controllers/bankingProductController.js
const BankingProduct = require('../models/BankingProductsModel');

exports.createProduct = async (req, res) => {
  try {
    const product = await BankingProduct.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const { type, provider } = req.query;
    const filter = {};
    if (type) filter.type = type;
    if (provider) filter.provider = provider;

    const products = await BankingProduct.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};