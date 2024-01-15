import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

import { Container } from "react-bootstrap";
export default function () {
  const [Courses, setCourses] = useState([]);
  const test = localStorage.getItem("token");
  const [SelectCourse, setSelectCourse] = useState("");


  const redirect = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/courses/enrollCourse`, {
        headers: {
          Authorization: `Bearer ${test}`,
        },
      })
      .then((res) => {
        console.log(res.data.courses);
        setCourses(res.data.courses);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <Container style={{ margin: "5px" }} fluid>
        <Row xs={1} md={3} className="g-4">
          {Courses.map((courses, indx) => (
            <Col key={indx}>
              <Card bg="light" className="h-100 d-flex flex-column">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{courses.courseId.courseTitle}</Card.Title>
                  <Card.Text>{courses.courseId.Discription}</Card.Text>
                  <Card.Text style={{ textAlign: "left", fontSize: "20px" }}>
                    {" "}
                    By{"  "}
                    {courses.courseId.courseInstructor.firstName}{" "}
                    {courses.courseId.courseInstructor.lastName}
                  </Card.Text>
                  <div className="mt-auto">
                    <Button
                      style={{ margin: "5px" }}
                      className="mb-2"
                      variant="primary"
                      onClick={() => {
                        axios
                          .get(
                            `http://localhost:5000/courses/search_2/${courses.courseId._id}`,
                            {},
                            {},
                            {
                              headers: {
                                Authorization: `Bearer ${test}`,
                              },
                            }
                          )
                          .then((res) => {
                            console.log(
                              "res",
                              res.data.course
                            );
                            setSelectCourse(res.data.course);
                            redirect(`/users/onecourse/${courses.courseId._id}`);
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                    >
                      Viwe Course
                    </Button>
                    <Button
                      style={{ margin: "5px" }}
                      className="mb-2"
                      variant="primary"
                      onClick={() => {
                        console.log(test);
                        axios
                          .delete(
                            `http://localhost:5000/courses/${courses._id}`,
                            {},
                            {
                              headers: {
                                Authorization: `Bearer ${test}`,
                              },
                            }
                          )
                          .then((res) => {
                            console.log("res", res);
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                    >
                      Delet Course
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
