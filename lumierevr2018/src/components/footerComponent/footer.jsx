import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container no-limit">
          <div className="footer-row">
            <ul className="footer-col">
              <li>
                <a href="/">Join Us</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Terms and Conditions</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
            <ul className="footer-col">
              <li>
                <a href="/">Press Kit</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
            <div className="spread-between" />
            <div className="footer-col social-links">
              <h6>Follow Us!</h6>
              <img src={require("../../images/footer/twitter.png")} />
              <img src={require("../../images/footer/fb.png")} />
              <img src={require("../../images/footer/yt.png")} />
            </div>
          </div>
          <div className="copyright-line">
            Copywright © {new Date().getFullYear()} LumiereVR Co All rights
            reserved
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
