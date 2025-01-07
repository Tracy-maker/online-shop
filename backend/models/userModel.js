const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationExpiresAt: Date,
    cartData: { type: Object, default: {} },
  },
  { minimize: false } 
);

// Create the user model or use an existing one
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

// Export the model
module.exports = userModel;
