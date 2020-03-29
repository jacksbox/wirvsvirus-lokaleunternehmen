import React from "react";

import Grid from "@material-ui/core/Grid";

import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

const LoginForm = ({ handleSubmit }) => {
  return (
    <form method="POST" action="http://example.org">
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
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
      </Grid>
      <Grid item xs={12} md={6}>
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
      </Grid>
      <Grid item xs={12}>
        <Button onClick={handleSubmit} type="submit" color="success">
          Login
        </Button>
      </Grid>
    </Grid>
  </form>
  );
};

export default LoginForm;
