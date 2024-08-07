import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function () {
  const [CoursesbyCategory, setCoursesbyCategory] = useState([]);
  const test = localStorage.getItem("token");
  const redirect = useNavigate();
  const [SelectCourse, setSelectCourse] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://e-learning-platform-kmqb.onrender.com/courses/search_category/6599b39454d0b4e356435c9a/test`
      )
      .then((res) => {
        setCoursesbyCategory(res.data.courses);
        console.log(res.data.courses);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
            <div>
      <Container fluid>
        <Row>
          <Col xs={12} md={4}>
            <img
              src="https://res.cloudinary.com/dalwd5c23/image/upload/v1705603589/pexels-energepiccom-159888_y50nx7.jpg"  
              alt="Category Image"
              style={{ width: '100%', height: 'auto' }}
            />
          </Col>
          <Col xs={12} md={8}>
            <div>
              <h1
                style={{
                  textAlign: 'left',
                  fontSize: '2.5rem',
                  marginTop: '20px',
                  marginBottom: '20px',
                  
                }}
              >
                Markiting and Business
              </h1>
              <hr style={{ margin: '10px 0' }} />
              <p style={{fontFamily:"initial",fontSize:"20px", textAlign:"left"}}>Embark on a transformative journey in Marketing and Business with our dynamic courses designed to elevate your skills and strategic thinking. From mastering the latest digital marketing trends to honing essential business acumen, our curriculum covers the spectrum of contemporary marketing strategies and effective business practices. Dive into real-world case studies, learn from industry experts, and gain practical insights that will empower you to thrive in today's competitive landscape. Whether you're looking to enhance your marketing prowess or sharpen your business acumen, our courses provide a pathway to success. Join us and unlock the keys to strategic marketing and business excellence, propelling your career to new heights. </p>
              
              <Container style={{ margin: '5px' }} fluid>
                <Row xs={1} md={3} className="g-4">
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        Courses
      </h1>
      <hr style={{ margin: "10px 0" }} />
      <Container style={{ margin: "5px" }} fluid>
        <Row xs={1} md={3} className="g-4">
          {CoursesbyCategory.map((courses, indx) => (
            <Col key={indx}>
              <Card bg="light" className="h-100 d-flex flex-column">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{courses.courseTitle}</Card.Title>
                  <div style={{ flex: 1, marginLeft: "20px" }}>
                    <Card.Img
                      variant="top"
                      src={courses.coursePicture}
                      style={{ width: "90%", height: "400px" }}
                    />
                  </div>
                  <Card.Text style={{ textAlign: "left", fontSize: "20px" }}>
                    {" "}
                    By{"  "}
                    {courses.courseInstructor.firstName}{" "}
                    {courses.courseInstructor.lastName}
                  </Card.Text>
                  <div className="mt-auto">
                    <Button
                      style={{ margin: "5px" }}
                      className="mb-2"
                      variant="primary"
                      onClick={() => {
                        console.log(test);
                        axios
                          .post(
                            `https://e-learning-platform-kmqb.onrender.com/courses/enrollCourse/${courses._id}`,
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
                      Enroll Course
                    </Button>
                    <Button
                      style={{ margin: "5px" }}
                      className="mb-2"
                      variant="primary"
                      onClick={() => {
                        axios
                          .get(
                            `https://e-learning-platform-kmqb.onrender.com/courses/search_2/${courses._id}`
                          )
                          .then((res) => {
                            console.log("res", res.data.course);
                            setSelectCourse(res.data.course);
                            redirect(
                              `/users/onecourse/${courses._id}`
                            );
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                    >
                      View Course
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
