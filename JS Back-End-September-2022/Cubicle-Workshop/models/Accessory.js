const { Schema, model } = require("mongoose");

const accessorySchema = new Schema({
  name: { type: String, required: true },
  imageUrl: {
    type: String,
    validate: {
      validator: (value) => {
        const regex = new RegExp("^https?://");
        return regex.test(value);
      },
    },
  },
  description: { type: String },
  cubes: [{ type: Schema.Types.ObjectId, ref: "Cube" }],
});
const Accessory = model("Accessory", accessorySchema);

module.exports = Accessory;
