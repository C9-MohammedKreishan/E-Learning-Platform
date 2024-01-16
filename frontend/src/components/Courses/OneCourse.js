import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";

export default function () {
  const { courseId } = useParams();
  const [category, setCategory] = useState([]);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/courses/search_2/${courseId}`)
      .then((res) => {
        setCourse(res.data.course);
        return axios.get(
          `http://localhost:5000/courses/search_category/${res.data.course.courseCategory}/test`
        );
      })
      .then((res) => {
        setCategory(res.data.courses);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Container style={{ margin: "0px" }} fluid>
        <Card style={{ margin: "50px" }} className="mb-4">
          <Card.Header>
            <h2 style={{ margin: 0, fontSize: "24px" }}>
              {course.courseTitle}
            </h2>
          </Card.Header>
          <Card.Body className="d-flex">
            <div style={{ flex: 1 }}>
              <Card.Text
                style={{
                  fontSize: "24px",
                  textAlign: "left",
                  justifyContent: "left",
                  padding: "20px",
                  textJustify: "left",
                }}
              >
                {course.courseDiscription}
              </Card.Text>
              <p
                style={{
                  fontSize: "20px",
                  marginTop: "10px",
                  textAlign: "left",
                }}
              >
                <strong>Instructor:</strong>{" "}
                {`${course.courseInstructor.firstName} ${course.courseInstructor.lastName}`}
              </p>
            </div>
            <div style={{ flex: 1, marginLeft: "20px" }}>
              <Card.Img
                variant="top"
                src={course.coursePicture}
                style={{ width: "90%", height: "400px" }}
              />
            </div>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between align-items-center">
            <div>
              <strong>Instructor:</strong>{" "}
              {`${course.courseInstructor.firstName} ${course.courseInstructor.lastName}`}
              <p>Rating: {course.courseRate}</p>
            </div>
            <Button
              style={{ marginTop: "10px" }}
              variant="primary"
              onClick={() => {
                console.log("Enroll button clicked");
              }}
            >
              Enroll Course
            </Button>
          </Card.Footer>
        </Card>
      </Container>

      <h1 style={{ margin: "10px 0" }}>Learners are viewing</h1>
      <hr style={{ margin: "10px 0" }} />

      <Container style={{ margin: "0px", overflowX: "auto" }} fluid>
        <Row style={{ margin: "20px" }} className="flex-nowrap">
          {category.map((courses, indx) => (
            <Col
              key={indx}
              style={{
                minWidth: "450px",
                maxWidth: "450px",
                marginRight: "10px",
              }}
            >
              <Card bg="light" className="h-100 d-flex flex-column">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{courses.courseTitle}</Card.Title>
                  <Card.Img
                    className="img-fluid"
                    variant="top"
                    src={courses.coursePicture}
                    style={{ width: "445px", height: "400px" }}
                  />
                  {/* <Accordion style={{ padding: "20px", fontSize: "16px" }} defaultActiveKey="1">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Course Discription</Accordion.Header>
                      <Accordion.Body>
                        {courses.courseDiscription}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion> */}

                  <Card.Text style={{ textAlign: "left", fontSize: "16px" }}>
                    {" "}
                    By{" "}
                    {`${courses.courseInstructor.firstName} ${courses.courseInstructor.lastName}`}
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
                            `http://localhost:5000/courses/enrollCourse/${courses._id}`,
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
                    >
                      Go somewhere
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
