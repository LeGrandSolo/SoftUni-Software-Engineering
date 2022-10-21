const { jwtVerify } = require("../utils/jwtUtil");

function isLogged(req, res, next) {
  if (jwtVerify(req.cookies.jwt)) {
    res.isLogged = true;
    res.locals.isLogged = true;
  } else {
    res.isLogged = false;
    res.locals.isLogged = false;
  }
  next();
}
module.exports = isLogged;
