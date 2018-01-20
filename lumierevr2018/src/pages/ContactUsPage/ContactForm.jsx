import React, { Component } from "react";

import SendRavenFor from "../../components/SendRaven";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

export default class ContactUsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      success: false
    };
  }

  _onSubmit = async e => {
    e.preventDefault();

    // data that needed to be added
    let data = {};

    // Targeting all input and converting them into an array
    const inputs = Array.apply(
      null,
      document.querySelectorAll(
        "#contact-us-form input, #contact-us-form textarea"
      )
    );

    // Grabing values from those input elements
    inputs.forEach(input => (data[input.name] = input.value));

    try {
      this.setState({ loading: true, success: false });
      await SendRavenFor("contact-us", data);
      await this.setState({ loading: false, success: true });
      document.getElementById("contact-us-form").reset();
      alert(
        "Thanks for contacting us. We will get back to you as soon as possible"
      );
    } catch (e) {
      console.error(e);
      alert(
        "There seems to be network problem. Please try again after some time"
      );
    }
  };

  render() {
    return (
      <form id="contact-us-form" onSubmit={this._onSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea
          cols="30"
          rows="10"
          name="message"
          required
          placeholder="How can we help you?"
        />
        <SubmitButton
          loading={this.state.loading}
          success={this.state.success}
          color="orange"
        />
      </form>
    );
  }
}
