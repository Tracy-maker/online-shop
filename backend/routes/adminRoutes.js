const express = require("express");
const router = express.Router();
const {
  getMessages,
  saveMessage,
  replyMessage,
} = require("../controllers/adminController");

// get all messages
router.get("/messages", getMessages);

// store messages
router.post("/messages", saveMessage);

// reply message to customer
router.post("/messages/:id/reply", replyMessage);

module.exports = router;
