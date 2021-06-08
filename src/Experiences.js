import React from "react";

import Template from "./Template";
import Content from "./Content";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";

import imgGfLogo from "./resources/pictures/GF_logo.png";

export default function Experiences(props) {
  return (
    <div>
      <Template title={props.title} />
      <Content>
        <Jumbotron className="p-4">
          <Container fluid>
            <Row className="d-flex justify-content-center">
              <Col xs={6} md={4}>
                <Image src={imgGfLogo} fluid thumbnail />
              </Col>
              <Col xs={6} md={8}>
                <h1>RPA Developer</h1>
                <p className="mb-0 dates">May 2021 to Present</p>
                <p className="dates">Dec 2020 to Jan 2021</p>
                <h4>Roles and Responsibilities:</h4>
                <ul>
                  <li>
                    Gathered and organised requirements from fab engineers to
                    ensure that automation solutions meet the fabrication
                    plant's needs
                  </li>
                  <li>
                    Designed and developed end to end automation solutions which
                    are used to gather and process data from different web
                    reports, saving at least 30 manpower hours per month on
                    average
                  </li>
                  <li>
                    Incorporated Python scripts and Excel(SQL) databases with
                    RPA tools to improve performance and reliability of bots
                  </li>
                </ul>
                <div>
                  <h6>
                    Tech stack:{" "}
                    <Badge bg="secondary">Automation Anywhere</Badge>{" "}
                    <Badge bg="secondary">Python</Badge>{" "}
                    <Badge bg="secondary">SQL</Badge>
                  </h6>
                </div>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </Content>
    </div>
  );
}
