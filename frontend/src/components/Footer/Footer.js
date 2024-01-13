import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <Container
      style={{
        background: "black",
        fontfamily: "lucida grande",
        fontsize: "11px",
        color: "white",
      }}
    >
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <Col mb={3}>
          <a
            href="/"
            className="d-flex align-items-center mb-3 link-dark text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <p className="text-muted">© 2022</p>
        </Col>

        <Col mb={3}></Col>

        <Col
          style={{
            fontfamily: "lucida grande",
            fontsize: "11px",
            color: "white",
          }}
          mb={3}
        >
          <h5>Section</h5>
          <Nav className="flex-column">
            <Nav.Item className="mb-2">
              <Nav.Link href="#" className="nav-link p-0 text-muted">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link href="#" className="nav-link p-0 text-muted">
                Features
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link href="#" className="nav-link p-0 text-muted">
                Pricing
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link href="#" className="nav-link p-0 text-muted">
                FAQs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link href="#" className="nav-link p-0 text-muted">
                About
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        <Col mb={3}>
          <h5>Section</h5>
          <Nav className="flex-column">
            <Nav.Item className="mb-2">
              <Nav.Link href="#" className="nav-link p-0 text-muted">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link href="#" className="nav-link p-0 text-muted">
                Features
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link href="#" className="nav-link p-0 text-muted">
                Pricing
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link href="#" className="nav-link p-0 text-muted">
                FAQs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link href="#" className="nav-link p-0 text-muted">
                About
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        <Col mb={3}>
          <h5>Section</h5>
          <Nav className="flex-column">
            <Nav.Item className="mb-2">
              <Nav.Link href="#" className="nav-link p-0 text-muted">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link href="#" className="nav-link p-0 text-muted">
                Features
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link href="#" className="nav-link p-0 text-muted">
                Pricing
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link href="#" className="nav-link p-0 text-muted">
                FAQs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link href="#" className="nav-link p-0 text-muted">
                About
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </footer>
    </Container>
  );
};

export default Footer;
