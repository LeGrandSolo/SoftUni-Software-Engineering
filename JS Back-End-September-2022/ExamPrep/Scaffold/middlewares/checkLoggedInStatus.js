const { verifyToken } = require("../utils/jwt");

function checkLoggedInStatus(req, res, next) {
  try {
    if (req.cookies.token) {
      verifyToken(req.cookies.token);
      req.isLogged = true;
      res.locals.logged = true;
      console.log("True");
    } else {
      req.isLogged = false;
      console.log("False");
    }
  } catch (error) {
    console.log(error);
    console.log("False");
    res.clearCookie("token");
    req.isLogged = false;
  }
  next();
}
module.exports = checkLoggedInStatus;
