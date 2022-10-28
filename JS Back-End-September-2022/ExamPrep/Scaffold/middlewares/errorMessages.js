const { verifyToken } = require("../utils/jwt");

function errorMessages(req, res, next) {
  if (req.error) {
    res.locals.error = verifyToken(req.error);
    res.clearCookie("error");
  }
  next()
}
module.exports = errorMessages;
