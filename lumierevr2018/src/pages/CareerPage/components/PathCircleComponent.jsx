import React from "react";
import { Link } from "react-router-dom";

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
          <form id="career-form" onSubmit={props.handleSubmit}>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input
              type="text"
              name="profile"
              placeholder={props.additionalLinkHints || `IMDb/LinkedIn`}
            />
            <Link to="/thank-you">
              <button type="submit">Apply Now</button>
            </Link>
          </form>
        )}
      </div>
    </div>
  );
};
