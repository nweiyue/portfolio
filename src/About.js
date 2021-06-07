import React from "react";

import Media from "react-bootstrap/Media";

import Template from "./Template";
import Content from "./Content";
import imageMe from "./resources/pictures/me.jpg";

export default function About(props) {
  return (
    <div>
      <Template title={props.title} />
      <Content>
        {/* <div className="mb-3">
          I am currently a year 2 student pursuing a degree in Bachelor of
          Computing (Honours), Computer Science at the National University of
          Singapore. As a highly motivated individual, I enjoy overcoming
          challenges and pushing through my limits. I am someone who is
          seriously passionate about software development as well as big data
          technologies. I aspire to develop cutting-edge tech solutions to solve
          modern-day problems. Committed to self-improvement, I work on small
          side projects during my free time.
        </div> */}
        
        <Media fluid>
          <img
            width={446.5}
            height={595}
            className="mr-3 img-fluid"
            src={imageMe}
            alt="me"
          />
          <Media.Body className="sm-12">
            <p>
              I am currently a year 2 student pursuing a degree in Bachelor of
              Computing (Honours), Computer Science at the National University
              of Singapore. As a highly motivated individual, I enjoy overcoming
              challenges and pushing through my limits. I am someone who is
              seriously passionate about software development as well as big
              data technologies. I aspire to develop cutting-edge tech solutions
              to solve modern-day problems. Committed to self-improvement, I
              work on small side projects during my free time.
            </p>
          </Media.Body>
        </Media>
      </Content>
    </div>
  );
}
