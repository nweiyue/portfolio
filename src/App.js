import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

import { Home } from "./Home.js";
import About from "./About.js";
import Projects from "./Projects.js";
import Experiences from "./Experiences.js";
import Skills from "./Skills.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Ngoh Wei Yue",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About" , path: "/about" },
        { title: "Projects", path: "/projects" },
        { title: "Experiences", path: "/experiences" },
        { title: "Skills", path: "/skills" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "hello;"
      },
      about: {
        title: "me;",
        subTitle: "my life thus far;",
        text: `I am currently a year 2 student pursuing a degree in Bachelor of Computing (Honours), 
        Computer Science at the National University of Singapore. As a highly motivated individual, 
        I enjoy overcoming challenges and pushing through my limits. I am someone who is seriously 
        passionate about software development as well as big data technologies. I aspire to develop 
        cutting-edge tech solutions to solve modern-day problems. Committed to self-improvement, 
        I work on small side projects during my
        free time.`
      },
      projects: {
        title: "What I've worked on;",
      },
      experiences: {
        title: "What I've been through;",
      },
      skills: {
        title: "What I can do;",
      },
      contact: {
        title: "let's get in touch;",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid>
          <Navbar bg="light" expand="md" className="border-bottom" fluid>
            <Navbar.Brand>
              Wei Yue
              {/* <img src="./resources/pictures/WEIYUE copy.png" alt="logo"></img> */}
            </Navbar.Brand>
            <Navbar.Toggle className="border-0" />
            <Navbar.Collapse>
              <Nav className="ml-auto">
                <NavLink className="nav-link" exact to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
                <NavLink className="nav-link" to="/Projects">
                  Projects
                </NavLink>
                <NavLink className="nav-link" to="/Experiences">
                  Experiences
                </NavLink>
                <NavLink className="nav-link" to="/Skills">
                  Skills
                </NavLink>
                <NavLink className="nav-link" to="/Contact">
                  Contact
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            path="/"
            exact
            render={() => <Home title={this.state.home.title} />}
          />
          <Route
            path="/About"
            exact
            render={() => <About title={this.state.about.title} text={this.state.about.text}/>}
          />
          <Route
            path="/Projects"
            exact
            render={() => <Projects title={this.state.projects.title} />}
          />
          <Route
            path="/Experiences"
            exact
            render={() => <Experiences title={this.state.experiences.title} />}
          />
          <Route
            path="/Skills"
            exact
            render={() => <Skills title={this.state.skills.title} />}
          />
          <Route
            path="/Contact"
            exact
            render={() => <Contact title={this.state.contact.title} />}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
