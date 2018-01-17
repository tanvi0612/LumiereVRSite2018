import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container no-limit">
          <div className="footer-row">
            <ul className="footer-col">
              <li>
                <NavLink to="/careers">Join Us</NavLink>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <NavLink to="/TermsAndConditions">Terms and Conditions</NavLink>
              </li>
              <li>
                <NavLink to="/PrivacyPolicy">Privacy Policy</NavLink>
              </li>
            </ul>
            <ul className="footer-col">
              <li>
                <a href="/">Press Kit</a>
              </li>
              <li>
                <a href="https://medium.com/@traviswu">Blog</a>
              </li>
            </ul>
            <div className="spread-between" />
            <div className="footer-col social-links">
              <h6>Follow Us!</h6>
              <div className="social-links-images">
                <a href="https://twitter.com/LumiereVR">
                  <img src={require("../../images/footer/twitter.png")} />
                </a>
                <a href="https://www.facebook.com/lumierevr/">
                  <img src={require("../../images/footer/fb.png")} />
                </a>
                <a href="https://www.youtube.com/channel/UCDxlErZDH-9cavI6Kp6sf5A">
                  <img src={require("../../images/footer/yt.png")} />
                </a>
              </div>
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
