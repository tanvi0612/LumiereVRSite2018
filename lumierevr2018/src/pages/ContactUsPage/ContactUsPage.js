import React, { Component } from "react";
import SendRavenFor from "../../components/SendRaven";

import "./ContactUsPage.css";

class ContactUs extends Component {
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
      await SendRavenFor("contact-us", data);
      document.getElementById("contact-us-form").reset();
    } catch (e) {
      console.error(e);
      alert(
        "There seems to be a problem with your network.😦 Please try again in some time"
      );
    }
  };
  render() {
    return (
      <div className="contactUs-page page">
        <div className="container">
          <div className="first-section">
            <h1>Find Us!</h1>
          </div>
          <ul className="address-grid">
            <li>
              <a href="https://www.google.ca/maps/place/9966+Shen+Nan+Da+Dao,+Nanshan+Qu,+Shenzhen+Shi,+Guangdong+Sheng,+China,+518057/@22.540785,113.9381503,17z/data=!3m1!4b1!4m5!3m4!1s0x3403ee08b5eb736f:0x694f6d5fc84ede24!8m2!3d22.540785!4d113.940339">
                <img
                  src={require("../../images/HomePage/shenzhenMap.png")}
                  alt=""
                />
              </a>
              <h5>ShenZhen, China</h5>
            </li>
            <li>
              <a href="https://www.google.ca/maps/place/590+York+St,+San+Francisco,+CA+94110,+USA/@37.7620241,-122.411652,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7e3122dfe545:0xf6d9eab7cf02f35!8m2!3d37.7620241!4d-122.4094633">
                <img src={require("../../images/HomePage/sfMap.png")} alt="" />
              </a>
              <h5>San Francisco, USA</h5>
            </li>
            <li>
              <a href="https://www.google.ca/maps/place/240+Richmond+St+W,+Toronto,+ON+M5V+2C5/@43.6496316,-79.3911029,17z/data=!3m1!4b1!4m5!3m4!1s0x882b34d02b02b753:0xf883dcb498153b46!8m2!3d43.6496316!4d-79.3889142">
                <img
                  src={require("../../images/HomePage/TorontoMap.png")}
                  alt=""
                />
              </a>
              <h5>Toronto, Canada</h5>
            </li>
          </ul>
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
            <button type="submit" className="orange">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactUs;
