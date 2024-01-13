

import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Dropdown,
} from "react-bootstrap";

const NavBar = () => {
  return (
    <header className="p-3 mb-3 border-bottom">
      <Container>
        <Navbar className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Navbar.Brand
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </Navbar.Brand>

          <Nav className="col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/users/register">Register</Nav.Link>
            <Nav.Link href="/users/login">Login</Nav.Link>
            <Nav.Link href="/users/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/users/allcourses">All Courses</Nav.Link>
            {" "}
            <Dropdown.Menu title="Categories" id="basic-nav-dropdown">
            {" "}
              <Dropdown.Item href="/categories/marketingAndBusiness">
              Marketing and Business{" "}
              </Dropdown.Item>
              {" "}
              <Dropdown.Item href="/categories/artsAndPhotography">
                 Arts and Photography{" "}
              </Dropdown.Item>
              {" "}
              <Dropdown.Item href="/categories/personalFinanceAndEconomics">
                Personal Finance and Economics{" "}
              </Dropdown.Item>
              <Dropdown.Divider />
              {" "}
              <Dropdown.Item href="#action/3.4">
                 Separated link {" "}
              </Dropdown.Item>
              {" "}
            </Dropdown.Menu>
          </Nav>

          <Form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <FormControl
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
          </Form>

          <Dropdown className="text-end">
            <Dropdown.Toggle
              id="dropdownUser1"
              className="d-block link-dark text-decoration-none"
              role="button"
            >
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu className="text-small">
              <Dropdown.Item href="/users/dashboard">Dashboard</Dropdown.Item>
              <Dropdown.Item href="#">Settings</Dropdown.Item>
              <Dropdown.Item href="#">Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/users/signOut">Sign out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar>
      </Container>
    </header>
  );
};

export default NavBar;
