import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import SuccessMessage from "./SuccessMessage";

import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

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

const LoginRegister = () => {
  const classes = useStyles();
  const [saved, setSaved] = useState(false);
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Login</h4>
            </CardHeader>
            <CardBody>
              <LoginForm />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>
                Unternehmen Registrieren
              </h4>
            </CardHeader>
            <CardBody>
              {saved ? (
                <SuccessMessage />
              ) : (
                <RegisterForm setSaved={setSaved} />
              )}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default LoginRegister