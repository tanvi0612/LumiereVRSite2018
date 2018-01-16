import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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

  renderNavPills = props => (
    <ul>
      <li>
        <NavLink onClick={this.props.openLid} to="/create">
          Create
        </NavLink>
      </li>
      <li>
        <NavLink onClick={this.props.openLid} to="/distribute">
          Distribute
        </NavLink>
      </li>
      <li>
        <NavLink onClick={this.props.openLid} to="/contracts">
          Contacts
        </NavLink>
      </li>
      <li className="last">
        <NavLink onClick={this.props.openLid} to="/careers">
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
            <NavLink
              to="/"
              onClick={this.props.openLid}
              className={`logo-wrap ${!this.props.coverRevealed
                ? `outside-nav`
                : ``}`}
            >
              <div className="logo">
                <img src={require("../../images/header/LogoForNav.png")} />
                <span>Building the future of storytelling.</span>
              </div>
            </NavLink>

            <div className="nav-pills desktop">{this.renderNavPills()}</div>

            <div className="sidebar-trigger-wrap">
              <div
                className={`sidebar-trigger ${this.state.sidebarOpen
                  ? `opened`
                  : ``}`}
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
