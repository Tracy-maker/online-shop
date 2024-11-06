const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModels");
const config = require("../config/config");
const validator = require("validator");

// Helper function to create JWT token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Signup a new user
exports.signup = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).json({ success: true, message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
};

// Login an existing user
exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    res.status(500).json({ error: "Failed to login" });
  }
};

// Admin-only route
exports.admin = async (req, res) => {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ error: "Admin access required" });
  }
  res.json({ message: "Welcome, admin!" });
};

// Register a new user by an admin
exports.register = async (req, res) => {
  try {
    const { name, email, password, isAdmin } = req.body;
    console.log("Received data:", req.body); 
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Please enter a valid email" });
    }
    if (password.length < 8) {
      return res.status(400).json({ success: false, message: "Password must be at least 8 characters" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      isAdmin: isAdmin || false,
    });
    await user.save();
    const token = createToken(user._id);
    res.status(201).json({
      success: true,
      message: "User registered by admin successfully",
      token,
    });
  } catch (error) {
    console.error("Error in register function:", error); 
    res.status(500).json({ error: "Failed to register user" });
  }
};
