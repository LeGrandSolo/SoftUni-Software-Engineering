const jwt = require("jsonwebtoken");

const JSONWEBTOKEN_SECRET = "ISuckAtProgramming";

function sign(payload) {
  return jwt.sign({ payload, JSONWEBTOKEN_SECRET },JSONWEBTOKEN_SECRET);
}
function verify(token) {
  return jwt.verify(token, JSONWEBTOKEN_SECRET);
}

module.exports = { sign, verify };
