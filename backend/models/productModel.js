const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
    },
    category: {
      type: String,
      required: [true, "Product category is required"],
      enum: ["women", "men", "kids"], // Matches the frontend options
    },
    subcategory: {
      type: String,
      required: [true, "Product subcategory is required"],
      enum: ["dress", "tops", "shirts", "pants", "accessories"], // Shared options across categories
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Price must be a positive number"],
    },
    color: {
      type: String,
      required: [true, "Product color is required"],
      enum: [
        "Black",
        "White",
        "Purple",
        "Pink",
        "Burgundy",
        "Red",
        "Blue",
        "Orange",
        "Beige",
        "Green",
        "Brown",
        "Yellow",
        "Grey",
        "Multicolor",
        "Brown Gray",
      ], 
    },
    usage: {
      type: String,
      required: [true, "Product usage is required"],
      enum: ["work", "casual", "sports", "formal"], // Matches frontend usage options
    },
    sizes: {
      type: Map,
      of: {
        type: Number,
        min: [0, "Size quantity must be a positive number"],
      },
      required: [true, "Product sizes are required"],
    },
    bestSeller: {
      type: Boolean,
      default: false,
    },
    newProduct: {
      type: Boolean,
      default: false,
    },
    images: {
      type: [String],
      required: [true, "Product images are required"],
      validate: {
        validator: function (array) {
          return array.length > 0 && array.length <= 4; // Ensure at least 1 and at most 4 images
        },
        message: "You must upload between 1 and 4 images.",
      },
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
