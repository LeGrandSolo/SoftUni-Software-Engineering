const User = require("../models/User");
const bcrypt = require("bcrypt");
const { signToken } = require("../utils/jwt");
const newErrorWithFields = require("../utils/newErrorWithField");

async function login(username, password) {
  const user = await User.findOne({ username: username }).populate("bookedHotels");
  if (!user) {
    throw newErrorWithFields(
      "Incorrect username or password!",
      "username",
      "password"
    );
  }
  const isPassCorrect = await bcrypt.compare(password, user.hashedPassword);
  if (!isPassCorrect) {
    throw newErrorWithFields(
      "Incorrect username or password!",
      "username",
      "password"
    );
  }
  const payload = { email: user.email,username: user.username,bookedHotels:user.bookedHotels };
  return signToken(payload);
}

async function register(email, username, password) {
  //TODO validate username and password according to assignment
  const existingEmail = await User.findOne({ email: email })
  if (existingEmail) {
    throw newErrorWithFields("Email is taken!", "email");
  }
  const existingUsername = await User.findOne({ email: email })
  if (existingUsername) {
    throw newErrorWithFields("Username is taken!", "username");
  }
  const user = new User({
    email:email,
    username: username,
    hashedPassword: await bcrypt.hash(password, 10),
  });
  await user.save();
  const payload = { email:email,username: username,bookedHotels:user.bookedHotels};
  return signToken(payload);
}

module.exports = { login, register };
