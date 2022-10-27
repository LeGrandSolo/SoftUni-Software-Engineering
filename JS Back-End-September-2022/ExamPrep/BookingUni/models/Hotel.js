const { Schema, model, Types } = require("mongoose");

const hotelSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: 4,
  },
  city: { type: String, required: true, minLength: 3 },
  freeRooms: { type: Number, min: 1, max: 100 },
  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: (v) => {
        console.log(v);
        const regex = /^https?/i;
        return regex.test(v);
      },
      message: "Not a valid url!",
    },
  },
  usersBooked: { type: [{ type: Types.ObjectId, ref: "User" }] },
  owner: { type: String, required: true },
});

hotelSchema.index(
  { name: 1, email: 1 },
  {
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const Hotel = model("Hotel", hotelSchema);

module.exports = Hotel;
