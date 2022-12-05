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
      "Incorrect username or password!",
      "email",
      "password"
    );
  }
  const payload = { username: user.username,email:email,id :user._id };
  return signToken(payload);
}

async function register(username, email, password) {
  //TODO validate username and password according to assignment
  const existing = await User.findOne({ email: email });
  if (existing) {
    throw newErrorWithFields("Email already exists!", "email");
  }
  const user = new User({
    email: email,
    username: username,
    hashedPassword: await bcrypt.hash(password, 10),
  });
  await user.save();;
  return login(email, password);
}

module.exports = { login, register };
