import React from "react";
import SendRavenFor from "../../components/SendRaven";

import "./ConnectBrandPage.css";

const Tile = ({ title, desc, tileColor }) => (
  <div className="tile" style={{ background: tileColor || "black" }}>
    <div className="container">
      <h5>
        <strong>{title}</strong>
      </h5>
      <p>{desc}</p>
    </div>
  </div>
);

const tileData = [
  {
    title: `Product Placement`,
    desc: `If you have products you want attention on, we can integrate you with up and coming VR films that are Festival Bound and also pipeline them after through our Network of Theaters and Film Pods`,
    tileColor: "#00A4E3"
  },
  {
    title: `Brand Injection`,
    desc: `Have your brand’s logo show up in the next big VR Premiere and track audience engagements through eye tracking built inside VR Headsets.`,
    tileColor: "#51A48C"
  },
  {
    title: `Sponsorship`,
    desc: `Sponsor your own branded VR short film that delivers your story directly to your target audience in an innovative and immersive experience`,
    tileColor: "#FF9AC4"
  },
  {
    title: `AdSpace`,
    desc: `Our theaters and Film Pods have hundreds of foot-traffic daily. Buy AdSpace to increase eye-balls and also associate your brand with the next big medium of storytelling`,
    tileColor: "#FF6066"
  }
];

export default () => {
  return (
    <div className="connect-brand-page page first-section">
      <div className="container">
        <h3>
          <strong>bleh belh belhe</strong>
        </h3>
        <p>
          Bakwas Bakwas Bakwas Bakwas Bakwas Bakwas Bakwas Bakwas Bakwas Bakwas
          Bakwas Bakwas Bakwas Bakwas Bakwas Bakwas Bakwas Bakwas Bakwas Bakwas
          Bakwas Bakwas Bakwas Bakwas Bakwas Bakwas Bakwas Bakwas Bakwas Bakwas
          Bakwas Bakwas Bakwas Bakwas Bakwas Bakwas Bakwas Bakwas Bakwas Bakwas
          Bakwas Bakwas Bakwas Bakwas Bakwas Bakwas Bakwas Bakwas Bakwas Bakwas
          Bakwas Bakwas Bakwas Bakwas
        </p>
        <div className="tile-wrap">
          {tileData.map(tile => <Tile {...tile} />)}
        </div>
        <button class="blue">Start a dialogue with us!</button>
      </div>
    </div>
  );
};
