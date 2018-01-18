import React from "react";

export default props => {
  return (
    <div className="path-circle">
      <img src={props.backgroundImage} alt="" />
      <div className={`bottom-overlay ${props.active ? `selected` : ``}`}>
        <h5>{props.pathName}</h5>
        <ul>
          {props.titles.map(title => (
            <li
              className={props.titleSelected === title ? `active` : ``}
              onClick={() => props.selectTitle(title)}
              key={title}
            >
              {title}
            </li>
          ))}
        </ul>
        {!!props.active && (
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
};
