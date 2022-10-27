const User = require("../models/User");
const bcrypt = require("bcrypt");
const { sign } = require("../utils/jwt");

async function login(username, password) {
  const user = await User.findOne({ username: username });
  if (!user) {
    throw new Error("Incorrect username or password!");
  }
  const isPassCorrect = await bcrypt.compare(password, user.password);
  if (!isPassCorrect) {
    throw new Error("Incorrect username or password!");
  }
  const payload = { username: user.username };
  return sign(payload);
}

async function register(username, password) {
  //TODO validate username and password according to assignment
  const existing = await User.findOne({ username: username });
  if (existing) {
    throw new Error("User with this name already exists!");
  }
  const user = new User({
    username: username,
    hashedPassword: await bcrypt.hash(password, 10),
  });
  await user.save();
  const payload = { username: user.username };
  return sign(payload);
}

module.exports = { login, register };
