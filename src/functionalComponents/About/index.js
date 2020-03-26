import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import logo from "assets/img/logo-web.jpg";

const About = () => (
  <Paper style={{ maxWidth: "900px", padding: "2em", margin: "0 auto" }}>
    <Grid container>
      <Grid item xs={12}>
        <center>
          <h2>Die Herausforderung</h2>
          <p>
            Die Corona-Krise trifft den lokalen Einzelhandel besonders hart. Die
            Einzelhändler müssen ihre Läden schließen, haben oft keinen
            Onlineshop und auch gar nicht die Möglichkeiten, einen Shop mit
            Lieferservice in kurzer Zeit aufzubauen. Gleichzeitig haben die
            Stammkunden das Problem, dass sie ihren Lieblingsladen nicht
            unterstützen können: Denn dieser muss geschlossen bleiben! Außerdem
            besteht vielleicht nicht die Möglichkeit, sein Lieblingsprodukt bei
            einem anderen Onlinehändler zu kaufen, da es nur beim geliebten
            Stammladen erhältlich ist
          </p>
        </center>
      </Grid>
      <Grid item xs={12}>
        <center>
          <h2>Unsere Lösung</h2>
          <p>
            Auf dem kostenlosen Portal Bleib Lokal! verbinden wir Einzelhändler
            mit ihren Stammkunden, indem über die Website Produkte für ein
            Zeitfenster vorbestellt und anschließend vom Kunden kontaktlos an
            der Ladentür abgeholt werden können.
          </p>
        </center>
      </Grid>
      <Grid item xs={12}>
        <center>
          <img width="60%" src={logo} alt="Bleib Lokal!" />
        </center>
      </Grid>
      <Grid item xs={12}>
        <center>
          <h2>So funktioniert es:</h2>
        </center>
      </Grid>
      <Grid item xs={6} md={4}>
        <center>
          <strong>1.</strong>
          <p>
            HÄNDLER MELDET SICH MIT WENIGEN KLICKS BEI <strong>BLEIB LOKAL!</strong> AN
          </p>
        </center>
      </Grid>
      <Grid item xs={6} md={4}>
        <center>
          <strong>2.</strong>
          <p>KUNDE FINDET SEINEN L IEBL INGSLADEN AUF DER KARTE</p>
        </center>
      </Grid>
      <Grid item xs={6} md={4}>
        <center>
          <strong>3.</strong>
          <p>KUNDE SCHICKT DIE BESTEL LUNG ÜBER DAS PORTAL AN DEN HÄNDLER</p>
        </center>
      </Grid>
      <Grid item xs={6} md={4}>
        <center>
          <strong>4.</strong>
          <p>KUNDE WÄHLT EIN ZEITFENSTER ZUR ABHOLUNG AUS</p>
        </center>
      </Grid>
      <Grid item xs={6} md={4}>
        <center>
          <strong>5.</strong>
          <p>
            HÄNDLER BEKOMMT DIE BESTEL LUNG PER MAI L UND VERSCHICKT EINE
            RECHNUNG.
          </p>
        </center>
      </Grid>
      <Grid item xs={6} md={4}>
        <center>
          <strong>6.</strong>
          <p>
            KUNDE BEZAHLT UND HOLT SEINE BESTEL LUNG KONTAKTLOS AN DER LADENTÜR
            AB
          </p>
        </center>
      </Grid>
    </Grid>
  </Paper>
);

export default About;
