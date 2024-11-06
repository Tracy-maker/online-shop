require('dotenv').config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db"); 
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const connectCloudinary = require("./config/cloudinary"); // Import connectCloudinary

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());
app.use("/images", express.static("upload/images"));

// Connect to the database and Cloudinary
connectDB();
connectCloudinary();

// Routes
app.use("/products", productRoutes);
app.use("/users", userRoutes);

//api endpoints
app.use("/api/user',userRouter");

// Server Listener
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
