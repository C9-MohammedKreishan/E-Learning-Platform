// import React, { useContext, useState, createContext } from "react";
// import { Link } from "react-router-dom";
// import { userContext } from "../../App";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import FormControl from "react-bootstrap/FormControl"
// // import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

// const NavBar = () => {
//   return (
//     <div>
//       {/* <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
//         <Container>
//           <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="/Home">Home</Nav.Link>
//               <Nav.Link href="/users/register">Register</Nav.Link>
//               <Nav.Link href="/users/login">Login</Nav.Link>
//               <Nav.Link href="/users/dashboard">Dashboard</Nav.Link>
//               <Nav.Link href="/users/allcourses">All Courses</Nav.Link>
//               <NavDropdown title="Categories" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="/categories/marketingAndBusiness">
//                   Marketing and Business
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="/categories/artsAndPhotography">
//                   Arts and Photography
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="/categories/personalFinanceAndEconomics">
//                   Personal Finance and Economics
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">
//                   Separated link
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//             <Form className="d-flex">
//               <Form.Control
//                 type="search"
//                 placeholder="Search"
//                 className="me-2"
//                 aria-label="Search"
//               />
//               <Button variant="outline-success">Search</Button>
//             </Form>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar> */}
//       {/* <div className="container">
//         <Navbar bg="light" expand="md" className="border-bottom">
//           <Navbar.Brand
//             href="/"
//             className="d-flex align-items-center mb-2 mb-md-0 text-dark text-decoration-none"
//           >
//             <svg
//               className="bi me-2"
//               width="40"
//               height="32"
//               role="img"
//               aria-label="Bootstrap"
//             >
//               <use xlinkHref="#bootstrap"></use>
//             </svg>
//           </Navbar.Brand>

//           <Navbar.Toggle aria-controls="navbar" />

//           <Navbar.Collapse id="navbar">
//             <Nav className="col-12 col-md-auto mb-2 justify-content-center mb-md-0">
//               <Nav.Link href="#" className="nav-link px-2 link-secondary">
//                 Home
//               </Nav.Link>
//               <Nav.Link href="#" className="nav-link px-2 link-dark">
//                 Features
//               </Nav.Link>
//               <Nav.Link href="#" className="nav-link px-2 link-dark">
//                 Pricing
//               </Nav.Link>
//               <Nav.Link href="#" className="nav-link px-2 link-dark">
//                 FAQs
//               </Nav.Link>
//               <Nav.Link href="#" className="nav-link px-2 link-dark">
//                 About
//               </Nav.Link>
//             </Nav>

//             <div className="col-md-3 text-end">
//               <Button variant="outline-primary" className="me-2">
//                 Login
//               </Button>
//               <Button variant="primary">Sign-up</Button>
//             </div>
//           </Navbar.Collapse>
//         </Navbar>
//       </div> */}
//       <header>
//         <div className="px-3 py-2 bg-dark text-white">
//           <div className="container">
//             <Navbar
//               expand="lg"
//               className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
//             >
//               <Navbar.Brand
//                 href="/"
//                 className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
//               >
//                 <svg
//                   className="bi me-2"
//                   width="40"
//                   height="32"
//                   role="img"
//                   aria-label="Bootstrap"
//                 >
//                   <use xlinkHref="#bootstrap"></use>
//                 </svg>
//               </Navbar.Brand>

//               <Navbar.Toggle aria-controls="navbar" />

