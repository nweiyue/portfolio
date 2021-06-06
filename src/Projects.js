import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Media from 'react-bootstrap/Media'

export default function Projects(props) {
  return (
    <Carousel>
      <Carousel.Item>
        <Media>
          <img
            // width={64}
            // height={64}
            className="mr-3"
            src={require("./resources/pictures/lastMinute_thumbnail.png")}
            alt="Generic placeholder"
          />
          <Media.Body>
            <h2>lastMinute</h2>
            <p className="mb-5">
            lastMinute is an all-in-one android travel application that
            redefines users' travel experiences by eliminating travel
            inconveniences. This application integrates an itinerary planner,
            diary, map and currency converter into one platform. This project
            was done by a group of 2 as part of our CP2106 Orbital project.
            </p>
          </Media.Body>
        </Media>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
