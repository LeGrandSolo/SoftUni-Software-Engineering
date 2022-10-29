const trimFields = require("../utils/trimFields");

function trimBody(req, res, next) {
  if (Object.keys(req.body || {}).length > 0) {
    req.body = trimFields(req.body);
  }
  next();
}
module.exports = trimBody