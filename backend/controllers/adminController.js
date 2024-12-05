const Message = require("../models/message");

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: -1 }); // Sort by newest
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages." });
  }
};

exports.saveMessage = async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const newMessage = new Message({ name, email, phone, message });
    await newMessage.save();
    res.status(201).json({ message: "Message saved successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to save message." });
  }
};

exports.replyMessage = async (req, res) => {
  const { reply } = req.body;
  const { id } = req.params;

  if (!reply) {
    return res.status(400).json({ error: "Reply cannot be empty." });
  }

  try {
    const message = await Message.findById(id);
    if (!message) {
      return res.status(404).json({ error: "Message not found." });
    }

    message.reply = reply;
    message.repliedAt = new Date();
    await message.save();

    res.status(200).json({ message: "Reply sent successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to send reply." });
  }
};
