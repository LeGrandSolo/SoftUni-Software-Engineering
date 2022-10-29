const { Schema, model } = require("mongoose");

const cryptoSchema = new Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  usersBuyed: {
    type: [{ type: Schema.Types.ObjectId, ref: "User" }],
    required: true,
  },
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const Crypto = model("Crypto", cryptoSchema);

module.exports = Crypto;
