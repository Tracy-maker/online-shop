const express = require("express");
const router = express.Router();
const {
  getMessages,
  saveMessage,
  replyMessage,
  markAsSeen,
} = require("../controllers/adminController");

// Get all messages
router.get("/messages", getMessages);

// Store a new message
router.post("/new-messages", saveMessage);

// Reply to a message
router.post("/messages/:id/reply", replyMessage);

// Mark a message as seen
router.patch("/messages/:id/seen", markAsSeen);

module.exports = router;
