import React, { Component } from "react";

import "./DistributePage.css";

class Distribute extends Component {
  render() {
    return (
      <div className="distribute-page page">
        <section className="first-section">
          <div className="header">
            <div className="container no-limits">
              <h1 align="center">Cinematic VR Case Studies</h1>
              <p align="center">
                Here are some case studies LumiereVR has undertaken involving
                the use of stand alone headsets and custom software systems.
              </p>
            </div>
          </div>
        </section>

        <hr />
        <div className="case-wrap">
          <div className="container">
            <h2>Case 1</h2>
            <h1 className="italics">Virtual Reality Microtheaters</h1>
            <div className="row">
              <div className="six columns">
                <img
                  id="Case1TheaterRender"
                  className="colImg"
                  src={require("../../images/theaters/Case1TheaterRender.png")}
                />

                <img
                  id="Case1TheaterDemo"
                  className="colImg"
                  src={require("../../images/theaters/Case1TheaterDemo.png")}
                />
              </div>
              <div className="six columns">
                <p>
                  Partnering with the creators of The Click Effect as well as
                  Zoos, Aquariums, and Museums we use a syncronized system of
                  stand alone head-sets controlled by a master Tablet
                </p>
                <p>
                  Theaters are usually fairly portable, they come with
                  collapsible walls and ambient light, along with N number of
                  swivel chairs.
                </p>
                <p>
                  Headset system running continuously at 15 minutes per interval
                  lasts 7 hours a day +- 30 minutes.
                </p>
                <p>
                  Standard micro-usb charging towers ensure headsets are fully
                  charged at night and ready to run in the morning.
                </p>
                <p>
                  On the left is an installment we’ve built for Prairie Fire in
                  Kansas City.
                </p>
                <p>
                  On the bottom is complementary analysis of both performance
                  and behaviour from headtracking heatmaps powered by Retinad.
                </p>
                <p>
                  Email{" "}
                  <a href="mailto:theaters@lumierevr.com">
                    {" "}
                    theaters@lumierevr.com{" "}
                  </a>{" "}
                  to learn how you and your brand can benifit from offline
                  location-based VR distribution systems.
                </p>
              </div>
            </div>

            <div className="case1TheaterBottomWrapperDiv">
              <div className="case1TheaterBottomLeftDiv">
                <img
                  id="Case1Heatmap"
                  className="rowImg"
                  src={require("../../images/theaters/Case1Heatmap.png")}
                />
              </div>
              <div className="case1TheaterBottomRightDiv">
                <img
                  id="Case1Graph"
                  className="rowImg"
                  src={require("../../images/theaters/Case1Graph.png")}
                />
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="case-wrap">
          <div className="container ">
            <h2>Case 2</h2>

            <h1 className="italics">Festival/Conference Pop-Up VR</h1>

            <div className="row">
              <div className="six columns">
                <img
                  className="colImg"
                  src={require("../../images/theaters/Case2TheaterDemo.png")}
                />
                <img
                  className="colImg"
                  src={require("../../images/theaters/Case2Setup.png")}
                />
              </div>

              <div className="six columns">
                <p>
                  As a service to VR/Tech Conferences or Film Festivals, we’ve
                  designed two software options instead of syncronous playback
                  in order to account for crowd mob behaviour as well as
                  optimizing throughput Costs are usually $6000-$8000 per event
                </p>
                <p>
                  Option 1: <br />
                  Software pro-programed via tablet to play designated film,
                  user puts on headsets and film starts. User removes headset,
                  film resets to the beginning.
                </p>
                <p>
                  Option 2: <br />
                  Headset is pre-programed to play disignated film at a certain
                  time. Audience is lead in early and fitted with headsets that
                  sit in a lobby screen until set time.
                </p>
                <p>
                  For your events contact{" "}
                  <a href="mailto:theaters@lumierevr.com">
                    theaters@lumierevr.com
                  </a>{" "}
                  for more details!
                </p>
                <p>
                  Top Left: VR Fest by Jump Into The Light <br />
                  Left: VIP Event for the Canadian Media Fund <br />
                  Bottom: Gold Coast Motor Festival by JP Morgan <br />
                </p>
              </div>
            </div>

            <div className="image-wrap">
              <img
                src={require("../../images/theaters/Case2SitdownParty.png")}
              />

              <img src={require("../../images/theaters/Case2Lounge.png")} />

              <img src={require("../../images/theaters/Case2Badge.png")} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Distribute;
