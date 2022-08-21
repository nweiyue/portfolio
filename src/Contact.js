import React from "react";

import { SocialIcon } from "react-social-icons";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Template from "./Template";
import Content from "./Content";
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
      <div className="contact">
        <style type="text/css">
          {`
        .btn-send {
          background-color: #ff533d;
          color: #f5f5f5;
        }

        .btn-send:hover {
          background-color: #f5f5f5;
          color: #ff533d;
          border-color: #ff533d;
        }
      `}
        </style>
        <Template title={this.props.title} />
        <Content>
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
              variant="send"
              type="Submit"
              disabled={this.state.disabled}
            >
              Send
            </Button>

            {this.state.emailSent === true && (
              <p className="d-inline success-msg">Email sent successfully!</p>
            )}
            {this.state.emailSent === false && (
              <p className="d-inline err-msg">
                Error occured! Please refresh the page and try again!
              </p>
            )}
          </Form>
          <div className="contact-icons pb-5 pt-5">
            <span>
              <SocialIcon url="https://github.com/nweiyue" target="_blank" />
            </span>
            <span>
              <SocialIcon
                url="https://www.linkedin.com/in/weiyue/"
                target="_blank"
              />
            </span>
            <span>
              <SocialIcon url="mailto:weiyue16@gmail.com" target="_blank" />
            </span>
          </div>
        </Content>
      </div>
    );
  }
}
