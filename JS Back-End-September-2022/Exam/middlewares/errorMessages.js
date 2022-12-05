const { verifyToken } = require("../utils/jwt");

function errorMessages(req, res, next) {
  if (req.cookies.error) {
    res.locals.error = verifyToken(req.cookies.error).payload;
    res.clearCookie("error");
  }
  next()
}
module.exports = errorMessages;
