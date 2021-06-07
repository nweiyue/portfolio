import React from "react";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

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
              Web Development
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Languages
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Content>
    </div>
  );
}
