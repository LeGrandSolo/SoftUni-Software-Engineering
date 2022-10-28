const Course = require("../models/Course");
async function fetchCourses(id) {
  if (id) {
    return await Course.findById(id);
  } else {
    return await Course.find().sort({ createdAt: -1 }).lean();
  }
}
async function deleteCourse(id,username) {
  const course = await Course.findById(id);
  if (username !== course.owner) {
    throw new Error("You are not the owner!");
  }
  await course.delete();
}
async function createCourse(title, description, imageUrl, duration, owner) {
  const creationDate = new Date();
  const course = new Course({
    title,
    description,
    imageUrl,
    duration,
    owner,
    createdAt: creationDate,
  });
  await course.save();
}
module.exports = { fetchCourses, deleteCourse, createCourse };
