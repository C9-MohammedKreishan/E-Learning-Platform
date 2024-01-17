import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <>
      <div className="about-section">
        <Container>
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>Resize the browser window to see that this page is responsive by the way.</p>
        </Container>
      </div>

      <Container>
        <h2 className="text-center">Our Team</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="/w3images/team1.jpg" alt="Jane" />
              <Card.Body>
                <Card.Title>Jane Doe</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">CEO & Founder</Card.Subtitle>
                <Card.Text>
                  Some text that describes me lorem ipsum ipsum lorem.
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
                <Card.Subtitle className="mb-2 text-muted">Art Director</Card.Subtitle>
                <Card.Text>
                  Some text that describes me lorem ipsum ipsum lorem.
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
                <Card.Subtitle className="mb-2 text-muted">Designer</Card.Subtitle>
                <Card.Text>
                  Some text that describes me lorem ipsum ipsum lorem.
                </Card.Text>
                <Card.Text>john@example.com</Card.Text>
                <Button variant="primary">Contact</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
