// controllers/financialHealthController.js
const FinancialHealth = require('../models/FinancialHealthModel');

exports.saveFinancialData = async (req, res) => {
  try {
    const { userId, monthlyExpenses, monthlyRevenue, profitability } = req.body;

    const financialData = await FinancialHealth.create({
      userId,
      monthlyExpenses,
      monthlyRevenue,
      profitability
    });

    res.status(201).json(financialData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getFinancialDataByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const financialData = await FinancialHealth.findOne({ userId });

    if (!financialData) {
      return res.status(404).json({ message: 'No financial data found for this user' });
    }

    res.json(financialData);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};