import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import Input from "components/Input";
import PasswordForm from "components/PasswordForm";

const AccountForm = () => {
  const handleChange = () => {}
  const handleSubmit = () => {}
  const errors = []

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input
            id="password"
            labelText="Passwort"
            helperText="Passwort wird benötigt."
            required
            type="password"
            variant="outlined"
            handleChange={handleChange}
            errors={errors}
            fullWidth
          />
        </Grid>
      </Grid>
      <PasswordForm handleChange={handleChange} errors={errors} newPassword />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleSubmit} color="secondary">
            Neues Passwort speichern
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default AccountForm;
