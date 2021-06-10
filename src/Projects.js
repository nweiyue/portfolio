import React from "react";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import Template from "./Template";
import Content from "./Content";

import imgLastMinute from "./resources/pictures/lastMinute_thumbnail.png";
import imgChampion from "./resources/pictures/champion_thumbnail.png";
import imgSnake from "./resources/pictures/snake_thumbnail.png";
import imgRemindMe from "./resources/pictures/remindMe_thumbnail.png";
import imgAtas from "./resources/pictures/atas_thumbnail.png";
import imgDuke from "./resources/pictures/duke_thumbnail.png";
import imgPortfolioWebsiteV1 from "./resources/pictures/portfolioWebsiteV1_thumbnail.png";

export default function Projects(props) {
  return (
    <div className="projects">
      <style type="text/css">
        {`
        .btn-github {
        background-color: #24292e;
        color: #f9fafa;
        }

        .btn-github:hover {
          background-color: #f9fafa;
          color: #24292e;
          border-color: #24292e;
        }

        .btn-web {
            background-color: #04c2c9;
            color: #ffffff;
        }
    
        .btn-web:hover {
          background-color: #ffffff;
          color: #04c2c9;
          border-color: #04c2c9;
        }

        .btn-youtube {
          background-color: #ff0000;
          color: #ffffff;
        }
        
        .btn-youtube:hover {
          background-color: #ffffff;
          color: #ff0000;
          border-color: #ff0000
        }

        .btn-game {
          background-color: #ff8600;
          color: #f9fafa;
        }
        
        .btn-game:hover {
          background-color: #f9fafa;
          color: #ff8600;
          border-color: #ff8600;
        }

        .btn-medium {
          background-color: #343434;
          color: #ffffff;
        }
        
        .btn-medium:hover {
          background-color: #ffffff;
          color: #343434;
          border-color: #343434;
        }

        .badge-custom {
          background-color: #0f1626;
          color: #f5f5f5;
        }
      `}
      </style>
      <Template title={props.title} subTitle={props.subTitle} />
      <Content>
        {/* First row of projects */}
        <CardDeck>
          {/* Portfolio website v1 */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imgPortfolioWebsiteV1} />
            <Card.Body>
              <Card.Title>Personal Portfolio Website v1.0</Card.Title>
              <Card.Text>
                The first version of my personal portfolio website which was
                used to showcase my past projects. The current website you are
                on is the new and improved v2.0!
              </Card.Text>
              <div className="pb-3">
                <Badge variant="custom">HTML</Badge>{" "}
                <Badge variant="custom">CSS</Badge>{" "}
                <Badge variant="custom">JS</Badge>{" "}
                <Badge variant="custom">React</Badge>{" "}
              </div>
              <Button
                className="mr-3"
                variant="github"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://github.com/nweiyue/Portfolio-Website",
                    "_blank"
                  );
                }}
              >
                <i className="fab fa-github"></i> Github
              </Button>
              <Button
                variant="web"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://nweiyue.github.io/Portfolio-Website/",
                    "_blank"
                  );
                }}
              >
                <i className="fas fa-desktop"></i> Website
              </Button>
            </Card.Body>
          </Card>
          {/* ATAS */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imgAtas} />
            <Card.Body>
              <Card.Title>Addendum for Teaching Assistants (ATAS)</Card.Title>
              <Card.Text>
                ATAS is a desktop application that aims to elevate user's
                efficiency and make their experience of handling administrative
                tasks in classes as seamless as possible.
              </Card.Text>
              <div className="pb-3">
                <Badge variant="custom">Java</Badge>{" "}
                <Badge variant="custom">CSS</Badge>{" "}
                <Badge variant="custom">JavaFX</Badge>{" "}
                <Badge variant="custom">JUnit5</Badge>
              </div>
              <Button
                variant="github"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://github.com/AY2021S1-CS2103T-W16-4/tp",
                    "_blank"
                  );
                }}
              >
                <i className="fab fa-github"></i> GitHub
              </Button>
            </Card.Body>
          </Card>
          {/* Duke*/}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imgDuke} />
            <Card.Body>
              <Card.Title>Duke</Card.Title>
              <Card.Text>
                Duke is a is a desktop application which allows users to manage
                their tasks and at the same time acts as a personal chat bot.
              </Card.Text>
              <div className="pb-3">
                <Badge variant="custom">Java</Badge>{" "}
                <Badge variant="custom">CSS</Badge>{" "}
                <Badge variant="custom">JavaFX</Badge>{" "}
                <Badge variant="custom">JUnit5</Badge>
              </div>
              <Button
                variant="github"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://github.com/nweiyue/ip", "_blank");
                }}
              >
                <i className="fab fa-github"></i> GitHub
              </Button>
            </Card.Body>
          </Card>
        </CardDeck>
        {/* Second row of projects */}
        <CardDeck>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imgLastMinute} />
            <Card.Body>
              <Card.Title>lastMinute</Card.Title>
              <Card.Text>
                lastMinute is an all-in-one android travel application that
                redefines users' travel experiences by eliminating travel
                inconveniences.
              </Card.Text>
              <div className="pb-3">
                <Badge variant="custom">Java</Badge>{" "}
                <Badge variant="custom">Android Studio</Badge>{" "}
                <Badge variant="custom">Firebase</Badge>
              </div>

              <Button
                className="mr-3"
                variant="github"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://github.com/LeeMingDe/Orbital2020",
                    "_blank"
                  );
                }}
              >
                <i className="fab fa-github"></i> Github
              </Button>
              <Button
                variant="youtube"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://www.youtube.com/watch?v=Jg2CCN1vddk&feature=youtube",
                    "_blank"
                  );
                }}
              >
                <i className="fab fa-youtube"></i> Demo
              </Button>
  
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imgSnake} />
            <Card.Body>
              <Card.Title>Snake</Card.Title>
              <Card.Text>
                A copy of the classic snake game. Feel free to try it out!
              </Card.Text>
              <div className="pb-3">
                <Badge variant="custom">HTML</Badge>{" "}
                <Badge variant="custom">CSS</Badge>{" "}
                <Badge variant="custom">JS</Badge>
              </div>
       
              <Button
                className="mr-3"
                variant="github"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://github.com/nweiyue/Snake", "_blank");
                }}
              >
                <i className="fab fa-github"></i> Github
              </Button>
              <Button
                variant="game"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://nweiyue.github.io/Snake/", "_blank");
                }}
              >
                <i className="fas fa-gamepad"></i> Play
              </Button>
   
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imgChampion} />
            <Card.Body>
              <Card.Title>
                Offense win games, defense win championships
              </Card.Title>
              <Card.Text>
                A data science project that aims to uncover the truth behind
                this commonly spoken phrase in the sports world, specifically in
                the NBA.
              </Card.Text>
              <div className="pb-3">
                <Badge variant="custom">Python</Badge>{" "}
                <Badge variant="custom">Matplotlib</Badge>{" "}
                <Badge variant="custom">Seaborn</Badge>
              </div>
 
              <Button
                className="mr-3"
                variant="github"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://github.com/nweiyue/defense_wins_championships_data_analysis",
                    "_blank"
                  );
                }}
              >
                <i className="fab fa-github"></i> Github
              </Button>
              <Button
                variant="medium"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://medium.com/@nweiyue/nba-offense-win-games-defense-win-championships-is-this-really-the-case-6faefe6d9c9b?source=friends_link&sk=a8356f7c4d3902ee01272cea463e8e88",
                    "_blank"
                  );
                }}
              >
                <i className="fab fa-medium"></i> Read
              </Button>
          
            </Card.Body>
          </Card>
        </CardDeck>
        {/* Third row of projects */}
        <CardDeck className="pb-5">
          <Card style={{ width: "21.3rem" }}>
            <Card.Img variant="top" src={imgRemindMe} />
            <Card.Body>
              <Card.Title>RemindMe Bot</Card.Title>
              <Card.Text>
                RemindMe Bot is a simple python telegram bot that allows users
                to set reminders base on a timer.
              </Card.Text>
              <div className="pb-3">
                <Badge variant="custom">Python</Badge>
              </div>
              <Button
                variant="github"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://github.com/nweiyue/remindMeBot",
                    "_blank"
                  );
                }}
              >
                <i className="fab fa-github"></i> Github
              </Button>
            </Card.Body>
          </Card>
          <Card></Card>
          <Card></Card>
        </CardDeck>
      </Content>
    </div>
  );
}
