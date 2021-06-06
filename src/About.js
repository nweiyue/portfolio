import React from "react";

import Template from "./Template";

export default function About(props) {
  return (
    <Template title={props.title} subTitle={props.subTitle} text={props.text} />
  );
}
