const bcrypt = require("bcrypt");
const expressSession = require("express-session");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const secret = "ISuckAtProgramming";

async function login(formData) {
  if (!formData.username || !formData.password) {
    // display err
    throw new Error("All fields are required.");
  }
  const user = User.find((u) => u.name === formData.username);
  if (bcrypt.compare(formData.password, user.password)) {
  }
}

async function register(formData) {
  console.log(formData);
  if (!formData.username || !formData.password || !formData.repeatPassword) {
    // display err
    throw new Error("All fields are required.");
  }
  if (formData.password !== formData.repeatPassword) {
    // display err
    throw new Error("Passwords don't match.");
  }
  const user = new User({
    username: formData.username,
    password: await bcrypt.hash(formData.password, 10),
  });
  user.save();
  expressSession.Session()
}
module.exports = { login, register };
