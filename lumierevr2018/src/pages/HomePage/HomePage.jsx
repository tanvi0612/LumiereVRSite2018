import React, { Component } from "react";
import moment from "moment";

// importing kaleidoscopejs
import * as Kaleidoscope from "kaleidoscopejs";
import CountdownClock from "../../components/CountdownClock/CountdownClock";
import ContactUsForm from '../ContactUsPage/ContactForm'
import "./Homepage.css";


class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    var viewer = new Kaleidoscope.Video({
      source: require("../../images/HomePage/OldMan.mp4"),
      containerId: "#video-wrap",
      autoplay: true,
      loop: true,
      muted: true
    });
    viewer.render();
  };

  _openLid = () => this.setState({ coverRevealed: true });

  render() {
    return (
      <div className="homepage page">
        <section className="splash-screen first-section">
          <div id="video-wrap" />
          <div className="container">
            <div className="five columns text-wrap">
              <h3>Create Immersive Experience</h3>
              <p>
                As the medium for the content continue to evolve, Virtual Realty
                has become the people's choice for immersion
              </p>
              <p>
                LumiereVR's pipeline for the creation and distribution will help
                realize your brand's potential to engage your audience
                emotionally.
              </p>
              <button className="blue">
                <a href="/create">Get Started</a>
              </button>
            </div>
          </div>
        </section>
        <section className="victoria-section">
          <div className="timer-wrap">
            <h2>Coming Soon !</h2>
            <CountdownClock endDate={moment("2018-02-14")} />
          </div>
        </section>
        <section className="vr-theatre-section">
          <img
            className="background-img"
            src={require("../../images/HomePage/theater.png")}
            alt=""
          />
          <div className="details">
            <div className="container">
              <h4>VR Theatre Solution</h4>
              <p>
                You have great content!<br />
                You know people will adore it!
              </p>
              <p>
                Let us help you put in front of people with out tailored VR
                Theatres.
              </p>
              <p>
                See how creators and brands have used our systems to get
                traction and even revenue !
              </p>
              <button className="purple">
                <a href="/distribute">Learn more</a>
              </button>
              <img
                className="retinad-logo"
                src={require("../../images/HomePage/poweredbyRetinad.png")}
                alt=""
              />
            </div>
          </div>
          <img
            className="tablet-img"
            src={require("../../images/HomePage/tablet.png")}
            alt=""
          />
        </section>
        <section className="find-us-section">
          <div className="container">
            <h4>Find Us!</h4>
            <ul className="address-grid">
              <li>
                <a href="https://www.google.ca/maps/place/9966+Shen+Nan+Da+Dao,+Nanshan+Qu,+Shenzhen+Shi,+Guangdong+Sheng,+China,+518057/@22.540785,113.9381503,17z/data=!3m1!4b1!4m5!3m4!1s0x3403ee08b5eb736f:0x694f6d5fc84ede24!8m2!3d22.540785!4d113.940339">
                  <img
                    src={require("../../images/HomePage/shenzhenMap.png")}
                    alt=""
                  />
                </a>
                <h5>ShenZhen, China</h5>
              </li>
              <li>
                <a href="https://www.google.ca/maps/place/590+York+St,+San+Francisco,+CA+94110,+USA/@37.7620241,-122.411652,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7e3122dfe545:0xf6d9eab7cf02f35!8m2!3d37.7620241!4d-122.4094633">
                  <img
                    src={require("../../images/HomePage/sfMap.png")}
                    alt=""
                  />
                </a>
                <h5>San Francisco, USA</h5>
              </li>
              <li>
                <a href="https://www.google.ca/maps/place/240+Richmond+St+W,+Toronto,+ON+M5V+2C5/@43.6496316,-79.3911029,17z/data=!3m1!4b1!4m5!3m4!1s0x882b34d02b02b753:0xf883dcb498153b46!8m2!3d43.6496316!4d-79.3889142">
                  <img
                    src={require("../../images/HomePage/TorontoMap.png")}
                    alt=""
                  />
                </a>
                <h5>Toronto, Canada</h5>
              </li>
            </ul>
            <ContactUsForm />
          </div>
        </section>
      </div>
    );
  }
}

export default Homepage;
