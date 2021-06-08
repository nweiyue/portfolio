import React from "react";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Template from "./Template";
import Content from "./Content";

export default function Skills(props) {
  return (
    <div>
      <Template title={props.title} />
      <Content>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <h3>Programming Languages</h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body></Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              <h3>Web Development</h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Container fluid>
                  <Row className="d-flex justify-content-center  text-center">
                    <Col>
                      <i className="fab fa-html5 fa-4x"></i>
                    </Col>
                    <Col>
                      <i className="fab fa-css3-alt fa-4x"></i>
                    </Col>
                    <Col>
                      <i className="fab fa-js-square fa-4x"></i>
                    </Col>

                    <Col>
                      <i className="fab fa-react fa-4x"></i>
                    </Col>
                    <Col>
                      <i class="fab fa-node fa-4x"></i>
                    </Col>

                    <Col>
                      <i className="fab fa-bootstrap fa-4x"></i>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              <h3>Databases</h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Container fluid>
                  <Row className="d-flex justify-content-center  text-center">
                    <Col>
                      <i className="fab fa-html5 fa-4x"></i>
                    </Col>
                    <Col>
                      <i className="fab fa-css3-alt fa-4x"></i>
                    </Col>
                    <Col>
                      <i className="fab fa-js-square fa-4x"></i>
                    </Col>

                    <Col>
                      <i className="fab fa-react fa-4x"></i>
                    </Col>
                    <Col>
                      <i class="fab fa-node fa-4x"></i>
                    </Col>

                    <Col>
                      <i className="fab fa-bootstrap fa-4x"></i>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              <h3>Data Science</h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <Container fluid>
                  <Row className="d-flex justify-content-center  text-center">
                    <Col>
                      <i className="fab fa-html5 fa-4x"></i>
                    </Col>
                    <Col>
                      <i className="fab fa-css3-alt fa-4x"></i>
                    </Col>
                    <Col>
                      <i className="fab fa-js-square fa-4x"></i>
                    </Col>

                    <Col>
                      <i className="fab fa-react fa-4x"></i>
                    </Col>
                    <Col>
                      <i class="fab fa-node fa-4x"></i>
                    </Col>

                    <Col>
                      <i className="fab fa-bootstrap fa-4x"></i>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Content>
    </div>
  );
}
