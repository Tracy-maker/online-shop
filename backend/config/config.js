module.exports = {
  secret: process.env.JWT_SECRET || "secret_ecom",
  jwtExpire: "24h",
};
