import React from "react";

export default props => {
  return (
    <div className="path-circle">
      <img src={props.backgroundImage} alt="" />
      <div className={`bottom-overlay ${props.active ? `selected` : ``}`}>
        <h5 
        onClick={() => props.selectTitle(props.title)}>{props.title}</h5>
        
        {!!props.active && (
          <form id="connect-form" onSubmit={props.handleSubmit}>
            <ul>
          {props.secondaryTitles.map(title => (
            <li
              className={props.titleSelected === title ? `active` : ``}
              
              key={title}
            >
              {title}
            </li>
          ))}
        </ul>
            <input type="email" name="email" placeholder="Email" />
            <button type="submit">Sign up</button>
          </form>
        )}
      </div>
    </div>
  );
};
