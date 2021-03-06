import React, { Component } from "react";
import PathCircleComponent from "./components/PathCircleComponent";
import SendRavenFor from "../../components/SendRaven";

import "./CareerPage.css";

const JobCircles = [
  {
    pathName: "Film",
    titles: ["Producer", "Director", "VFX/CGI"],
    backgroundImage: require("../../images/CareerPage/FilmBG.png"),
    additionalLinkHints: `IMDb/Linkedin`
  },
  {
    pathName: "Tech",
    titles: ["Unity", "React", "Maya"],
    backgroundImage: require("../../images/CareerPage/TechBG.png"),
    additionalLinkHints: `Github/Linkedin`
  }
];
export default class CareerPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleSelected: null,
      loading: false,
      success: false
    };
  }

  _handleSubmit = async e => {
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
      await SendRavenFor("joining-appliations", data);
      await this.setState({
        loading: false,
        success: true,
        titleSelected: null
      });
      alert(
        "Thanks for contacting us. We will get back to you as soon as possible"
      );
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
      <div className="career-page page first-section">
        <div className="container">
          <h3>Choose Your Path</h3>
          <div className="path-container">
            {JobCircles.map((path, i) => (
              <PathCircleComponent
                key={i}
                handleSubmit={this._handleSubmit}
                selectTitle={this._selectTitle}
                titleSelected={this.state.titleSelected}
                active={path.titles.indexOf(this.state.titleSelected) > -1}
                {...path}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
