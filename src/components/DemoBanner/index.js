import React from "react";

const DemoBanner = () => (
  <>
    <div
      style={{
        position: "relative",
        padding: "20px 40px",
        zIndex: 9999,
        backgroundColor: "rgba(125, 171, 162, .25)"
      }}
    >
      <h4 style={{ margin: 0, fontWeight: 'bold' }}>Demo Applikation</h4>
      Das Angebot befindet sich im Aufbau, bitte nutzen Sie zur Registrierung dieses <a href="https://docs.google.com/forms/d/e/1FAIpQLScaCVS7ej3dcFbiOBTck3wcjDyytzvIFzvHCStJt8Ir-9u7vQ/viewform?usp=sf_link">
        <strong>Formular</strong>
      </a>.<br />
      Anfragen werden derzeit noch nicht an Unternehmen übermittelt.
    </div>
  </>
);

export default DemoBanner;
