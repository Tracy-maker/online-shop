const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    userId: { type: String, required: false }, 
    name: { type: String, required: true },
    content: { type: String, required: true },
    replied: { type: Boolean, default: false },
    reply: { type: String, default: "" },
    isSeen: { type: Boolean, default: false }, 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
