import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Template from "./Template";
import Content from "./Content";
import "./styles/Contact.css";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      name: "",
      name: "",
      diabled: false,
      emailSent: null,
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      disabled: true
      // emailSent: true
    });
  }

  render() {
    return (
      <div>
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
            <Button className="d-inline-block" variant="primary" type="Submit" disabled={this.state.disabled}>
              Send
            </Button>

            {this.state.emailSent === true && <p className="d-inline success-msg">Email sent successfully</p>}
            {this.state.emailSent === false && <p className="d-inline err-msg">Error sending email</p>}
          </Form>
        </Content>
      </div>
    );
  }
}
