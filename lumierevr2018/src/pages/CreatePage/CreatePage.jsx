import React, { Component } from "react";

import "./CreatePage.css";

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textAreaOne: "",
      textAreaTwo: "",
      textAreaThree: "",
      email: ""
    };
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      textAreaOne: "",
      textAreaTwo: "",
      textAreaThree: "",
      email: ""
    });
  };

  render() {
    return (
      <div className="create-page page">
        <form name="create-with-us-form" onSubmit={this.onSubmit}>
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
              <img src={require("../../images/CreatePage/gazeboard.png")} />
            </div>

            <div className="seven columns">
              <p>
                In pre-production we work very closely with our clients to take
                their concept, however simple or robust, and turn it into a VR
                ready storyboard.
              </p>

              <p>
                Here we will take into account the attention of the eventual
                viewer, the emotional state each shot should convey, as well as
                brand/product placement
              </p>
              <textarea
                rows="8"
                className="u-full-width textareacontainer"
                name="textAreaOne"
                placeholder="Tell us a little about yourself or your brand and what you want to create"
                id="textAreaOne"
                value={this.state.textAreaOne}
                onChange={this.change}
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
              <img src={require("../../images/CreatePage/cameras.png")} />
            </div>

            <div className="preProductionContent seven columns">
              <p>
                Once everything is ready to go we will put together a team and
                crew to execute and follow with the production as planned.
              </p>

              <p>
                Here’s where the magic happens, our hollywood trained directors
                and creatives are propelled by our mastery of cross border
                production by shifting the heavy lifting to China. We
                effectively give you the best brains in the industry along with
                a labor force paralelle to any blockbuster at a fraction of the
                cost.
              </p>
              <textarea
                rows="8"
                className="u-full-width textareacontainer"
                name="textAreaTwo"
                placeholder="Have you or your brand done any 360/VR productions in the past, if so what were they and what hardware setup did you use?"
                id="textAreaTwo"
                value={this.state.textAreaTwo}
                onChange={this.change}
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
                className="u-full-width textareacontainer"
                name="textAreaThree"
                placeholder="If you have ideas beyond pure 360 production (e.g. extensive CG + VFX) let us know here, we will tailor a pipeline to you"
                id="textAreaThree"
                value={this.state.textAreaThree}
                onChange={this.change}
              />

              <p>
                Thank you for your time, we'll get back to you with a proposal
                ASAP!
              </p>

              <input
                className="u-full-width"
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                value={this.state.email}
                onChange={this.change}
              />
            </div>
          </div>

          <button type="submit" className="orange">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default Create;
