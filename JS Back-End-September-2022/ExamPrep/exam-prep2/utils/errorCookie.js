const { signToken } = require("./jwt");

async function errorCookie(error, res) {
  const errCookie = signToken(error);
  res.cookie("error", errorCookie);
}

module.exports = errorCookie;
