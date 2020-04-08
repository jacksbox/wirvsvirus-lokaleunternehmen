import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import logo from "assets/img/logo-web.jpg";
import step1 from "assets/img/1.png";
import step2 from "assets/img/2.png";
import step3 from "assets/img/3.png";
import step4 from "assets/img/4.png";
import step5 from "assets/img/5.png";
import step6 from "assets/img/6.png";

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
            <center>
              <p>
                Auf dem kostenlosen Portal Bleib Lokal! verbinden wir
                Einzelhändler mit ihren Stammkunden, indem über die Website
                Produkte für ein Zeitfenster vorbestellt und anschließend vom
                Kunden kontaktlos an der Ladentür abgeholt werden können.
              </p>
            </center>
          </Grid>
          <Grid item xs={12}>
            <center>
              <Typography variant="h4">So funktioniert es:</Typography>
            </center>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={6} md={4}>
              <center>
                <div>
                  <strong>1.</strong>
                </div>
                <img width="60%" src={step1} alt="Bleib Lokal! Schritt 1." />
                <div>
                  HÄNDLER MELDET SICH MIT WENIGEN KLICKS BEI{" "}
                  <strong>BLEIB LOKAL!</strong> AN
                </div>
              </center>
            </Grid>
            <Grid item xs={6} md={4}>
              <center>
                <div>
                  <strong>2.</strong>
                </div>
                <img width="60%" src={step2} alt="Bleib Lokal! Schritt 2." />
                <div>KUNDE FINDET SEINEN LIEBLINGSLADEN AUF DER KARTE</div>
              </center>
            </Grid>
            <Grid item xs={6} md={4}>
              <center>
                <div>
                  <strong>3.</strong>
                </div>
                <img width="60%" src={step3} alt="Bleib Lokal! Schritt 3." />
                <div>
                  KUNDE SCHICKT DIE BESTELLUNG ÜBER DAS PORTAL AN DEN HÄNDLER
                </div>
              </center>
            </Grid>
            <Grid item xs={6} md={4}>
              <center>
                <div>
                  <strong>4.</strong>
                </div>
                <img width="60%" src={step4} alt="Bleib Lokal! Schritt 4." />
                <div>KUNDE WÄHLT EIN ZEITFENSTER ZUR ABHOLUNG AUS</div>
              </center>
            </Grid>
            <Grid item xs={6} md={4}>
              <center>
                <div>
                  <strong>5.</strong>
                </div>
                <img width="60%" src={step5} alt="Bleib Lokal! Schritt 5." />
                <div>
                  HÄNDLER BEKOMMT DIE BESTELLUNG PER MAIL UND VERSCHICKT EINE
                  RECHNUNG.
                </div>
              </center>
            </Grid>
            <Grid item xs={6} md={4}>
              <center>
                <div>
                  <strong>6.</strong>
                </div>
                <img width="60%" src={step6} alt="Bleib Lokal! Schritt 6." />
                <div>
                  KUNDE BEZAHLT UND HOLT SEINE BESTEL LUNG KONTAKTLOS AN DER
                  LADENTÜR AB
                </div>
              </center>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <br />
            <Divider />
            <br />
          </Grid>
          <Grid item xs={12}>
            <iframe
              title="Bleib Lokal! Video"
              width="560"
              height="315"
              style={{ maxWidth: 560 }}
              src="https://www.youtube.com/embed/EW529J86Mpk"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
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
              variant="extended"
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
