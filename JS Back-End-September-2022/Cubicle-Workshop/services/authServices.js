const bcrypt = require("bcrypt");

const User = require("../models/User");
const retrieveUserByName = require("../utils/userUtil");

async function login(formData) {
  if (!formData.username.trim() || !formData.password.trim()) {
    // display err
    throw new Error("All fields are required.");
  }
  const user = await retrieveUserByName(formData.username);
  if (!user) {
    throw new Error("Incorrect username or password!");
  }
  const isPassCorrect = await bcrypt.compare(
    formData.password.trim(),
    user.password
  );
  if (!isPassCorrect) {
    throw new Error("Incorrect username or password!");
  }
  const tokenData = { username: user.username };
  return tokenData;
}

async function register(formData) {
  if (
    !formData.username.trim() ||
    !formData.password.trim() ||
    !formData.repeatPassword.trim()
  ) {
    // display err
    throw new Error("All fields are required.");
  }
  if (formData.password.trim() !== formData.repeatPassword.trim()) {
    // display err
    throw new Error("Passwords don't match.");
  }
  const hasExistingUserWithSameName = await retrieveUserByName(
    formData.username
  );
  if (hasExistingUserWithSameName) {
    throw new Error("Username already exists!");
  }
  const user = new User({
    username: formData.username,
    password: await bcrypt.hash(formData.password, 10),
  });
  user.save();
  const tokenData = { username: user.username };
  return tokenData;
}
module.exports = { login, register };
