import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";

import Template from "./Template";
import Content from "./Content";

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
                <Image src={imgGfLogo} fluid thumbnail />
              </Col>
              <Col xs={6} md={8}>
                <h1>RPA Developer</h1>
                <h6 className="mb-0 experiences-dates">May 2021 to Present</h6>
                <h6 className="experiences-dates">Dec 2020 to Jan 2021</h6>
                <h4>Roles and Responsibilities:</h4>
                <ul>
                  <li>
                    Gathered and organised requirements from fab engineers to
                    ensure that automation solutions meet the fabrication
                    plant's needs
                  </li>
                  <li>
                    Designed, developed and tested end to end automation
                    solutions which are used to gather and process data from
                    different web reports, saving at least 30 manpower hours per
                    month on average
                  </li>
                  <li>
                    Incorporated Python scripts and Excel(SQL) databases with
                    RPA tools to improve performance of bots
                  </li>
                </ul>
                <div>
                  <h6>
                    Tech stack:{" "}
                    <Badge variant="custom">Automation Anywhere</Badge>{" "}
                    <Badge variant="custom">Python</Badge>{" "}
                    <Badge variant="custom">SQL</Badge>
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
