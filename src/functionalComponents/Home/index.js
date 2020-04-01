import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Fab from "@material-ui/core/Fab";

import logo from 'assets/img/logo-web.jpg'

const Home = () => (
  <Card elevation={2}>
    <CardContent>
      <center>
        <img
          src={logo}
          alt="logo"
          style={{ width: "400px", maxWidth: "80%" }}
        /><br/>
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
        <br />
        <Fab
          variant="contained"
          onClick={() => (window.location = "/customer/maps")}
          color="primary"
        >
          Jetzt lokale Unternehmen finden
        </Fab>
        <br />
        <br />
      </center>
    </CardContent>
  </Card>
);

export default Home;
