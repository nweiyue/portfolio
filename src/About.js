import React from "react";

import Media from "react-bootstrap/Media";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Template from "./Template";
import Content from "./Content";

import imgMe from "./resources/pictures/me.jpg";

export default function About(props) {
    return (
        <div className="about">
            <style type="text/css">
                {`
        .btn-resume {
          background-color: #ff533d;
          color: #f5f5f5;
        }

        .btn-resume:hover {
          background-color: #f5f5f5;
          color: #ff533d;
          border-color: #ff533d;
        }
      `}
            </style>
            <Template title={props.title} />
            <Content>
                <Media fluid className="pb-5">
                    <Container fluid>
                        <Row>
                            <Col md={6} sm={12}>
                                <img
                                    width={446.5}
                                    height={595}
                                    className="mr-3 img-fluid"
                                    src={imgMe}
                                    alt="me"
                                />
                            </Col>
                            <Col md={6} sm={12}>
                                <Media.Body className="sm-12">
                                    <h3>Who am I?</h3>
                                    <p className="about-tools">
                                        I am a final year student pursuing a
                                        degree in{" "}
                                        <span>
                                            Bachelor of Computing (Honours),
                                            Computer Science
                                        </span>{" "}
                                        at the National University of Singapore.
                                        My interest lies in building
                                        <span> high-performance</span> and{" "}
                                        <span>low-latency</span> applications
                                        that can help make life more easily for
                                        everyone! <br />
                                        <br />
                                        <h3>What can I do?</h3>
                                        <ul>
                                            <li>
                                                <span>
                                                    Programming Languages:{" "}
                                                </span>
                                                Python, C++, Java, JavaScript,
                                                Go, SQL{" "}
                                            </li>
                                            <li>
                                                <span>Frontend: </span>React,
                                                Bootstrap{" "}
                                            </li>
                                            <li>
                                                <span>Databases: </span>
                                                Microsoft SQL Server,
                                                PostgreSQL, MongoDB, Firebase,
                                                Redis{" "}
                                            </li>
                                            <li>
                                                <span>Testing: </span>Jest,
                                                Mocha, Chai, JUnit5{" "}
                                            </li>
                                            <li>
                                                <span>Cloud Native: </span>
                                                Docker, Kubernetes, Google Cloud
                                                Platform, Microsoft Azure{" "}
                                            </li>
                                        </ul>
                                        During my free time, I like to explore
                                        new technologies and tools by using them
                                        to build small side projects. If you
                                        have any interesting opportunities or
                                        ideas and would like to collaborate,
                                        please feel free to hit me up! :)
                                    </p>
                                    <Button
                                        variant="resume"
                                        href="resume.pdf"
                                        target="_blank"
                                    >
                                        View Resume
                                    </Button>
                                </Media.Body>
                            </Col>
                        </Row>
                    </Container>
                </Media>
            </Content>
        </div>
    );
}
