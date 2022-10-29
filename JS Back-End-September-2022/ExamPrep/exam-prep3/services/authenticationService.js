const User = require("../models/User");
const bcrypt = require("bcrypt");
const { signToken } = require("../utils/jwt");
const newErrorWithFields = require("../utils/newErrorWithField");

async function login(email, password) {
  const user = await User.findOne({ email: email });
  if (!user) {
    throw newErrorWithFields(
      "Incorrect email or password!",
      "email",
      "password"
    );
  }
  const isPassCorrect = await bcrypt.compare(password, user.hashedPassword);
  if (!isPassCorrect) {
    throw newErrorWithFields(
      "Incorrect email or password!",
      "email",
      "password"
    );
  }
  const payload = { email: email, username: user.username };
  return signToken(payload);
}

async function register(email, username, password) {
  const user = new User({
    email: email,
    username: username,
    hashedPassword: await bcrypt.hash(password, 10),
  });
  await user.save();
  const payload = { email: email, username: username };
  return signToken(payload);
}

module.exports = { login, register };
