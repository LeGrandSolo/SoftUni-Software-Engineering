const { body, validationResult } = require("express-validator");
const Course = require("../models/Course");
const User = require("../models/User");
const {
  deleteCourse,
  fetchCourses,
  createCourse,
} = require("../services/courseServices");
const errorCookie = require("../utils/errorCookie");
const parseError = require("../utils/errorParser");

const courseController = require("express").Router();

courseController.get("/create", (req, res) => {
  if (!req.locals.isLogged) {
    res.redirect("/");
  } else {
    res.render("create");
  }
});
courseController.post(
  "/create",
  body("title")
    .isLength({ min: 4 })
    .withMessage("Title must be at least 4 characters long!"),
  body("description")
    .isLength({ min: 20 })
    .withMessage("Description must be at least 20 characters long!"),
  body("imageUrl")
    .matches(/^https?/)
    .withMessage("ImageUrl must start with http(s)!"),
  async (req, res) => {
    try {
      if (!req.locals.isLogged) {
        throw new Error("You are not logged in!");
      }
      const error = validationResult(req).errors;
      if (error.length > 0) {
        throw error;
      }
      await createCourse(
        req.body.title,
        req.body.description,
        req.body.imageUrl,
        req.body.duration,
        req.locals.username
      );
      res.redirect("/");
    } catch (error) {
      error = parseError(error);
      console.log(error);
      res.render("create", { error });
    }
  }
);

courseController.get("/:id/details", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate("users")
      .lean();
    course.isOwner = false;
    course.hasEnrolled = false;
    if (course.owner == req.locals.username) {
      course.isOwner = true;
    }
    for (const user of course.users) {
      if (user.username == req.locals.username) {
        course.hasEnrolled = true;
      }
    }
    res.render("details", { course });
  } catch (error) {
    error = parseError(error);
    console.log(error);
    res.redirect("/");
  }
});

courseController.get("/:id/edit", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).lean();
    if (req.locals.username !== course.owner) {
      throw new Error("You are not the owner!");
    }
    res.render("edit", { course });
  } catch (error) {
    error = parseError(error);
    console.log(error);
    res.redirect("/");
  }
});
courseController.post("/:id/edit", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (req.locals.username !== course.owner) {
      throw new Error("You are not the owner!");
    }

    await course.update({
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      duration: req.body.duration,
    });
    res.redirect("/");
  } catch (error) {
    error = parseError(error);
    console.log(error);
    res.redirect("/");
  }
});
courseController.get("/:id/delete", async (req, res) => {
  try {
    await deleteCourse(req.params.id,req.locals.username);
    res.redirect("/");
  } catch (error) {
    error = parseError(error);
    console.log(error);
    res.redirect("/");
  }
});
courseController.get("/:id/enroll", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!req.locals.isLogged) {
      throw new Error("You are not logged!");
    }
    const user = await User.findOne({ username: req.locals.username });
    user.courses.push(course._id);
    course.users.push(user._id);
    user.save();
    course.save();
    res.redirect("/");
  } catch (error) {
    error = parseError(error);
    console.log(error);
    res.redirect("/");
  }
});

module.exports = courseController;
