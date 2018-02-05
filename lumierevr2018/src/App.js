import React, { Component } from "react";
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./styles/default.css";

// Initializing firebase app
import "./firebaseconfig";

// Global components
import Header from "./components/headerComponent/header.jsx";
import Footer from "./components/footerComponent/footer.jsx";
import LandingPage from "./components/LandingPage/LandingPage";

// Pages
import Homepage from "./pages/HomePage/HomePage.jsx";
//import Create from "./pages/CreatePage/CreatePage.jsx";
import Distribute from "./pages/DistributePage/DistributePage.jsx";
import CareerPage from "./pages/CareerPage/CareerPage";
import Connect from "./pages/ConnectPage/ConnectPage";
import StudioPage from "./pages/StudioPage/StudioPage";
import ContactUs from "./pages/ContactUsPage/ContactUsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage/TermsAndConditionsPage";

const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coverRevealed: window.location.pathname !== "/"
    };
  }

  componentDidMount() {
    if (!this.state.coverRevealed) this.scrollToOpenListener();
  }

  scrollToOpenListener = () => {
    let lastScrollPosition = window.scrollY;
    const parent = this;

    window.addEventListener("scroll", action);

    function action() {
      if (window.scrollY - lastScrollPosition > 5) {
        console.log(window.scrollY, lastScrollPosition);
        parent._openLid();
        window.removeEventListener("scroll", action);
      }
      lastScrollPosition = window.scrollY;
    }
  };

  _openLid = () => this.setState({ coverRevealed: true });

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Header
            coverRevealed={this.state.coverRevealed}
            openLid={this._openLid}
            history={history}
          />

          <LandingPage
            coverRevealed={this.state.coverRevealed}
            openLid={this._openLid}
          />

          <div className="content-wrap">
            <Route exact path="/" component={Homepage} />

            <Route exact path="/start" component={Connect} />
            <Route exact path="/start/studio" component={StudioPage} />

            <Route exact path="/contact" component={ContactUs} />
            <Route exact path="/theatre" component={Distribute} />
            <Route
              exact
              path="/TermsAndConditions"
              component={TermsAndConditionsPage}
            />
            <Route exact path="/PrivacyPolicy" component={PrivacyPolicyPage} />
            <Route exact path="/join" component={CareerPage} />
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
