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
import imgGicLogo from "./resources/pictures/GIC_logo.jpg";
import imgMsLogo from "./resources/pictures/MS_logo.png";
import imgSpLogo from "./resources/pictures/SP_logo.jpg";

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
                                <Image src={imgSpLogo} fluid thumbnail />
                            </Col>
                            <Col xs={6} md={8}>
                                <h3 style={{ fontWeight: "bold" }}>
                                    Squarepoint Capital
                                </h3>
                                <h4>Software Engineering Intern</h4>
                                <h6 className="experiences-dates">
                                    Aug 2022 to Present
                                </h6>
                                <h4>Roles and Responsibilities:</h4>
                                <ul>
                                    <li>
                                        Identified bottlenecks in the firm’s
                                        order gateway logging system by running
                                        extensive benchmarking tests
                                    </li>
                                    <li>
                                        Optimised data logging system by
                                        reducing memory consumption and data
                                        processing latency
                                    </li>
                                </ul>
                                <div>
                                    <h6>
                                        Tech stack:{" "}
                                        <Badge variant="custom">Python</Badge>{" "}
                                        <Badge variant="custom">C++</Badge>{" "}
                                        <Badge variant="custom">Linux</Badge>{" "}
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
                                <Image src={imgMsLogo} fluid thumbnail />
                            </Col>
                            <Col xs={6} md={8}>
                                <h3 style={{ fontWeight: "bold" }}>
                                    Morgan Stanley
                                </h3>
                                <h4>Software Engineering Intern</h4>
                                <h6 className="experiences-dates">
                                    May 2022 to Aug 2022
                                </h6>
                                <h4>Roles and Responsibilities:</h4>
                                <ul>
                                    <li>
                                        Spearheaded the development of a policy
                                        engine to enhance the firm’s role-based
                                        access control system
                                    </li>
                                    <li>
                                        Built a Go package to establish
                                        SASL-based authenticated connection to
                                        LDAP servers for querying real-time data
                                    </li>
                                    <li>
                                        Performed benchmarking tests to compare
                                        2 different approaches of pulling data
                                        from LDAP servers
                                    </li>
                                </ul>
                                <div>
                                    <h6>
                                        Tech stack:{" "}
                                        <Badge variant="custom">Go</Badge>{" "}
                                        <Badge variant="custom">Rego</Badge>{" "}
                                        <Badge variant="custom">
                                            Open Policy Agent
                                        </Badge>{" "}
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
                                <Image src={imgGicLogo} fluid thumbnail />
                            </Col>
                            <Col xs={6} md={8}>
                                <h3 style={{ fontWeight: "bold" }}>
                                    GIC Private Limited
                                </h3>
                                <h4>Software Engineering Intern</h4>
                                <h6 className="experiences-dates">
                                    Dec 2021 to May 2022
                                </h6>
                                <h4>Roles and Responsibilities:</h4>
                                <ul>
                                    <li>
                                        Developed on-demand dashboards and
                                        interactive analytic charts for 3 asset
                                        classes
                                    </li>
                                    <li>
                                        Built REST APIs to dynamically query and
                                        process data from relational databases
                                    </li>
                                    <li>
                                        Implemented end-to-end testing to
                                        improve software quality and reliability
                                    </li>
                                </ul>
                                <div>
                                    <h6>
                                        Tech stack:{" "}
                                        <Badge variant="custom">
                                            Typescript
                                        </Badge>{" "}
                                        <Badge variant="custom">React</Badge>{" "}
                                        <Badge variant="custom">Node.js</Badge>{" "}
                                        <Badge variant="custom">NestJS</Badge>{" "}
                                        <Badge variant="custom">SQL</Badge>{" "}
                                        <Badge variant="custom">Jest</Badge>{" "}
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
                                <Image src={imgNusLogo} fluid thumbnail />
                            </Col>
                            <Col xs={6} md={8}>
                                <h3 style={{ fontWeight: "bold" }}>
                                    National University of Singapore (NUS)
                                </h3>
                                <h4>
                                    Teaching Assistant
                                    <h6>
                                        (CS3243: Introduction to Artificial
                                        Intelligence)
                                    </h6>
                                </h4>
                                <h6 className="experiences-dates">
                                    Aug 2021 to Dec 2021
                                </h6>
                                <h4>Roles and Responsibilities:</h4>
                                <ul>
                                    <li>
                                        Graded weekly assignments and provided
                                        timely feedback to 31 students on basic
                                        AI concepts including Search Problems,
                                        Reinforcement Learning and Logical
                                        Agents
                                    </li>
                                    <li>
                                        Clarified students’ doubts through email
                                        and forum replies
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
                            </Col>
                            <Col xs={6} md={8}>
                                <h3 style={{ fontWeight: "bold" }}>
                                    GlobalFoundries
                                </h3>
                                <h4>Software Engineering Intern</h4>
                                <h6 className="experiences-dates">
                                    May 2021 to Jul 2021
                                </h6>
                                <h4>Roles and Responsibilities:</h4>
                                <ul>
                                    <li>
                                        Crafted Python scripts to automate the
                                        creation of meeting reports thereby
                                        saving ~1,000 man-hours a year
                                    </li>
                                    <li>
                                        Optimized the filtering of data by
                                        integrating SQL queries with RPA bots,
                                        reducing runtime by 50%
                                    </li>
                                </ul>
                                <div>
                                    <h6>
                                        Tech stack:{" "}
                                        <Badge variant="custom">Python</Badge>{" "}
                                        <Badge variant="custom">SQL</Badge>{" "}
                                        <Badge variant="custom">
                                            Automation Anywhere
                                        </Badge>
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
                            </Col>
                            <Col xs={6} md={8}>
                                <h3 style={{ fontWeight: "bold" }}>
                                    GlobalFoundries
                                </h3>
                                <h4>
                                    Robotic Process Automation (RPA) Developer
                                    Intern
                                </h4>
                                <h6 className="experiences-dates">
                                    Dec 2020 to Jan 2021
                                </h6>
                                <h4>Roles and Responsibilities:</h4>
                                <ul>
                                    <li>
                                        Gathered and organised requirements from
                                        fab engineers to ensure that the bots
                                        meet the fabrication plant's needs
                                    </li>
                                    <li>
                                        Designed and developed 3 RPA bots to
                                        automate the retrieval of data from
                                        different web reports thereby saving
                                        preparation time for meetings by 80%
                                    </li>
                                </ul>
                                <div>
                                    <h6>
                                        Tech stack:{" "}
                                        <Badge variant="custom">Python</Badge>{" "}
                                        <Badge variant="custom">SQL</Badge>{" "}
                                        <Badge variant="custom">
                                            Automation Anywhere
                                        </Badge>
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
