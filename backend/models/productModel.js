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
    },
    subcategory: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    color: {
      type: String,
      required: true,
    },
    usage: {
      type: String,
      required: true,
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
