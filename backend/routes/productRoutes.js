const express = require("express");
const { listProducts, addProduct, removeProduct, singleProduct } = require("../controllers/productController");
const upload = require("../middleware/multer");
const adminAuth = require("../middleware/adminAuth");

const router = express.Router();

router.get("/list", listProducts);
router.post("/add", adminAuth, upload.fields([
  { name: "image1", maxCount: 1 },
  { name: "image2", maxCount: 1 },
  { name: "image3", maxCount: 1 },
  { name: "image4", maxCount: 1 }
]), addProduct);
router.post("/remove", adminAuth, removeProduct);
router.post("/single", singleProduct);

module.exports = router;
