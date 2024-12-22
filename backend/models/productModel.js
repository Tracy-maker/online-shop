const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["women", "men", "kids", "accessories"],
    },
    subcategory: {
      type: String,
      required: true,
      enum: ["tops", "pants", "skirts"], // Add more as needed
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    color: {
      type: String,
      required: true,
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
      required: true,
      enum: ["work", "date", "anniversary"],
    },
    sizes: {
      type: Map,
      of: Number,
      required: true,
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
      required: true,
      validate: {
        validator: function (array) {
          return array.length <= 4; 
        },
        message: "You can upload a maximum of 4 images.",
      },
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
