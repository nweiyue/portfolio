import React from "react";

import Template from "./Template";
import Content from "./Content";

import Carousel from "react-bootstrap/Carousel";
import Media from 'react-bootstrap/Media'

export default function Projects(props) {
  return (
    <div>
      <Template title={props.title} />
    </div>
  );
}
