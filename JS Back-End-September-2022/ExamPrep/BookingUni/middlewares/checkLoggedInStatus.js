const { verifyToken } = require("../utils/jwt");

function checkLoggedInStatus(req, res, next) {
  try {
    if (req.cookies.token) {
      const data = verifyToken(req.cookies.token);
      req.isLogged = true;
      req.username = data.payload.username
      req.bookedHotels = data.payload.bookedHotels
      console.log(data.payload);
      res.locals.logged = true;
      res.locals.username = data.payload.username 
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
