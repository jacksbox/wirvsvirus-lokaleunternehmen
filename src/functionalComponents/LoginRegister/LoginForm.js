import React from "react";

import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

const LoginForm = ({ handleSubmit }) => {
  return (
    <form method="POST" action="http://example.org">
    <GridContainer>
      <GridItem xs={12} md={6}>
        <CustomInput
          labelText="Email"
          id="email-login"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            name: "email"
          }}
        />
      </GridItem>
      <GridItem xs={12} md={6}>
        <CustomInput
          labelText="Passwort"
          id="password-login"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: 'password',
            name: "password"
          }}
        />
      </GridItem>
      <GridItem xs={12}>
        <Button onClick={handleSubmit} type="submit" color="success">
          Login
        </Button>
      </GridItem>
    </GridContainer>
  </form>
  );
};

export default LoginForm;
