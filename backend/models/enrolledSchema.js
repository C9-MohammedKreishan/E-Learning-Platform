const mongoose = require("mongoose");

const enrollCourse = new mongoose.Schema({
  courseId: { type: String, required: true },
  userId: { type: String, required: true },
  enrolledDate: { type: String}
});

const model = mongoose.model(`enrolled`, enrollCourse);
module.exports = model;
