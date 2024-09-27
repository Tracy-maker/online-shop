const jwt = require("jsonwebtoken");
const config = require("../config/config");

exports.fetchUser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).json({ error: "Access Denied" });
  }

  try {
    const data = jwt.verify(token, config.secret);
    req.user = data;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};
