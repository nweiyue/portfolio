import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <footer className="">
      <Container fluid>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0 d-flex justify-content-end">
            NGOH WEI YUE <span>©2021</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
