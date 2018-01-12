import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./assets/scss/default.css";

import Header from "./components/headerComponent/header.jsx";
import Homepage from "./pages/homePage";
import Distribute from "./pages/DistributePage/DistributePage";
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
