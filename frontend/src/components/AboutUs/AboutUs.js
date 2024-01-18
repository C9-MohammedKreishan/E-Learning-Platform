import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
const image1 =
  "https://res.cloudinary.com/dalwd5c23/image/upload/v1705436743/pexels-anna-nekrashevich-6801872_pjjwg8.jpg";
const image2 =
  "https://res.cloudinary.com/dalwd5c23/image/upload/v1705436743/pexels-anna-nekrashevich-6801872_pjjwg8.jpg";
const image3 =
  "https://res.cloudinary.com/dalwd5c23/image/upload/v1705436743/pexels-anna-nekrashevich-6801872_pjjwg8.jpg";

const AboutUsPage = () => {
  return (
    <>
      <div className="about-section text-center bg-light py-5">
        <Container>
          <h1 className="display-4">Welcome to Our Story</h1>
          <p className="lead">
            Discover the journey behind our commitment to excellence and
            innovation. We strive to redefine standards and create meaningful
            experiences for our community.
          </p>
          <p className="lead">
            Explore our collective efforts in shaping a future where
            collaboration and passion converge seamlessly.
          </p>
        </Container>
      </div>

      <Container className="px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Columns with Icons</h2>
        <Row className="g-4 py-5 row-cols-1 row-cols-lg-3">
          <Col>
            <Card className="feature d-flex flex-column h-100">
              <div className="feature-icon bg-primary bg-gradient">
                <svg
                  className="bi"
                  width="1em"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <use xlinkHref="#collection" />
                </svg>
              </div>
              <Card.Body className="flex-grow-1">
                <Card.Title>Unleash Your Potential</Card.Title>
                <Card.Text>
                  Embark on a transformative journey in Marketing and Business
                  with our dynamic courses designed to elevate your skills and
                  strategic thinking.
                </Card.Text>
                <a href="#" className="icon-link">
                  Explore Courses
                  <svg
                    className="bi"
                    width="1em"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <use xlinkHref="#chevron-right" />
                  </svg>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="feature d-flex flex-column h-100">
              <div className="feature-icon bg-primary bg-gradient">
                <svg
                  className="bi"
                  width="1em"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <use xlinkHref="#people-circle" />
                </svg>
              </div>
              <Card.Body className="flex-grow-1">
                <Card.Title>Ignite Your Creativity</Card.Title>
                <Card.Text>
                  Take control of your financial future with our engaging
                  courses in Personal Finance and Economics.
                </Card.Text>
                <a href="#" className="icon-link">
                  Discover Courses
                  <svg
                    className="bi"
                    width="1em"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <use xlinkHref="#chevron-right" />
                  </svg>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="feature d-flex flex-column h-100">
              <div className="feature-icon bg-primary bg-gradient">
                <svg
                  className="bi"
                  width="1em"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <use xlinkHref="#toggles2" />
                </svg>
              </div>
              <Card.Body className="flex-grow-1">
                <Card.Title>Transform Your Journey</Card.Title>
                <Card.Text>
                  Dive into a world of creativity with our Arts and Photography
                  courses, where every brushstroke, click of the camera, or
                  digital creation becomes a unique masterpiece.
                </Card.Text>
                <a href="#" className="icon-link">
                  Start Learning
                  <svg
                    className="bi"
                    width="1em"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <use xlinkHref="#chevron-right" />
                  </svg>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* <Container className="px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Custom cards</h2>

      <Row className="row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <Col>
          <Card className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: `url('https://res.cloudinary.com/dalwd5c23/image/upload/v1705436743/pexels-anna-nekrashevich-6801872_pjjwg8.jpg')` }}>
  <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
    <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h2>
    <ul className="d-flex list-unstyled mt-auto">
      <li className="me-auto">
        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
      </li>
      <li className="d-flex align-items-center me-3">
        <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
        <small>Earth</small>
      </li>
      <li className="d-flex align-items-center">
        <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
        <small>3d</small>
      </li>
    </ul>
  </div>
</Card>

        </Col>

        <Col>
          <Card className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: "url('unsplash-photo-2.jpg')" }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                  <small>Pakistan</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                  <small>4d</small>
                </li>
              </ul>
            </div>
          </Card>
        </Col>

        <Col>
          <Card className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: "url('unsplash-photo-3.jpg')" }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img src="https://res.cloudinary.com/dalwd5c23/image/upload/v1705436743/pexels-anna-nekrashevich-6801872_pjjwg8.jpg" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                  <small>California</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                  <small>5d</small>
                </li>
              </ul>
            </div>
          </Card>
        </Col>
      </Row>
    </Container> */}
    </>
  );
};

export default AboutUsPage;
