const jwt = require("jsonwebtoken");
const User = require("../models/userModels");
const config = require("../config/config");

exports.signup = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    await user.save();
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user || user.password !== req.body.password) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    const token = jwt.sign({ id: user._id }, config.secret);
    res.json({ success: true, token });
  } catch (error) {
    res.status(500).json({ error: "Failed to login" });
  }
};
