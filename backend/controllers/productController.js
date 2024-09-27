const Product = require("../models/productModel");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (e) {
    res.status(500).json({ error: "Failed to get all products" });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    const lastProduct = products[products.length - 1];
    const id = lastProduct ? lastProduct.id + 1 : 1;

    const newProduct = new Product({
      id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    await newProduct.save();
    res.json({ success: true, product: newProduct });
  } catch (e) {
    res.status(500).json({ error: "Failed to add product" });
  }
};

exports.removeProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({ id: req.body.id });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ success: true, message: "Product removed" });
  } catch (e) {
    res.status(500).json({ error: "Failed to remove product" });
  }
};
