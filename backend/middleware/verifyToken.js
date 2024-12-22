const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res
      .status(401)
      .json({ message: "Token not provided, access denied" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    console.log(decoded);
    req.user = decoded.userId;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};

module.exports = verifyToken;
