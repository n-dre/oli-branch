// controllers/chatCommunityController.js
const ChatMessage = require('../models/ChatCommunityModel');

exports.sendMessage = async (req, res) => {
  try {
    const message = await ChatMessage.create(req.body);
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getMessagesByRoom = async (req, res) => {
  try {
    const { roomId } = req.params;
    const messages = await ChatMessage.find({ roomId }).populate('userId', 'username');
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};