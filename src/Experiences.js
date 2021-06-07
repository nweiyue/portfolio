import React from "react";

import Template from "./Template";
import Content from "./Content";

import Jumbotron from "react-bootstrap/Jumbotron";
import Badge from 'react-bootstrap/Badge'

export default function Experiences(props) {
  return (
    <div>
      <Template title={props.title} />
      <Content>
        <Jumbotron>
          <h1>RPA Developer</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
          </p>
        </Jumbotron>
      </Content>
    </div>
  );
}
