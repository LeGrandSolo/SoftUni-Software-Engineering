const Blog = require("../models/Blog");
const User = require("../models/User");

async function fetchBlogs(id) {
  if (id) {
    return await Blog.findById(id).lean();
  } else {
    return await Blog.find().lean();
  }
}
async function deleteBlog(blogId, id) {
  const item = await Blog.findById(blogId).populate("owner");
  if (String(id) !== String(item.owner._id)) {
    throw new Error("You are not the owner!");
  }
  await item.delete();
}
async function createBlog(title, imageUrl, content, category, id) {
  const date = new Date()
  const blog = new Blog({
    title,
    imageUrl,
    content,
    category,
    creationDate:date,
    owner: id,
  });
  await blog.save();
}
async function editBlog(blogId, userId, title, imageUrl, content, category) {
  const blog = await Blog.findById(blogId).populate("owner");
  const user = await User.findById(userId);
  if (String(user._id) !== String(blog.owner._id)) {
    throw new Error("You are not the owner!");
  }
  blog.title = title;
  blog.imageUrl = imageUrl;
  blog.content = content;
  blog.category = category;
  await blog.save();
}
module.exports = { fetchBlogs, deleteBlog, createBlog, editBlog };
