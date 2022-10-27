const jwt = require("jsonwebtoken");

const JSONWEBTOKEN_SECRET = "ISuckAtProgramming";

function signToken(payload) {
  return jwt.sign({ payload, JSONWEBTOKEN_SECRET }, JSONWEBTOKEN_SECRET);
}
function verifyToken(token) {
  return jwt.verify(token, JSONWEBTOKEN_SECRET);
}

module.exports = { signToken, verifyToken };
