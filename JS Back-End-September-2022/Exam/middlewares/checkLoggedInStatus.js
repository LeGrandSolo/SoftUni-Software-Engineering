const { verifyToken } = require("../utils/jwt");

function checkLoggedInStatus(req, res, next) {
  try {
    req.locals = {}
    if (req.cookies.token) {
      const data = verifyToken(req.cookies.token);
      req.locals.isLogged = true;
      req.locals.username = data.payload.username
      req.locals.id = data.payload.id
      res.locals.logged = true;
    } else {
      req.locals.isLogged = false;
    }
  } catch (error) {
    console.log(error);
    res.clearCookie("token");
    req.locals.isLogged = false;
  }
  next();
}
module.exports = checkLoggedInStatus;
