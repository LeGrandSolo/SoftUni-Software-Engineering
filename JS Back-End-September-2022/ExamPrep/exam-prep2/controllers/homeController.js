const Course = require("../models/Course");
const { fetchCourses } = require("../services/courseServices");

const homeController = require("express").Router();

homeController.get("/", async (req, res) => {
  const courses = await fetchCourses();
  console.log(courses);
  if (req.locals.isLogged) {
    res.render("userHome", { courses });
  } else {
    res.render("guestHome", { courses });
  }
});
homeController.get("/search", async (req, res) => {
  const regex = new RegExp(req.query.title, "i");
  try {
    const courses = await Course.find({}).where("title").regex(regex).lean();
    res.render("userHome", {courses});
  } catch (error) {
    res.redirect("/");
  }
});

module.exports = homeController;
