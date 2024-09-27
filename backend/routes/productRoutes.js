const express = require("express");
const { getAllProducts, addProduct, removeProduct } = require("../controllers/productController");

const router = express.Router();

router.get("/", getAllProducts);
router.post("/add", addProduct);
router.post("/remove", removeProduct);

module.exports = router;
