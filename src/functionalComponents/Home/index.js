import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";

import logo from "assets/img/logo-web.jpg";

const Home = () => (
  <Card elevation={2}>
    <CardContent>
      <center>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img
              src={logo}
              alt="logo"
              style={{ width: "400px", maxWidth: "80%" }}
            />
          </Grid>
          <Grid item xs={12}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/EW529J86Mpk"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Mit <strong>Bleib Lokal!</strong> entwickeln wir eine Lösung,
              <br />
              um die Läden um die Ecke in dieser schwierigen Zeit zu
              unterstützen.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Fab
              variant="contained"
              onClick={() => (window.location = "/maps")}
              color="primary"
            >
              Jetzt lokale Unternehmen finden
            </Fab>
          </Grid>
        </Grid>
      </center>
    </CardContent>
  </Card>
);

export default Home;
