import React from "react";
import { Link } from "react-router-dom";

const renderNavPills = onNavTabClick => (
  <ul className="landing-tabs">
    <li>
      <Link onClick={onNavTabClick} to="/create">
        Create
      </Link>
    </li>
    <li>
      <Link onClick={onNavTabClick} to="/distribute">
        Distribute
      </Link>
    </li>
    <li>
      <Link onClick={onNavTabClick} to="/contact">
        Contacts
      </Link>
    </li>
    <li className="last">
      <Link onClick={onNavTabClick} to="/careers">
        Join
      </Link>
    </li>
  </ul>
);

export default props => {
  return (
    <div
      className={`landing-page ${props.coverRevealed ? `revealed` : ``}`}
      onClick={props.openLid}
    >
      <div className="landing-content overlay">
        {renderNavPills(props.onNavTabClick)}
      </div>
      <img className='down-arrow' src={require("./chevron-down.svg")} alt="" />
    </div>
  );
};
