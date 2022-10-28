const { Schema, model, Types } = require("mongoose");

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: [50, "Maximum length for description is 50"],
  },
  imageUrl: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Schema.Types.Date,
    required: true,
  },
  owner: { type: String,},
  users: { type: [{ type: Schema.Types.ObjectId, ref: "User" }] },
});

courseSchema.index(
  { title: 1 },
  {
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const Course = model("Course", courseSchema);

module.exports = Course;
