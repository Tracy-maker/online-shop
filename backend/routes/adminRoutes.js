const express = require("express");
const { body, param } = require("express-validator");
const router = express.Router();
const {
  adminLogin,
  getMessages,
  replyMessage,
  markAsSeen,
  sendMessage,
} = require("../controllers/adminController");
const verifyAdminToken = require("../middleware/verifyToken");
const { validate } = require("../middleware/errorHandler");

// Admin login route
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  validate,
  adminLogin
);

// Send a message (public route)
router.post(
  "/send-message",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("content").notEmpty().withMessage("Message content is required"),
  ],
  validate,
  sendMessage
);

// Apply middleware for protected routes
router.use(verifyAdminToken);

// Get all messages
router.get("/messages", getMessages);

// Reply to a message
router.post(
  "/messages/:id/reply",
  [
    param("id").isMongoId().withMessage("Invalid message ID"),
    body("reply").notEmpty().withMessage("Reply content is required"),
  ],
  validate,
  replyMessage
);

// Mark a message as seen
router.patch(
  "/messages/:id/seen",
  [param("id").isMongoId().withMessage("Invalid message ID")],
  validate,
  markAsSeen
);

module.exports = router;
