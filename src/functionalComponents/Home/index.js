import React from "react";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const Home = () => (
  <Paper
    style={{
      maxWidth: "900px",
      textAlign: "center",
      padding: "80px 40px",
      margin: "0 auto"
    }}
  >
    {/* <img src={logo} alt="logo" style={{ width: '200px', maxWidth: "80%"}} /> */}
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/EW529J86Mpk"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <h4>
      Mit <strong>Bleib Lokal!</strong> entwickeln wir eine Lösung,
      <br />
      um die Läden um die Ecke in dieser schwierigen Zeit zu unterstützen.
    </h4>
    <Button variant="contained" href="/customer/maps" color="primary">
      Jetzt lokale Unternehmen finden
    </Button>
  </Paper>
);

export default Home;
