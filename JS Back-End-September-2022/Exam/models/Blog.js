const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  followList: {
    type: [{ type: Schema.Types.ObjectId, ref: "User" }],
    default: [],
  },
  creationDate: { type: Schema.Types.Date, required: true },
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const Blog = model("Blog", blogSchema);

module.exports = Blog;
