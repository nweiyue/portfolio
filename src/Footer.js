import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0 footer-icons">
            <a href="https://github.com/nweiyue" target="_blank" rel="noreferrer">
              <i className="fab fa-github-square fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/weiyue/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="mailto:weiyue16@gmail.com" target="_blank" rel="noreferrer">
              <i className="fas fa-envelope-square fa-2x"></i>
            </a>
          </Col>
          <Col className="p-0 d-flex justify-content-end">
            NGOH WEI YUE <span>©2021</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
