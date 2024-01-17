import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
const image1 = "https://res.cloudinary.com/dalwd5c23/image/upload/v1705436743/pexels-anna-nekrashevich-6801872_pjjwg8.jpg";
const image2 = "https://res.cloudinary.com/dalwd5c23/image/upload/v1705436743/pexels-anna-nekrashevich-6801872_pjjwg8.jpg";
const image3 = "https://res.cloudinary.com/dalwd5c23/image/upload/v1705436743/pexels-anna-nekrashevich-6801872_pjjwg8.jpg";

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

      <Container className="my-5">
        <h2 className="text-center mb-5">Meet Our Team</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="/w3images/team1.jpg" alt="Jane" />
              <Card.Body>
                <Card.Title>Jane Doe</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  CEO & Founder
                </Card.Subtitle>
                <Card.Text>
                  As the visionary leader, I am dedicated to driving our team
                  towards excellence. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </Card.Text>
                <Card.Text>jane@example.com</Card.Text>
                <Button variant="primary">Contact</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="/w3images/team2.jpg" alt="Mike" />
              <Card.Body>
                <Card.Title>Mike Ross</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Art Director
                </Card.Subtitle>
                <Card.Text>
                  Bringing creativity to life, I orchestrate visual elements
                  that captivate and inspire. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </Card.Text>
                <Card.Text>mike@example.com</Card.Text>
                <Button variant="primary">Contact</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="/w3images/team3.jpg" alt="John" />
              <Card.Body>
                <Card.Title>John Doe</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Designer
                </Card.Subtitle>
                <Card.Text>
                  Transforming ideas into stunning designs is my passion. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
                <Card.Text>john@example.com</Card.Text>
                <Button variant="primary">Contact</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Columns with Icons</h2>
        <Row className="g-4 py-5 row-cols-1 row-cols-lg-3">
          <Col>
            <Card className="feature">
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
              <Card.Body>
                <Card.Title>Featured title</Card.Title>
                <Card.Text>
                  Paragraph of text beneath the heading to explain the heading.
                  We'll add onto it with another sentence and probably just keep
                  going until we run out of words.
                </Card.Text>
                <a href="#" className="icon-link">
                  Call to action
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
            <Card className="feature">
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
              <Card.Body>
                <Card.Title>Featured title</Card.Title>
                <Card.Text>
                  Paragraph of text beneath the heading to explain the heading.
                  We'll add onto it with another sentence and probably just keep
                  going until we run out of words.
                </Card.Text>
                <a href="#" className="icon-link">
                  Call to action
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
            <Card className="feature">
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
              <Card.Body>
                <Card.Title>Featured title</Card.Title>
                <Card.Text>
                  Paragraph of text beneath the heading to explain the heading.
                  We'll add onto it with another sentence and probably just keep
                  going until we run out of words.
                </Card.Text>
                <a href="#" className="icon-link">
                  Call to action
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
