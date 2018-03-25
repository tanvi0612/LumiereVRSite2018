import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import "./header.css";

export const renderNavPills = tabClickHandle => (
  <ul>
    <li>
      <NavLink onClick={tabClickHandle} to="/start">
        Start
      </NavLink>
    </li>
    <li>
      <a href="https://www.vrscreenings.com/"> Theatre
      </a>
    </li>
    <li>
      <NavLink onClick={tabClickHandle} to="/contact">
        Contact
      </NavLink>
    </li>
    <li>
      <NavLink onClick={tabClickHandle} to="/join">
        Join
      </NavLink>
    </li>
    <li className="last">
      <a href="https://medium.com/lumierevr">Blog</a>
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

  _onNavTabClick = () => {
    // resetting scroll
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    if (!this.props.coverRevealed) this.props.openLid();
    if (this.state.sidebarOpen) this._toggleSidebar();
  };

  render() {
    return (
      <nav className={!this.props.coverRevealed ? `outside-nav` : ``}>
        <div className="container no-limit">
          <div className="tabs-wrap">
            <Link to="/" onClick={this._onNavTabClick} className={`logo-wrap`}>
              <div className="logo">
                <img src={require("../../images/header/logo.png")} />
                <span>Building the future of storytelling.</span>
              </div>
            </Link>

            <div className="nav-pills desktop">
              {renderNavPills(this.props._onNavTabClick)}
            </div>

            <div className="sidebar-trigger-wrap">
              <div
                className={`sidebar-trigger ${
                  this.state.sidebarOpen ? `opened` : ``
                }`}
                onClick={this._toggleSidebar}
              >
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
              </div>
            </div>
            <div
              className={`side-bar ${this.state.sidebarOpen ? `opened` : ``}`}
            >
              {renderNavPills(this._onNavTabClick)}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
