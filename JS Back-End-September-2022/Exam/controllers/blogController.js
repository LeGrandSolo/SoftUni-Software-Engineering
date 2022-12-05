const { body, validationResult } = require("express-validator");
const Blog = require("../models/Blog");
const User = require("../models/User");
const {
  deleteBlog,
  fetchBlogs,
  createBlog,
  editBlog,
} = require("../services/itemServices");
const errorCookie = require("../utils/errorCookie");
const parseError = require("../utils/errorParser");

const blogController = require("express").Router();

blogController.get("/create", (req, res) => {
  if (!req.locals.isLogged) {
    res.redirect("/");
  } else {
    res.render("create", { title: "Create Page" });
  }
});
const regex = new RegExp("^https?://");
blogController.post(
  "/create",
  body("title")
    .isLength({ min: 5, max: 50 })
    .withMessage("Title must be between 5 and 50 characters long!"),
  body("imageUrl")
    .matches(regex)
    .withMessage("ImageUrl must start with http(s)://"),
  body("content")
    .isLength({ min: 10 })
    .withMessage("Content must be between at least 10 characters!"),
  body("category")
    .isLength({ min: 3 })
    .withMessage("Category must be between at least 3 characters!"),
  async (req, res) => {
    try {
      if (!req.locals.username) {
        throw new Error("You are not logged in!");
      }
      const error = validationResult(req).errors;
      if (error.length > 0) {
        throw error;
      }
      await createBlog(
        req.body.title,
        req.body.imageUrl,
        req.body.content,
        req.body.category,
        req.locals.id
      );
      res.redirect("/catalog");
    } catch (error) {
      error = parseError(error);
      console.log(error);
      res.render("create", { error });
    }
  }
);

blogController.get("/:id/details", async (req, res) => {
  try {
    let user;
    try {
      user = await User.findById(req.locals.id);
    } catch (error) {
      console.log(error);
    }
    const blog = await Blog.findById(req.params.id)
      .populate("owner")
      .populate("followList")
      .lean();
    const followerNames = [];
    blog.followers = blog.followList.join(", ");
    if (user) {
      blog.isLogged = true;
      if (String(user._id) == String(blog.owner._id)) {
        blog.isOwner = true;
      }
      for (const follower of blog.followList) {
        followerNames.push(follower.username);
        if (String(user._id) == String(follower._id)) {
          blog.hasFollowed = true;
        }
      }

      blog.followers = followerNames.join(", ");
    }
    res.render("details", { blog });
  } catch (error) {
    error = parseError(error);
    console.log(error);
    res.redirect("/");
  }
});

blogController.get("/:id/edit", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("owner").lean();
    const user = await User.findById(req.locals.id);
    if (String(user._id) !== String(blog.owner._id)) {
      throw new Error("You are not the owner!");
    }
    res.render("edit", { blog, title: "Edit Page" });
  } catch (error) {
    error = parseError(error);
    console.log(error);
    res.redirect("/");
  }
});
blogController.post(
  "/:id/edit",
  body("title")
    .isLength({ min: 5, max: 50 })
    .withMessage("Title must be between 5 and 50 characters long!"),
  body("imageUrl")
    .matches(regex)
    .withMessage("ImageUrl must start with http(s)://"),
  body("content")
    .isLength({ min: 10 })
    .withMessage("Content must be between at least 10 characters!"),
  body("category")
    .isLength({ min: 3 })
    .withMessage("Category must be between at least 3 characters!"),
  async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id).lean();
      try {
        const error = validationResult(req).errors;
        if (error.length > 0) {
          throw error;
        }
        await editBlog(
          req.params.id,
          req.locals.id,
          req.body.title,
          req.body.imageUrl,
          req.body.content,
          req.body.category
        );
        res.redirect(`/blog/${req.params.id}/details`);
      } catch (error) {
        error = parseError(error);
        console.log(error);
        res.render("edit", { error, blog, title: "Edit Page" });
      }
    } catch (error) {}
  }
);
blogController.get("/:id/delete", async (req, res) => {
  try {
    await deleteBlog(req.params.id, req.locals.id);
    res.redirect("/catalog");
  } catch (error) {
    error = parseError(error);
    console.log(error);
    res.redirect("/catalog");
  }
});
blogController.get("/:id/follow", async (req, res) => {
  try {
    let user;
    try {
      user = await User.findById(req.locals.id);
    } catch (error) {
      throw new Error("Not logged in!");
    }
    const blog = await Blog.findById(req.params.id)
      .populate("owner")
      .populate("followList");
    if (user) {
      if (String(user._id) == String(blog.owner._id)) {
        throw new Error("You are the owner!");
      }
      for (const follower of blog.followList) {
        if (String(user._id) == String(follower._id)) {
          throw new Error("Already followed!");
        }
      }
      blog.followList.push(user._id);
      blog.save();
    }
    res.redirect(`/blog/${req.params.id}/details`);
  } catch (error) {
    error = parseError(error);
    console.log(error);
    res.redirect(`/blog/${req.params.id}/details`);
  }
});
module.exports = blogController;
