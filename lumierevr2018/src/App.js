import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./assets/scss/default.css";

// Global components
import Header from "./components/headerComponent/header.jsx";
import Footer from "./components/footerComponent/footer.jsx";

// Pages
import Homepage from "./pages/homePage";
import Distribute from "./pages/DistributePage/DistributePage";
import CareerPage from "./pages/CareerPage/CareerPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <div className="content-wrap">
            <Route exact path="/" component={Homepage} />
            <Route exact path="/distribute" component={Distribute} />
            <Route exact path="/careers" component={CareerPage} />
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
