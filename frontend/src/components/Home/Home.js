import React, { useState, useEffect, useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import Allcourses from "../Allcourses/Allcourses";
import RandomCourse from "../Courses/RandomCourse"
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
    <div>
      <div style={{ padding: "25px", margin: "25px" }}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              src="https://res.cloudinary.com/dalwd5c23/image/upload/v1705177932/samples/cup-on-a-table.jpg"
              alt="First slide"
              style={{
                width: "100%",
                height: "500px",
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
              src="https://res.cloudinary.com/dalwd5c23/image/upload/v1705192445/2_tjhssu.jpg"
              alt="Second slide"
              style={{
                width: "30%", // Set the width to 30% of the original size
                height: "500px",// Set the height to 30% of the original size
                objectFit: "cover",
                margin: "auto", // Center the image horizontally
                // Make sure the image is a block element
              }}
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <RandomCourse />
      <Allcourses />

      <h1>What to learn next</h1>
      <h1>Recommended for you</h1>
      <h1>Learners are viewing</h1>
    </div>
  );
}

export default Home;
