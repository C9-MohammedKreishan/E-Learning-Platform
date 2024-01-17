import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

export default function () {
  return (
    // <Container className="my-5">
    //   <h2 className="text-center mb-4">Frequently Asked Questions</h2>
    //   <Accordion defaultActiveKey="1">
    //     <Accordion.Item eventKey="0">
    //       <Accordion.Header>Course Discription</Accordion.Header>
    //       <Accordion.Body>hhhhh</Accordion.Body>
    //     </Accordion.Item>
    //   </Accordion>
    //   <Accordion defaultActiveKey="1">
    //     <Accordion.Item eventKey="0">
    //       <Accordion.Header>Course Discription</Accordion.Header>
    //       <Accordion.Body>hhhhh</Accordion.Body>
    //     </Accordion.Item>
    //   </Accordion>
    //   <Accordion defaultActiveKey="1">
    //     <Accordion.Item eventKey="0">
    //       <Accordion.Header>Course Discription</Accordion.Header>
    //       <Accordion.Body>hhhhh</Accordion.Body>
    //     </Accordion.Item>
    //   </Accordion>
    // </Container>
    <Container className="my-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0">
        
        <Accordion.Item eventKey="0">
          <Accordion.Header>Question 1: What is your e-learning platform all about?</Accordion.Header>
          <Accordion.Body>
            Answer 1: Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </Accordion.Body>
        </Accordion.Item>

     
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Question 2: What courses do you offer?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Answer 2: Articulate Storyline 360 has an easy to moderate
              learning curve which makes it the easiest authoring tool to learn.
              This is mainly because it:
            </p>{" "}
   
          </Accordion.Body>
        </Accordion.Item>

        
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Question 3: How do users enroll in a course?
          </Accordion.Header>
          <Accordion.Body>
            Answer 3: To enroll in a course, simply visit the course page, click on "Enroll," and follow the on-screen instructions to complete the enrollment process.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Question 4:How does the learning process work?
          </Accordion.Header>
          <Accordion.Body>
            Answer 4: The learning process involves [brief description of the learning structure, e.g., video lectures, quizzes, assignments]. Each course is designed to provide a comprehensive learning experience.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Question 5: Where can users access their enrolled courses?
          </Accordion.Header>
          <Accordion.Body>
            Answer 5: Enrolled courses can be accessed in the [My Courses] section after logging into your account.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Question 6: How do users track their progress in a course?
          </Accordion.Header>
          <Accordion.Body>
            Answer 6: To track your progress, visit the [course dashboard] where you'll find information on completed modules, quizzes, and any additional learning materials.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Question 7: What support is available for learners?
          </Accordion.Header>
          <Accordion.Body>
            Answer 7: Our dedicated support team is available to assist learners. Contact them through [contact form/email] with any questions or concerns.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Question 8:How do users submit assignments or assessments?
          </Accordion.Header>
          <Accordion.Body>
            Answer 8: Assignment submissions and assessments are typically done within the course platform. Specific instructions will be provided within each course.
          </Accordion.Body>
        </Accordion.Item>

       
      </Accordion>
    </Container>
  );
}
