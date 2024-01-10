const coursesModel = require("../models/courseSchema");
const categoryModel = require("../models/categorySchema");
const enrolledCourseModel = require("../models/enrolledSchema");

// This function returns the courses
const getAllCourses = (req, res) => {
  const userId = req.token.userId;
  coursesModel
    .find()
    .populate("courseInstructor", "firstName lastName")
    .exec()
    .then((courses) => {
      if (courses.length) {
        res.status(200).json({
          success: true,
          message: `All the courses`,
          userId: userId,
          courses: courses,
        });
      } else {
        res.status(200).json({
          success: false,
          message: `No Courses Yet`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

//This function returns courses by Instructor
const getCoursesbyInstructor = (req, res) => {
  let InstructorId = req.params.Instructor;

  coursesModel
    .find({}, "courseTitle courseInstructor courseCategory")
    .populate("courseInstructor", "firstName lastName")

    .then((courses) => {
      console.log(courses);
      if (!courses.length) {
        return res.status(404).json({
          success: false,
          message: `The Instructor: ${InstructorId} has no courses`,
        });
      }
      res.status(200).json({
        success: true,
        message: `All the courses for the Instructor: ${InstructorId}`,
        courses: courses,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

//This function returns courses by Instructor
const getCoursesbyUser = (req, res) => {
  console.log(req.token);
  const UserId = req.params.UserId;
  console.log(UserId);

  enrolledCourseModel
    .find({userId:UserId})
    // .populate("courseInstructor", "firstName lastName")
    

    .then((courses) => {
      console.log(courses);
      if (!courses.length) {
        return res.status(404).json({
          success: false,
          message: `The User: ${UserId} has no courses`,
        });
      }
      res.status(200).json({
        success: true,
        message: `All the courses for the User: ${UserId}`,
        courses: courses,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

//This function returns courses by Instructor
const getCoursesbyCategory = (req, res) => {
  console.log(req.params);
  const categoryId = req.params.categoryId 

  coursesModel
    .find({courseCategory: categoryId})
    .populate("courseInstructor", "firstName lastName")

    .then((courses) => {
      console.log(courses);
      if (!courses.length) {
        return res.status(404).json({
          success: false,
          message: `The category: ${categoryId} has no courses`,
        });
      }
      res.status(200).json({
        success: true,
        message: `All the courses for the category: ${categoryId}`,
        courses: courses,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

// This function returns courses by its id
const getCoursebyId = (req, res) => {
  let id = req.params.id;
  coursesModel
    .findById(id)
    .populate("courseInstructor", "firstName -_id")
    .exec()
    .then((course) => {
      if (!course) {
        return res.status(404).json({
          success: false,
          message: `The course with id => ${id} not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `The course ${id} `,
        course: course,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

// Enrool Courses
const enrolledCourse = (req,res)=>{
    const userId = req.token.userId;
    const  enrolledDate = new Date();
    const {courseId} = req.params
    console.log(req.params);
    const newCourse = new enrolledCourseModel({
        courseId,
        userId,
        enrolledDate
      });

      newCourse
      .save()
      .then((course) => {
        res.status(201).json({
          success: true,
          message: `Course enrooled`,
          course: course,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: `Server Error`,
          err: err.message,
        });
      });
}
// This function creates new course
const createNewCourse = (req, res) => {
  const { courseName, courseTitle, courseDiscription, courseCategory } =
    req.body;
  const courseInstructor = req.token.userId;
  const newCourse = new coursesModel({
    courseName,
    courseTitle,
    courseDiscription,
    courseInstructor,
    courseCategory,
  });

  newCourse
    .save()
    .then((course) => {
      res.status(201).json({
        success: true,
        message: `Course created`,
        course: course,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

const createNewCategory = (req, res) => {
  const { categoryName } = req.body;
  console.log(categoryName);

  const newCategory = new categoryModel({
    categoryName,
  });

  console.log(categoryName);

  newCategory
    .save()
    .then((category) => {
      res.status(201).json({
        success: true,
        message: `Category created`,
        category: category,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

// This function updates course by its id
const updateCourseById = (req, res) => {
  const id = req.params.id;
  const filter = req.body;
  Object.keys(filter).forEach((key) => {
    filter[key].toString().replaceAll(" ", "") == "" && delete filter[key];
  });
  coursesModel
    .findByIdAndUpdate({ _id: id }, req.body, { new: true })
    .then((newCourse) => {
      if (!newCourse) {
        return res.status(404).json({
          success: false,
          message: `The course with id => ${id} not found`,
        });
      }
      res.status(202).json({
        success: true,
        message: `Course updated`,
        course: newCourse,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

// This function deletes a specific course by its id
const deleteCourseById = (req, res) => {
  const id = req.params.id;
  coursesModel
    .findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The course with id => ${id} not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Course deleted`,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

// This function deletes all the courses for a specific Instructor
const deleteCourseByInstructor = (req, res) => {
  const author = req.params.id;
  coursesModel
    .deleteMany({ courseInstructor })
    .then((result) => {
      if (!result.deletedCount) {
        return res.status(404).json({
          success: false,
          message: `The Instructor not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Deleted course for the Instructor: ${courseInstructor}`,
        result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

module.exports = {
  getAllCourses,
  getCoursesbyInstructor,
  getCoursebyId,
  createNewCourse,
  updateCourseById,
  deleteCourseById,
  deleteCourseByInstructor,
  createNewCategory,
  getCoursesbyCategory,
  enrolledCourse,
  getCoursesbyUser
};
