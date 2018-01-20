import React, { Component } from "react";
import SendRavenFor from "../../components/SendRaven";

import "./CreatePage.css";

class Create extends Component {
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
    const inputs = Array.apply(null, document.querySelectorAll(" .grab-data"));

    // Grabing values from those input elements
    inputs.forEach(input => (data[input.name] = input.value));

    try {
      this.setState({ loading: true, success: false });
      await SendRavenFor("create-with-us", data);
      this.setState({ loading: false, success: true });
      document.getElementById("create-with-us-form").reset();
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
      <div className="create-page page">
        <div className="container">
          <form id="create-with-us-form" onSubmit={this._handleSubmit}>
            <div className="first-section">
              <img
                className="image-header"
                src={require("../../images/CreatePage/CreateWithUs.png")}
              />
            </div>

            <div className="row head-image-grid">
              <div className="one-third column card">
                <img
                  src={require("../../images/CreatePage/PreProductionIcon.png")}
                />
                <strong>Pre Production</strong>
                <span>2-3 weeks</span>
              </div>

              <div className="one-third column card">
                <img
                  src={require("../../images/CreatePage/ProductionIcon.png")}
                />
                <strong>Production</strong>
                <span>1 week</span>
              </div>

              <div className="one-third column card">
                <img
                  src={require("../../images/CreatePage/PostProductionIcon.png")}
                />
                <strong>Post Production</strong>
                <span>3-6 weeks</span>
              </div>
            </div>

            <hr />

            <img
              className="image-header"
              src={require("../../images/CreatePage/PreProductionTitle.png")}
            />

            <div className="row">
              <div className="one column" />
              <div className="two columns">
                <img
                  className="side-image"
                  src={require("../../images/CreatePage/gazeboard.png")}
                />
              </div>

              <div className="seven columns">
                <p>
                  In pre-production we work very closely with our clients to
                  take their concept, however simple or robust, and turn it into
                  a VR ready storyboard.
                </p>

                <p>
                  Here we will take into account the attention of the eventual
                  viewer, the emotional state each shot should convey, as well
                  as brand/product placement
                </p>
                <textarea
                  rows="8"
                  className="u-full-width textareacontainer"
                  className="grab-data"
                  name="textAreaOne"
                  placeholder="Tell us a little about yourself or your brand and what you want to create"
                  id="textAreaOne"
                />
              </div>
            </div>

            <img
              className="image-header"
              src={require("../../images/CreatePage/ProductionTitle.png")}
            />

            <div className="row">
              <div className="one column" />
              <div className="two columns">
                <img
                  className="side-image"
                  src={require("../../images/CreatePage/cameras.png")}
                />
              </div>

              <div className="preProductionContent seven columns">
                <p>
                  Once everything is ready to go we will put together a team and
                  crew to execute and follow with the production as planned.
                </p>

                <p>
                  Here’s where the magic happens, our hollywood trained
                  directors and creatives are propelled by our mastery of cross
                  border production by shifting the heavy lifting to China. We
                  effectively give you the best brains in the industry along
                  with a labor force paralelle to any blockbuster at a fraction
                  of the cost.
                </p>
                <textarea
                  rows="8"
                  className="grab-data"
                  name="textAreaTwo"
                  placeholder="Have you or your brand done any 360/VR productions in the past, if so what were they and what hardware setup did you use?"
                  id="textAreaTwo"
                />
              </div>
            </div>

            <img
              className="image-header"
              src={require("../../images/CreatePage/PostTitle.png")}
            />

            <div className="row">
              <div className="one column" />
              <div className="two columns">
                <p> </p>
              </div>

              <div className="preProductionContent seven columns">
                <img src={require("../../images/CreatePage/FlowImage.png")} />

                <p>
                  We will work very closely step by step throughout
                  post-production ensuring the final result will be nothing less
                  of spectacular.
                </p>

                <textarea
                  rows="8"
                  className="grab-data"
                  name="textAreaThree"
                  placeholder="If you have ideas beyond pure 360 production (e.g. extensive CG + VFX) let us know here, we will tailor a pipeline to you"
                  id="textAreaThree"
                />

                <p>
                  Thank you for your time, we'll get back to you with a proposal
                  ASAP!
                </p>

                <input
                  className="u-full-width"
                  type="email"
                  name="email"
                  className="grab-data"
                  placeholder="Email"
                  id="email"
                />
              </div>
            </div>

            <button type="submit" className="orange">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Create;
