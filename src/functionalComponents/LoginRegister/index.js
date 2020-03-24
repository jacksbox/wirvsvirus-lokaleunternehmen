import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

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

const initialRegisterFormValues = {
  name: null,
  email: null,
  telefon: null,
  ober_kategorie: null,
  zip: null,
  city: null,
  address: null,
  beschreibung: null,
  password: null,
  passwordConfirm: null
};

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = email => {
  return EMAIL_REGEX.test(String(email).toLowerCase());
};

const requiredRegisterFormValues = [
  "name",
  "email",
  "ober_kategorie",
  "zip",
  "city",
  "address",
  "beschreibung",
  "password",
  "passwordConfirm"
];
const validateRegisterForm = formValues => {
  const errors = new Set();
  // check required
  requiredRegisterFormValues.forEach(fieldName => {
    if (formValues[fieldName] === null || formValues[fieldName] === "") {
      errors.add(fieldName);
    }
  });

  if (!validateEmail(formValues.email)) {
    errors.add("email");
  }

  if (formValues.password !== formValues.passwordConfirm) {
    errors.add("noMatch");
  }

  return Array.from(errors);
};

const LoginRegister = () => {
  const classes = useStyles();

  const [saved, setSaved] = useState(false);
  const [registerFormValues, setRegisterFormValues] = useState(
    initialRegisterFormValues
  );
  const [registerErrors, setRegisterErrors] = useState([]);

  const handleRegisterFormChange = event => {
    const { name, value } = event.target;
    registerFormValues[name] = value;
  };

  const handleRegister = () => {
    const errors = validateRegisterForm(registerFormValues);
    if (errors.length > 0) {
      setRegisterErrors(errors);
      return false;
    }
    // call the api please
    setSaved(true);
  };

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
              <RegisterForm
                handleChange={handleRegisterFormChange}
                handleSubmit={handleRegister}
                saved={saved}
                errors={registerErrors}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default LoginRegister;
