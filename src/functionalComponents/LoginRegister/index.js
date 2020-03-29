import React from "react";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import CardHeader from "functionalComponents/CardHeader";
import CardBody from "functionalComponents/CardBody";

import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

import { makeStyles } from "@material-ui/core/styles";

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

const LoginRegister = ({
  handleRegisterFormChange,
  handleRegister,
  registerErrors,
  handleLogin,
  saved
}) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Login</h4>
            </CardHeader>
            <CardBody>
              <LoginForm handleSubmit={handleLogin} />
            </CardBody>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>
                Unternehmen Registrieren
              </h4>
            </CardHeader>
            <CardBody>
              <RegisterForm
                handleChange={handleRegisterFormChange}
                handleSubmit={handleRegister}
                saved={saved}
                errors={registerErrors}
              />
            </CardBody>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginRegister;
