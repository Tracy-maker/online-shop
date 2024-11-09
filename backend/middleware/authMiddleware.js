const jwt = require("jsonwebtoken");
const config = require("../config/config");

exports.authenticateUser = (req, res, next) => {
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


exports.verifyAdmin = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ error: "Admin access required" });
  }
  next();
};

exports.verifyToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ error: "Access Denied" });

  try {
    const data = jwt.verify(token, config.secret);
    req.user = data;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};