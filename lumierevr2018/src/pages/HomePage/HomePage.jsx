import React, { Component } from "react";
import moment from "moment";

import CountdownClock from "../../components/CountdownClock/CountdownClock";

import "./Homepage.css";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage page">
        <section className="splash-screen first-section">
          <video
            poster={require("../../images/HomePage/poster.png")}
            id="bgvid"
            playsInline
            autoPlay
            muted
            loop
          >
            <source
              src={require("../../images/HomePage/OldMan.mp4")}
              type="video/mp4"
            />
          </video>
          <div className="container">
            <div className="five columns text-wrap">
              <h3>Create Immersive Experience</h3>
              <p>
                As the medium for the content continue to evolve, Virtual Realty
                has become the people's choice for immersion
              </p>
              <p>
                LumiereVR's pipeline for the creation and distribution will help
                realize your brand's potential to engage your audience
                emotionally.
              </p>
              <button className="blue">Get Started</button>
            </div>
          </div>
        </section>
        <section className="victoria-section">
          <div className='timer-wrap'>
            <h2>Coming Soon !</h2>
            <CountdownClock endDate={moment("2018-02-14")} />
          </div>
        </section>
        <section className="vr-theatre-section">
          <img
            className="background-img"
            src={require("../../images/HomePage/theater.png")}
            alt=""
          />
          <div className="details">
            <div className="container">
              <h4>VR Theatre Solution</h4>
              <p>
                You have great content!<br />
                You know people will adore it!
              </p>
              <p>
                Let us help you put in front of people with out tailored VR
                Theatres.
              </p>
              <p>
                See how creators and brands have used our systems to get
                traction and even revenue !
              </p>
              <button className="purple">Learn more</button>
              <img
                className="retinad-logo"
                src={require("../../images/HomePage/poweredbyRetinad.png")}
                alt=""
              />
            </div>
          </div>
          <img
            className="tablet-img"
            src={require("../../images/HomePage/tablet.png")}
            alt=""
          />
        </section>
        <section className="find-us-section">
          <div className="container">
            <h4>VR Theatre Solution</h4>
            <ul className="address-grid">
              <li>
                <img
                  src={require("../../images/HomePage/shenzhenMap.png")}
                  alt=""
                />
                <h5>ShenZhen, China</h5>
              </li>
              <li>
                <img src={require("../../images/HomePage/sfMap.png")} alt="" />
                <h5>San Francisco, USA</h5>
              </li>
              <li>
                <img
                  src={require("../../images/HomePage/TorontoMap.png")}
                  alt=""
                />
                <h5>Toronto, Canada</h5>
              </li>
            </ul>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea
                cols="30"
                rows="10"
                placeholder="How can we help you?"
              />
              <button type="submit" className="orange">
                Send
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Homepage;
