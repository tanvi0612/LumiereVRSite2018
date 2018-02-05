import React, { Component } from "react";
import PathCircleComponent from "./components/PathCircleComponent";
import SendRavenFor from "../../components/SendRaven";

import "./ConnectPage.css";

const JobCircles = [
  {
    title: "Brands/Advertising",
    secondaryTitles: ["Placements", "Injections", "Sponsorships"],
    backgroundImage: require("../../images/ConnectPage/BrandBG.png"),
    targetAfterSubmit: "brand"
  },
  {
    title: "Studio/Artists",
    secondaryTitles: ["Film Studios", "IP Owner", "VR Studio"],
    backgroundImage: require("../../images/ConnectPage/StudioBG.png"),
    targetAfterSubmit: "studio"
  }
];
export default class Connect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleSelected: null,
      loading: false,
      success: false
    };
  }

  _handleSubmit = async (e, targetAfterSubmit) => {
    e.preventDefault();

    // data that needed to be added
    let data = {
      title: this.state.titleSelected
    };

    // Targeting all input and converting them into an array
    const inputs = Array.apply(
      null,
      document.querySelectorAll("#career-form input, #career-form textarea")
    );

    // Grabing values from those input elements
    inputs.forEach(input => (data[input.name] = input.value));

    try {
      this.setState({ loading: true, success: false });
      await SendRavenFor("connect", data);
      await this.setState({
        loading: false,
        success: true,
        titleSelected: null
      });

      this.props.history.push(`/start/${targetAfterSubmit}`);
      // alert(
      //   "Thanks for contacting us. We will get back to you as soon as possible"
      // );
    } catch (e) {
      console.error(e);
    }
  };

  _selectTitle = title =>
    title !== this.state.titleSelected
      ? this.setState({ titleSelected: title })
      : this.setState({ titleSelected: false });

  render() {
    return (
      <div className="connect-page page first-section">
        <div className="container">
          <h2>Choose Your Side!</h2>
          <h4> We have created strategies for all your needs </h4>
          <div className="path-container">
            {JobCircles.map((path, i) => (
              <PathCircleComponent
                key={i}
                handleSubmit={this._handleSubmit}
                selectTitle={this._selectTitle}
                titleSelected={this.state.titleSelected}
                active={path.title === this.state.titleSelected}
                {...path}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
