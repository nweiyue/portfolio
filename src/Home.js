import React from "react";
import "./styles/Home.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ParticleBackground from "./ParticleBackground";

export function Home(props) {
  return (
    <header>
      <Container className="intro">
        <Row className="hello ml-3 mb-3">
          <Col>hello;</Col>
        </Row>
        <Row className="ml-3">
          <Col>this is <span className="name sm-12">Wei Yue;</span></Col>
        </Row>
      </Container>
    </header>
  );
}
