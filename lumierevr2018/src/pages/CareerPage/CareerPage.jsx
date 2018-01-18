import React, { Component } from "react";
import PathCircleComponent from "./components/PathCircleComponent";

import "./CareerPage.css";

const JobCircles = [
  {
    pathName: "Film",
    titles: ["Producer", "Director", "VFX/CGI"],
    backgroundImage: require("../../images/CareerPage/FilmBG.png")
  },
  {
    pathName: "Tech",
    titles: ["Unity", "React", "Maya"],
    backgroundImage: require("../../images/CareerPage/TechBG.png")
  }
];
export default class CareerPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleSelected: null
    };
  }

  _selectTitle = title =>
    title !== this.state.titleSelected
      ? this.setState({ titleSelected: title })
      : this.setState({ titleSelected: false });

  _handleSubmit = () => {};
  render() {
    return (
      <div className="career-page page first-section">
        <div className="container">
          <h3>Choose Your Path</h3>
          <div className="path-container">
            {JobCircles.map((path, i) => (
              <PathCircleComponent
                key={i}
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
