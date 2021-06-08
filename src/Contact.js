import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Template from "./Template";
import Content from "./Content";
import "./styles/Contact.css";
import Axios from "axios";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      diabled: false,
      emailSent: null,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      disabled: true,
    });

    Axios.post("/api/email", this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true,
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        this.setState({
          disbaled: false,
          emailSent: false,
        });
      });
  };

  render() {
    return (
      <div>
        <Template title={this.props.title} />
        <Content>
          <Container fluid>
            <Row>
              <Col md={12} lg={6}>
                <Form className="mb-3" onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control
                      id="name"
                      name="name"
                      type="text"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />

                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control
                      id="email"
                      name="email"
                      type="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />

                    <Form.Label htmlFor="message">Message</Form.Label>
                    <Form.Control
                      id="message"
                      name="message"
                      as="textarea"
                      rows="5"
                      value={this.state.message}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Button
                    className="d-inline-block"
                    variant="primary"
                    type="Submit"
                    disabled={this.state.disabled}
                  >
                    Send
                  </Button>

                  {this.state.emailSent === true && (
                    <p className="d-inline success-msg">
                      Email sent successfully!
                    </p>
                  )}
                  {this.state.emailSent === false && (
                    <p className="d-inline err-msg">
                      Error occured! Please refresh the page and try again!
                    </p>
                  )}
                </Form>
              </Col>
              <Col md={12} lg={6}>
                <Container className="bg-transparent d-flex h-100 justify-content-center pb-5">
                  <Row className="align-self-center socials">
                    <a href="https://github.com/nweiyue" target="_blank">
                      <i class="fab fa-github-square fa-5x"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/weiyue/"
                      target="_blank"
                    >
                      <i class="fab fa-linkedin fa-5x"></i>
                    </a>
                    <a href="https://t.me/weiyuee" target="_blank">
                      <i class="fab fa-telegram-plane fa-5x"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/weiyueeee/"
                      target="_blank"
                    >
                      <i class="fab fa-instagram-square fa-5x"></i>
                    </a>
                    <a href="mailto:weiyue16@gmail.com" target="_blank">
                      <i class="fas fa-envelope-square fa-5x"></i>
                    </a>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Content>
      </div>
    );
  }
}
