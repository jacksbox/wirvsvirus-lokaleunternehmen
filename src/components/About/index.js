import React from "react";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import logo from "assets/img/logo-web.jpg";
import step1 from "assets/img/1.png";
import step2 from "assets/img/2.png";
import step3 from "assets/img/3.png";
import step4 from "assets/img/4.png";
import step5 from "assets/img/5.png";
import step6 from "assets/img/6.png";

const About = () => (
  <Card elevation={2}>
    <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <center>
            <img width="60%" src={logo} alt="Bleib Lokal!" />
          </center>
        </Grid>
        <Grid item xs={12}>
          <center>
            <Typography variant="h4">Die Herausforderung</Typography>
            <p>
              Die Corona-Krise trifft den lokalen Einzelhandel besonders hart.
              Die Einzelhändler müssen ihre Läden schließen, haben oft keinen
              Onlineshop und auch gar nicht die Möglichkeiten, einen Shop mit
              Lieferservice in kurzer Zeit aufzubauen. Gleichzeitig haben die
              Stammkunden das Problem, dass sie ihren Lieblingsladen nicht
              unterstützen können: Denn dieser muss geschlossen bleiben!
              Außerdem besteht vielleicht nicht die Möglichkeit, sein
              Lieblingsprodukt bei einem anderen Onlinehändler zu kaufen, da es
              nur beim geliebten Stammladen erhältlich ist
            </p>
          </center>
        </Grid>
        <Grid item xs={12}>
          <center>
            <Typography variant="h4">Unsere Lösung</Typography>
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
    </CardContent>
  </Card>
);

export default About;
