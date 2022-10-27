const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  hashedPassword: { type: String },
  bookedHotels: { type: [{ type: Types.ObjectId, ref: "Hotel" }], default: [] },
  offeredHotels: {
    type: [{ type: Types.ObjectId, ref: "Hotel" }],
    default: [],
  },
});

userSchema.index(
  { username: 1, email: 1 },
  {
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const User = model("User", userSchema);

module.exports = User;
