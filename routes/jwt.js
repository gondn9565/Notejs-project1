const jwt = require("jsonwebtoken");
const jwtAuthMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    console.log(err);
    res.send(401).json({ error: "Invalid token" });
  }
};
const generateToken = (username) => {
  return jwt.sign(username, process.env.JWT_SECRET);
};
module.exports = { jwtAuthMiddleware, generateToken };
