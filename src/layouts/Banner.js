import React from "react";

const Banner = () => (
  <>
    <div
      style={{
        position: "relative",
        padding: "20px 40px",
        zIndex: 9999,
        backgroundColor: "rgba(125, 171, 162, .25)"
      }}
    >
      <strong>Achtung: Dies ist bisher leider nur eine Demo-Applikation</strong>
      <br />
      Es werden noch keine Anfragen verschickt oder Unternehmen eingetragen.
      Unterstützt uns mit Likes und Kommentaren zu unserem{" "}
      <a href="https://www.youtube.com/watch?v=EW529J86Mpk&feature=youtu.be">
        <strong>Intro Video</strong>
      </a>
      <br />
      Sie möchten mit ihrem Unternehmendabei sein sobald es losgeht? Dann tragen
      Sie sich{" "}
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScaCVS7ej3dcFbiOBTck3wcjDyytzvIFzvHCStJt8Ir-9u7vQ/viewform?usp=sf_link">
        <strong>hier</strong>
      </a>{" "}
      ein.
    </div>
  </>
);

export default Banner;
