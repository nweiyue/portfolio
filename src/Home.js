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
      <div class="container">
        <ParticleBackground />
        <div class="center">
        <p>hello;</p>
        <p>i'm <span class="intro-name">WEI YUE;</span></p>
        <p class="intro-welcome">Welcome to my site;</p>
        </div>
      </div>
    </header>
  );
}
