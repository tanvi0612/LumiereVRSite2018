import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

export default () => {
  return (
    <nav>
      <Link to="/" className="logo">
        <img src={require("../../images/header/logo.png")} />
      </Link>

      <div className="nav-pills">
        <ul>
          <li className="first">
            <Link to="/"> Create </Link>
          </li>
          <li>
            <Link to="/distribute"> Distribute </Link>
          </li>
          <li>
            <Link to="/">Contacts</Link>
          </li>
          <li className="last">
            <Link to="/">Join</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
