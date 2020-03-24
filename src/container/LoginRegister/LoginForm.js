import React from "react";

import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

const LoginForm = () => {
  return (
    <GridContainer>
      <GridItem xs={12} md={6}>
        <CustomInput
          labelText="Email"
          id="email"
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
          id="password"
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
        <Button color="success">
          Login
        </Button>
      </GridItem>
    </GridContainer>
  );
};

export default LoginForm;
