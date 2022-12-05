const Blog = require("../models/Blog");
const User = require("../models/User");

const profileController = require("express").Router();

profileController.get("/", async (req, res) => {
  try {
    const user = await User.findById(req.locals.id).lean();
    const blogsCreated = await Blog.find().where("owner").equals(req.locals.id).lean();
    user.blogsCreated = blogsCreated;
    const blogs = await Blog.find().populate("followList").lean();
    user.blogsFollowed = [];
    for (let blog of blogs) {
      for (let follower of blog.followList) {
        if (String(follower._id) == String(req.locals.id)) {
          user.blogsFollowed.push(blog);
        }
      }
    }
    res.render("profile", {user, title:"Profile Page"});
  } catch (error) {
    res.redirect("/");
  }
});
module.exports = profileController;
