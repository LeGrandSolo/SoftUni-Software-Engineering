const { signToken } = require("./jwt");

async function errorCookie(error, res) {
  const cookie = signToken(error);
  res.cookie("error", cookie);
}

module.exports = errorCookie;
