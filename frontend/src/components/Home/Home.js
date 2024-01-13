import React, { useState, useEffect, useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
function Home() {
  const [index, setIndex] = useState(0);
  const [Coursess, setCoursess] = useState([]);
  
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/courses`)
      .then((res) => {
        setCoursess(res.data.courses);
        console.log(res.data.courses);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div >

    <div style={{ padding: "25px", margin: "25px" }}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/static/media/ExampleCarouselImage.eeac58cfaa6683b923f2.jpg"
            alt="First slide"
            style={{
              width: "50%",
              height: "auto",
              objectFit: "cover",
            }}
          />

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/static/media/2.eeac58cfaa6683b923f2.jpg"
            alt="Second slide"
            style={{ width: "50%",              height: "auto",
            objectFit: "cover" }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* ... rest of your code ... */}
      </Carousel>
    </div>

    <h1>All Courses</h1>

<Container style={{ margin:"5px"}} fluid>
  <Row xs={1} md={3} className="g-4">
    {Coursess.map((courses, indx) => (
      <Col key={indx}>
        <Card bg="light" className="h-100 d-flex flex-column">
          <Card.Body className="d-flex flex-column">
            <Card.Title>{courses.courseTitle}</Card.Title>
            <Card.Text>{courses.courseDiscription}</Card.Text>
            <Card.Text style={{ textAlign: "left", fontSize: "20px"}}> By{"  "}
              {courses.courseInstructor.firstName}{" "}
              {courses.courseInstructor.lastName}
            </Card.Text>
            <div className="mt-auto">
            <Button style={{ margin:"5px"}}
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
            <Button style={{ margin:"5px"}} className="mb-2" variant="primary">
              Go somewhere
            </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>

<h1>What to learn next</h1>
<h1>Recommended for you</h1>
<h1>Learners are viewing</h1>

    </div>
  );
}

export default Home;
