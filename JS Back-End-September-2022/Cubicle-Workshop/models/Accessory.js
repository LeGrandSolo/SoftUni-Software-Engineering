const { Schema, model } = require("mongoose");

const accessorySchema = new Schema({
  name: { type: String, required: true },
  imageUrl: {
    type: String /* 
    validate: {
      validator: (v) => {
        const regex = new RegExp("/^https?://");
        return regex(v);
      },
    }, */,
  },
  description: { type: String },
  cubes: { type: String, required: true },
});
const Accessory = model("Accessory", accessorySchema);

module.exports(Accessory);
