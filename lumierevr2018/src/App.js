import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./assets/css/default.min.css";

import Header from "./components/headerComponent/header.jsx";
import Homepage from "./pages/homePage";
import Distribute from "./pages/distribute";
import Footer from "./components/footerComponent/footer.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <div className="content-wrap">
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Distribute" component={Distribute} />
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
