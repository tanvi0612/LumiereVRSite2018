import React, { Component } from "react";

import "./Homepage.css";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage page">
        <section className="splash-screen first-section">
          <video
            poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg"
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
              <button>Get Started !</button>
            </div>
          </div>
        </section>
        <section className="victoria-section">
          <div className="container">
            <h2>Space for Victoria's Secret Models</h2>
          </div>
        </section>
        <section className="vr-theatre-section">
          <img
          className='background-img'
          src={require("../../images/HomePage/theater.png")} alt="" />
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
              <button>Learn more!</button>
              <img
                className='retinad-logo'
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
      </div>
    );
  }
}

export default Homepage;
