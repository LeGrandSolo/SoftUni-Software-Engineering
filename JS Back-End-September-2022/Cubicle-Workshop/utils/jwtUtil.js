const jwt = require("jsonwebtoken");
const secret = "ISuckAtProgramming";

function jwtSign(payload) {
  return jwt.sign(payload, secret, { expiresIn: "1d" });
}

function jwtVerify(token = "") {
  if (!token) {
    return false;
  }
  return jwt.verify(token, secret);
}
function jwtDecode(token) {
  return jwt.decode(token)
}
module.exports = { jwtSign, jwtVerify,jwtDecode };
