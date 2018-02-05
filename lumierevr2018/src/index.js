import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import ReactGA from "react-ga";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

// Integrating Google Analytics
ReactGA.initialize("UA-113561379-1");
ReactGA.pageview(window.location.pathname + window.location.search);
