// server/models/ChatCommunityModel.js
const mongoose = require('mongoose');

const ChatMessageSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required'],
    },
    content: {
      type: String,
      required: [true, 'Message content is required'],
      trim: true,
    },
    topic: {
      type: String,
      trim: true,
      index: true, // Helps with filtering
    },
    parentMessageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ChatMessage',
      default: null, // Null means it's a top-level message
    },
    roomId: {
      type: String,
      trim: true,
      index: true, // Allows grouping messages into rooms/threads
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

// Indexes for common queries
ChatMessageSchema.index({ userId: 1 });
ChatMessageSchema.index({ roomId: 1 });
ChatMessageSchema.index({ topic: 1 });

module.exports = mongoose.model('ChatMessage', ChatMessageSchema);
