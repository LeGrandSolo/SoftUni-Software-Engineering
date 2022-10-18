const { Schema, model, Types } = require("mongoose");
const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  token: { type: String },
});

const User = model("User", userSchema);

module.exports = User;