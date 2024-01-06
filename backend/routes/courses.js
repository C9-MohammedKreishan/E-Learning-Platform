const express = require("express");

// Import articles controllers
const {
  getAllCourses,
  getCoursesbyInstructor,
  getCoursebyId,
  createNewCourse,
  updateCourseById,
  deleteCourseById,
  deleteCourseByInstructor,
  getCoursesbyCategory
} = require("../controllers/courses");



// Middleware
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

// Create course and category routers
const coursesRouter = express.Router();


coursesRouter.get("/", authentication, getAllCourses);
coursesRouter.get("/search_category/:categoryId/test", getCoursesbyCategory);
coursesRouter.get("/search_1/:Instructor", getCoursesbyInstructor);


coursesRouter.get("/search_2/:id", getCoursebyId);
coursesRouter.post("/",authentication,authorization("CREATE_COURSES"),createNewCourse);
coursesRouter.put("/:id", updateCourseById);
coursesRouter.delete("/:id", deleteCourseById);
coursesRouter.delete("/:id/author", deleteCourseByInstructor);

coursesRouter.post(
  "/:id/comments",
  authentication,
  authorization("CREATE_COURSES")
);

module.exports = coursesRouter;
