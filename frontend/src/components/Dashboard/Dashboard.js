import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { userContext } from "../../App";

export default function () {
  const [Courses, setCourses] = useState([]);
  const [courseId, setcourseId] = useState("");
  // const { setToken } = useContext(userContext);

  const test = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/courses`, {
        headers: {
          Authorization: `Bearer ${test}`,
        },
      })
      .then((res) => {
        setCourses(res.data.courses);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <h1>Dashboard</h1>

      {Courses.map((courses, indx) => {
        return (
          <div>
            <h1 style={{ textAlign: "left" }}>{courses.courseTitle}</h1>
            <p style={{ textAlign: "left", fontSize: "20px" }}>
              {courses.courseDiscription}
            </p>
            <button
              id="enrolled_btn"
              onClick={() => {
                setcourseId(courses._id);
                console.log(courseId);
                console.log(test);

                axios
                  .post(
                    `http://localhost:5000/courses/enrollCourse/${courseId}`,
                    {
                      headers: {
                        Authorization: `Bearer ${test}`,
                      },
                    }
                  )

                  .then((res) => {
                    setToken(res.data.token);
                    localStorage.setItem("token", res.data.token);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Enrool
            </button>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
