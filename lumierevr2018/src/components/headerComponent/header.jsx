import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./header.css";

const renderNavPills = () => (
  <ul>
    <li>
      <Link to="/create"> Create </Link>
    </li>
    <li>
      <Link to="/distribute"> Distribute </Link>
    </li>
    <li>
      <Link to="/">Contacts</Link>
    </li>
    <li className="last">
      <Link to="/careers">Join</Link>
    </li>
  </ul>
);

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    };
  }

  _toggleSidebar = () =>
    this.setState({ sidebarOpen: !this.state.sidebarOpen });

  render() {
    return (
      <nav>
        <div className="container no-limit">
          <div className="tabs-wrap">
            <Link to="/" className="logo">
              <img src={require("../../images/header/LogoForNav.png")} />
            </Link>

            <div className="nav-pills desktop">{renderNavPills()}</div>

            <div
            className={`sidebar-trigger ${this.state.sidebarOpen ? `opened` : ``}`}
             onClick={this._toggleSidebar}>
              <div className="bar" />
              <div className="bar" />
              <div className="bar" />
            </div>

            <div
              className={`side-bar ${this.state.sidebarOpen ? `opened` : ``}`}
            >
              {renderNavPills()}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
