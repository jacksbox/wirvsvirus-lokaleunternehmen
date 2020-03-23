import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import Success from "components/Typography/Success.js";
import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const [saved, setSaved] = useState(false);
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Ihr Unternehmen</h4>
            </CardHeader>
            <CardBody>
              {saved ? (
                <Success>
                  <h3>Ihr Unternehmen wurde registriert!</h3>
                  <h5>
                    Ab jetzt können Ihre Kunden Sie auf unserer Karte finde
                  </h5>
                </Success>
              ) : (
                <GridContainer>
                  <GridItem style={{ fontSize: '18px' }}>
                    Das Angebot befindet sich im Aufbau, bitte nutzen Sie zur
                    Registrierung dieses{" "}
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScaCVS7ej3dcFbiOBTck3wcjDyytzvIFzvHCStJt8Ir-9u7vQ/viewform?usp=sf_link">
                      <strong>Formular</strong>
                    </a>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Unternehmen's Name"
                      id="company-disabled"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{ disabled: true }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Email address"
                      id="email-address"
                      formControlProps={{
                        disabled: true,
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Addresse"
                      id="address"
                      formControlProps={{
                        disabled: true,
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Beschreibung"
                      id="company-disabled"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: true,
                        multiline: true,
                        rows: 5
                      }}
                    />
                  </GridItem>
                </GridContainer>
              )}
            </CardBody>
            {!saved && (
              <CardFooter>
                <Button onClick={() => setSaved(true)} color="success" disabled>
                  Speichern
                </Button>
              </CardFooter>
            )}
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