//               <Navbar.Collapse id="navbar">
//                 <Nav className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
//                   <Nav.Item>
//                     <Nav.Link href="#" className="nav-link text-secondary">
//                       <svg
//                         className="bi d-block mx-auto mb-1"
//                         width="24"
//                         height="24"
//                       >
//                         <use xlinkHref="#home"></use>
//                       </svg>
//                       Home
//                     </Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                     <Nav.Link href="#" className="nav-link text-white">
//                       <svg
//                         className="bi d-block mx-auto mb-1"
//                         width="24"
//                         height="24"
//                       >
//                         <use xlinkHref="#speedometer2"></use>
//                       </svg>
//                       Dashboard
//                     </Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                     <Nav.Link href="#" className="nav-link text-white">
//                       <svg
//                         className="bi d-block mx-auto mb-1"
//                         width="24"
//                         height="24"
//                       >
//                         <use xlinkHref="#table"></use>
//                       </svg>
//                       Orders
//                     </Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                     <Nav.Link href="#" className="nav-link text-white">
//                       <svg
//                         className="bi d-block mx-auto mb-1"
//                         width="24"
//                         height="24"
//                       >
//                         <use xlinkHref="#grid"></use>
//                       </svg>
//                       Products
//                     </Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                     <Nav.Link href="#" className="nav-link text-white">
//                       <svg
//                         className="bi d-block mx-auto mb-1"
//                         width="24"
//                         height="24"
//                       >
//                         <use xlinkHref="#people-circle"></use>
//                       </svg>
//                       Customers
//                     </Nav.Link>
//                   </Nav.Item>
//                 </Nav>
//               </Navbar.Collapse>
//             </Navbar>
//           </div>
//         </div>
//         <div className="px-3 py-2 border-bottom mb-3">
//           <div className="container d-flex flex-wrap justify-content-center">
//             <Form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
//               <FormControl
//                 type="search"
//                 placeholder="Search..."
//                 className="form-control"
//                 aria-label="Search"
//               />
//             </Form>

//             <div className="text-end">
//               <Button variant="light" className="text-dark me-2">
//                 Login
//               </Button>
//               <Button variant="primary">Sign-up</Button>
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default NavBar;
// import React from "react";
// import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";

// const NavBar = () => {
//   return (
//     <header>
//       <div className="px-3 py-2 bg-dark text-white">
//         <Container>
//           <Navbar
//             expand="lg"
//             className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
//           >
//             <Navbar.Brand
//               href="/"
//               className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
//             >
//               <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
//                 <use xlinkHref="#bootstrap"></use>
//               </svg>
//             </Navbar.Brand>

//             <Navbar.Toggle aria-controls="navbar" />

//             <Navbar.Collapse id="navbar">
//               <Nav className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
//                 <Nav.Item>
//                   <Nav.Link href="#" className="nav-link text-secondary">
//                     <svg className="bi d-block mx-auto mb-1" width="24" height="24">
//                       <use xlinkHref="#home"></use>
//                     </svg>
//                     Home
//                   </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link href="#" className="nav-link text-white">
//                     <svg className="bi d-block mx-auto mb-1" width="24" height="24">
//                       <use xlinkHref="#speedometer2"></use>
//                     </svg>
//                     Dashboard
//                   </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link href="#" className="nav-link text-white">
//                     <svg className="bi d-block mx-auto mb-1" width="24" height="24">
//                       <use xlinkHref="#table"></use>
//                     </svg>
//                     Orders
//                   </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link href="#" className="nav-link text-white">
//                     <svg className="bi d-block mx-auto mb-1" width="24" height="24">
//                       <use xlinkHref="#grid"></use>
//                     </svg>
//                     Products
//                   </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link href="#" className="nav-link text-white">
//                     <svg className="bi d-block mx-auto mb-1" width="24" height="24">
//                       <use xlinkHref="#people-circle"></use>
//                     </svg>
//                     Customers
//                   </Nav.Link>
//                 </Nav.Item>
//               </Nav>
//             </Navbar.Collapse>
//           </Navbar>
//         </Container>
//       </div>
//       <div className="px-3 py-2 border-bottom mb-3">
//         <Container className="d-flex flex-wrap justify-content-center">
//           <Form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
//             <FormControl type="search" placeholder="Search..." className="form-control" aria-label="Search" />
//           </Form>

//           <div className="text-end">
//             <Button variant="light" className="text-dark me-2">
//               Login
//             </Button>
//             <Button variant="primary">Sign-up</Button>
//           </div>
//         </Container>
//       </div>
//     </header>
//   );
// };

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
