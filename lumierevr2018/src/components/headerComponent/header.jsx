import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import "./header.css";

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
    if (!this.props.coverRevealed) this.props.openLid();
    if (this.state.sidebarOpen) this._toggleSidebar();
  };

  renderNavPills = props => (
    <ul>
      <li>
        <NavLink onClick={this._onNavTabClick} to="/create">
          Create
        </NavLink>
      </li>
      <li>
        <NavLink onClick={this._onNavTabClick} to="/distribute">
          Distribute
        </NavLink>
      </li>
      <li>
        <NavLink onClick={this._onNavTabClick} to="/contact">
          Contacts
        </NavLink>
      </li>
      <li className="last">
        <NavLink onClick={this._onNavTabClick} to="/careers">
          Join
        </NavLink>
      </li>
    </ul>
  );

  render() {
    return (
      <nav>
        <div className="container no-limit">
          <div className="tabs-wrap">
            <Link
              to="/"
              onClick={this._onNavTabClick}
              className={`logo-wrap ${
                !this.props.coverRevealed ? `outside-nav` : ``
              }`}
            >
              <div className="logo">
                <img src={require("../../images/header/logo.png")} />
                <span>Building the future of storytelling.</span>
              </div>
            </Link>

            <div className="nav-pills desktop">{this.renderNavPills()}</div>

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
              {this.renderNavPills()}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
