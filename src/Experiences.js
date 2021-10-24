import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";

import Template from "./Template";
import Content from "./Content";

import imgNusLogo from "./resources/pictures/NUS_logo.jpg";
import imgGfLogo from "./resources/pictures/GF_logo.png";

export default function Experiences(props) {
  return (
    <div className="experiences">
      <style type="text/css">
        {`
        .badge-custom {
          background-color: #0f1626;
          color: #f5f5f5;
        }
      `}
      </style>
      <Template title={props.title} />
      <Content>
        <Jumbotron className="pt-5 pb-4 experiences-jumbotron">
          <Container fluid>
            <Row className="d-flex justify-content-center">
              <Col xs={6} md={4}>
                <Image src={imgNusLogo} fluid thumbnail />
                <h6 className="experiences-company">National University of Singapore (NUS)</h6>
              </Col>
              <Col xs={6} md={8}>
                <h2>Teaching Assistant</h2>
                <h6>CS3243: Introduction to Artificial Intelligence</h6>
                <h6 className="experiences-dates">Aug 2021 to Present</h6>
                <h4>Roles and Responsibilities:</h4>
                <ul>
                  <li>
                    Graded weekly assignments and provided feedback to 31 
                    students to reinforce their basic AI concepts
                  </li>
                  <li>
                    Clarified students’ doubts through email and forum replies
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Jumbotron className="pt-5 pb-4 experiences-jumbotron">
          <Container fluid>
            <Row className="d-flex justify-content-center">
              <Col xs={6} md={4}>
                <Image src={imgGfLogo} fluid thumbnail />
                <h6 className="experiences-company mr-3">GlobalFoundries Singapore</h6>
              </Col>
              <Col xs={6} md={8}>
                <h2>Software Engineering Intern</h2>
                <h6 className="experiences-dates">May 2021 to Jul 2021</h6>
                <h4>Roles and Responsibilities:</h4>
                <ul>
                  <li>
                    Initiated the development of Python scripts to automate the creation 
                    of daily meeting reports thereby saving more than 1,000 man-hours a year
                  </li>
                  <li>
                    Integrated SQL database queries and data manipulation with RPA bots to speed 
                    up the retrieval and filtering of data by more than 50%
                  </li>
                  <li>
                    Mentored newly-joined interns on RPA technologies like Automation Anywhere
                  </li>
                </ul>
                <div>
                  <h6>
                    Tech stack:{" "}
                    <Badge variant="custom">Python</Badge>{" "}
                    <Badge variant="custom">SQL</Badge>{" "}
                    <Badge variant="custom">Automation Anywhere</Badge>
                  </h6>
                </div>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Jumbotron className="pt-5 pb-4 experiences-jumbotron">
          <Container fluid>
            <Row className="d-flex justify-content-center">
              <Col xs={6} md={4}>
                <Image src={imgGfLogo} fluid thumbnail />
                <h6 className="experiences-company mr-3">GlobalFoundries Singapore</h6>
              </Col>
              <Col xs={6} md={8}>
                <h2>Robotic Process Automation (RPA) Developer Intern</h2>
                <h6 className="experiences-dates">Dec 2020 to Jan 2021</h6>
                <h4>Roles and Responsibilities:</h4>
                <ul>
                  <li>
                    Designed and developed 3 RPA bots to automate the retrieval of data from different web 
                    reports thereby saving preparation time for meetings by more than 200%
                  </li>
                </ul>
                <div>
                  <h6>
                    Tech stack:{" "}
                    <Badge variant="custom">Automation Anywhere</Badge>
                  </h6>
                </div>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <div className="pb-4"></div>
      </Content>
    </div>
  );
}
