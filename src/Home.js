import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ParticleBackground from "./ParticleBackground";

export function Home(props) {
  return (
    <header>
      <div class="home-container">
        <ParticleBackground />
        <div class="home-center">
        <p>hello;</p>
        <p>i'm <span class="intro-name">WEI YUE;</span></p>
        <p class="intro-welcome">welcome to my site;</p>
        </div>
      </div>
    </header>
  );
}
