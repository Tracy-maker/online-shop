const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  reply: { type: String }, 
  timestamp: { type: Date, default: Date.now },
  repliedAt: { type: Date },
});

module.exports = mongoose.model("Message", messageSchema);
