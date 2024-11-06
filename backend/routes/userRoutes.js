const express = require("express");
const { signup, login, admin, register } = require("../controllers/userController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/register",register); 
router.get("/admin", verifyToken, admin); 

module.exports = router;
