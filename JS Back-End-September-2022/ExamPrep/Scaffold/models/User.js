const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true, unique: true, minlength:[3, "Minimum length for username is 3"] },
  hashedPassword: { type: String, required: true },
});

userSchema.index(
  { username: 1 },
  {
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const User = model("User", userSchema);

module.exports = User;
