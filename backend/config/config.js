const dotenv = require("dotenv");
const { Resend } = require("resend");

// Load environment variables from the .env file
dotenv.config();

module.exports = {
  dbURI: process.env.MONGODB_URI,
  port: process.env.PORT || 4000,
  resend: new Resend(process.env.RESEND_API_KEY), 
};
