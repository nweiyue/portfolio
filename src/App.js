import React from "react";

import { HashRouter as Router, Route, Link} from "react-router-dom";
import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Home from "./Home.js";
import About from "./About.js";
import Projects from "./Projects.js";
import Experiences from "./Experiences.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";

import logo from "./resources/pictures/logo.png";
import "./styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Ngoh Wei Yue",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Projects", path: "/projects" },
        { title: "Experiences", path: "/experiences" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "hello;",
      },
      about: {
        title: "me;",
      },
      projects: {
        title: "my projects;",
      },
      experiences: {
        title: "my experiences;",
      },
      contact: {
        title: "let's get in touch;",
      },
    };
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Container className="p-0" fluid>
          <Navbar bg="bright" expand="md" className="border-bottom navbar fixed-top" fluid>
            <Navbar.Brand>
              {/* Wei Yue */}
              <Link className="nav-link p-0" exact to="/">
                <img src={logo} width="32px" height="auto" alt="logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle className="border-0" />
            <Navbar.Collapse>
              <Nav className="ml-auto">
                <Link className="nav-link" exact to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/About">
                  About
                </Link>
                <Link className="nav-link" to="/Projects">
                  Projects
                </Link>
                <Link className="nav-link" to="/Experiences">
                  Experiences
                </Link>
                <Link className="nav-link" to="/Contact">
                  Contact
                </Link>
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
            render={() => (
              <About
                title={this.state.about.title}
              />
            )}
          />
          <Route
            path="/Projects"
            exact
            render={() => (
              <Projects
                title={this.state.projects.title}
              />
            )}
          />
          <Route
            path="/Experiences"
            exact
            render={() => <Experiences title={this.state.experiences.title} />}
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
