import React, { Component } from "react";
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./styles/default.css";

// Global components
import Header from "./components/headerComponent/header.jsx";
import Footer from "./components/footerComponent/footer.jsx";
import LandingPage from "./components/LandingPage/LandingPage";

// Pages
import Homepage from "./pages/HomePage/HomePage.jsx";
import Create from "./pages/CreatePage/CreatePage";
import Distribute from "./pages/DistributePage/DistributePage";
import CareerPage from "./pages/CareerPage/CareerPage";

const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coverRevealed: false
    };
  }

  _openLid = () => this.setState({ coverRevealed: true });

  render() {
    return (
      <Router history={history}>
        <div
          className={`App ${!this.state.coverRevealed ? `scroll-lock` : ``}`}
        >
          <Header
            coverRevealed={this.state.coverRevealed}
            openLid={this._openLid}
            history={history}
          />

          <LandingPage
            coverRevealed={this.state.coverRevealed}
            openLid={this._openLid}
          />

          {this.state.coverRevealed && (
            <div className="content-wrap">
              <Route exact path="/create" component={Create} />
              <Route exact path="/distribute" component={Distribute} />
              <Route exact path="/" component={Homepage} />
              <Route exact path="/careers" component={CareerPage} />
            </div>
          )}

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
