const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  hashedPassword: { type: String, required: true },
});

const User = model("User", userSchema);

module.exports = User;
