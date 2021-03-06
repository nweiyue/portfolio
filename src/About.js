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
                    I am a penultimate year student pursuing a degree
                    in Bachelor of Computing (Honours), Computer Science at the
                    <span> National University of Singapore</span>. My interests lie in
                    <span> full-stack web development</span> as well as <span>artificial
                    intelligence</span>. <br/><br/>
                    During my free time, I like to explore new 
                    technologies and tools by using them to build small side projects.
                    Through these side projects, I have managed to learn and apply several
                    tools and frameworks such as <span>React.js</span>,
                    <span> Node.js</span>, <span>Bootstrap</span> and
                    <span> MongoDB</span>. If you have any interesting
                    opportunities regarding application(mobile/web/desktop)
                    development or would like to collaborate, please feel free
                    to hit me up! :)
                  </p>
                  <Button variant="resume" href="resume.pdf" target="_blank">
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
