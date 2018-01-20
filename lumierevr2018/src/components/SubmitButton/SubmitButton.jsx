import React from "react";
import spinner from "./spinner.svg";

import "./SubmitButton.css";

export default props => {
  return (
    <button
      type="submit"
      className={`submit-btn ${!!props.color && props.color}`}
    >
      <span className={!props.loading && !props.success ? `active` : ``}>
        {props.buttonText || `Send`}
      </span>
      <span className={props.success ? `active` : ``}>🎉 Success</span>
      <img
        className={props.loading && !props.success ? `active` : ``}
        src={spinner}
        alt=""
      />
    </button>
  );
};
