import React, { Component } from "react";

import "./StudioPage.css";

class StudioPage extends Component {
  render() {
    return (
      <div className="studio-page page">
        <div className="row">
          <div className="six columns card">
            <h3> Make money off your VR Film </h3>
            <p>
              {" "}
              Let’s face it, we’re in this together, VR has no online users
              right now. None of the VR platforms are making any money, but it
              doesn’t have to be this way!
            </p>

            <p>
              {" "}
              We have VR stations disguised as “Mood Pods” that have infiltrated
              office spaces across North America that have been gaining
              popularity as daily Break-Time entertainment amongst stressed
              young professionals. Right now we are offering 60% of Revenue
              Share for content creators that are distributing their content
              through us.
            </p>

            <p>
              {" "}
              If you have great content and think everyday Non-VR-Regular people
              will like it, reach out to us and see how much you can make from
              Views alone! Additionally will also provide you with weekly
              analytics to tell you how your content is doing.
            </p>
          </div>

          <div className="six columns mobile-resize-img">
            <div className="row">
              <div className="five columns" />

              <div className="seven columns right">
                <img src={require("../../images/StudioPage/chair.png")} />
              </div>
            </div>

            <div className="row">
              <div className="seven columns">
                <img src={require("../../images/StudioPage/circle.png")} />
              </div>

              <div className="five columns" />
            </div>
          </div>
        </div>

        <div className="row">
          <img src={require("../../images/StudioPage/data.png")} />
        </div>

        <div className="row">
          <Link to="/thank-you">
            <button type="submit" className="orange">
              Start a dialogue with us!
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default StudioPage;
