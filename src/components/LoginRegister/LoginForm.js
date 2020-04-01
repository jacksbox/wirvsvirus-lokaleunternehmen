import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import Input from "components/Input";

const LoginForm = ({ handleSubmit }) => {
  return (
    <form method="POST" action="http://example.org">
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Input
          id="email"
          labelText="Email"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Input
          id="password"
          labelText="Passwort"
          type="password"
          variant="outlined"
          fullWidth
        />
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <p>Bitte loggen Sie sich mit ihrer eMail und Passwort ein.</p>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleSubmit} color="secondary">
          Login
        </Button>
      </Grid>
    </Grid>
  </form>
  );
};

export default LoginForm;
