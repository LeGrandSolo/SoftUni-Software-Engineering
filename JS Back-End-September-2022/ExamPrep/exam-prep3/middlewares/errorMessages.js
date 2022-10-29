const { verifyToken } = require("../utils/jwt");

function errorMessages(req, res, next) {
  console.log(req.cookies);
  if (req.cookies.error) {
    res.locals.error = verifyToken(req.cookies.error).payload;
    console.log(res.locals.error);
    res.clearCookie("error");
  }
  next()
}
module.exports = errorMessages;
