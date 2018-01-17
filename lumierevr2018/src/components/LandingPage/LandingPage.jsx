import React from "react";

export default props => {
  return (
    <div className={`landing-page ${props.coverRevealed ? `revealed` : ``}`} onClick={props.openLid}>
      <h2>This is the cover</h2>
    </div>
  );
};
