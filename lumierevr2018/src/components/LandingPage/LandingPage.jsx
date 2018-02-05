import React from "react";
import { Link } from "react-router-dom";
import { renderNavPills } from "../headerComponent/header";

export default props => {
  return (
    <div
      className={`landing-page ${props.coverRevealed ? `revealed` : ``}`}
      onClick={props.openLid}
    >
      <div className="landing-content overlay">
        {renderNavPills(props.onNavTabClick)}
      </div>
      <img className="down-arrow" src={require("./chevron-down.svg")} alt="" />
    </div>
  );
};
