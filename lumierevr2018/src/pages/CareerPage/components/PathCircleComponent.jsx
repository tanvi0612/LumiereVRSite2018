import React, { Component } from "react";

export default class PathCircleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleSelected: true
    };
  }

  _selectTitle = title =>
    title !== this.state.titleSelected
      ? this.setState({ titleSelected: title })
      : this.setState({ titleSelected: false });

  _handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="path-circle">
        <img src={this.props.backgroundImage} alt="" />
        <div
          className={`bottom-overlay ${this.state.titleSelected
            ? `selected`
            : ``}`}
        >
          <h5>{this.props.pathName}</h5>
          <ul>
            {this.props.titles.map(title => (
              <li
                className={this.state.titleSelected === title ? `active` : ``}
                onClick={() => this._selectTitle(title)}
                key={title}
              >
                {title}
              </li>
            ))}
          </ul>
          {!!this.state.titleSelected && (
            <form className="contact-form" onSubmit={this._handleSubmit}>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="IMDb/LinkedIn" />
              <button type="submit">Apply Now</button>
            </form>
          )}
        </div>
      </div>
    );
  }
}
