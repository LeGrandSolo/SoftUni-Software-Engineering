const { Schema, model } = require("mongoose");

const cubeSchema = new Schema({
  name: { type: String, requred: true },
  description: String,
  imageUrl: String,
  difficultyLevel: { type: Number, requred: true },
});

const Cube = model("Cube", cubeSchema);

module.exports = Cube;
