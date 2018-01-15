import React, { Component } from "react";

import "./Homepage.css";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage page">
        <section className="splash-screen">
          <div className="container">
            <div className="four columns">
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
      </div>
    );
  }
}

export default Homepage;
