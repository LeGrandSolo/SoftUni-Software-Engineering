const User = require("../models/User");

async function retrieveUserByName(name) {
  name = name.trim();
  return await User.findOne().where("user").equals(name);
}
module.exports = retrieveUserByName;
