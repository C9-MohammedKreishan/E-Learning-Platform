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
      .get(`http://localhost:5000/courses/enrollCourse`, {
        headers: {
          Authorization: `Bearer ${test}`,
        },
      })
      .then((res) => {
        setCourses(res.data.courses);

        // setcourseId(res.data)
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
            <h1 style={{ textAlign: "left" }}>{courses.courseId.courseTitle}</h1>
            <p style={{ textAlign: "left", fontSize: "20px" }}>
              {courses.courseId.courseDiscription}
            </p>
          </div>
        );
      })}
    </div>
  );
}
