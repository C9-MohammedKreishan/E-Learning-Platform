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
      .get(`http://localhost:5000/courses`)
      .then((res) => {
        setCourses(res.data.courses);
        console.log(res.data.courses);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <div>
      <h1>All Courses</h1>

      {Courses.map((courses, indx) => {
        
        return (
          <div>
            <h1 style={{ textAlign: "left" }}>{courses.courseTitle}</h1>
            <p style={{ textAlign: "left", fontSize: "20px" }}>
              {courses.courseDiscription}
            </p>

            <p style={{ textAlign: "left", fontSize: "20px" }}>{courses._id}</p>

            <button
              onClick={()=>
                {
                  console.log(test)
                  axios
                .post(
                  `http://localhost:5000/courses/enrollCourse/${courses._id}`,{},
                  {
                    headers: {
                      Authorization: `Bearer ${test}`
                    }
                  }
                )
                .then((res) => {
                  console.log('res', res)
                })
                .catch((err) => {
                  console.log(err);
                })}}
            >
              Enroll Course
            </button>
          </div>
        );
      })}
    </div>
  );
}
