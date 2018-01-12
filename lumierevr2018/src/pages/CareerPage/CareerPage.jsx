import React, { Component } from "react";
import PathCircleComponent from "./components/PathCircleComponent";

import "./CareerPage.css";

export default class CareerPage extends Component {
  _handleSubmit = () => {};
  render() {
    return (
      <div className="career-page page">
        <div className="container">
          <h3>Choose Your Path</h3>
          <div className="path-container">
            <PathCircleComponent
              pathName="Film"
              titles={["Producer", "Director", "VFX/CGI"]}
              backgroundImage={require("../../images/CareerPage/FilmBG.png")}
            />
            <PathCircleComponent
              pathName="Tech"
              titles={["Unity", "React", "Maya"]}
              backgroundImage={require("../../images/CareerPage/TechBG.png")}
            />
          </div>
        </div>
      </div>
    );
  }
}
