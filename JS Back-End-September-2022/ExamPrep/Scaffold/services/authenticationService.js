const User = require("../models/User");
const bcrypt = require("bcrypt");
const { signToken } = require("../utils/jwt");
const newErrorWithFields = require("../utils/newErrorWithField");

async function login(username, password) {
  const user = await User.findOne({ username: username });
  if (!user) {
    throw newErrorWithFields("Incorrect username or password!", "username", "password")
  }
  const isPassCorrect = await bcrypt.compare(password, user.hashedPassword);
  if (!isPassCorrect) {
    throw newErrorWithFields("Incorrect username or password!", "username", "password")
  }
  const payload = { username: user.username };
  return signToken(payload);
}

async function register(username, password) {
  //TODO validate username and password according to assignment
  const existing = await User.findOne({ username: username });
  if (existing) {
    throw newErrorWithFields("Username already exists!", "username");
  }
  const user = new User({
    username: username,
    hashedPassword: await bcrypt.hash(password, 10),
  });
  await user.save();
  const payload = { username: user.username };
  return signToken(payload);
}

module.exports = { login, register };
