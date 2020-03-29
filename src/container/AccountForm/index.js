import React from "react";

import Grid from "@material-ui/core/Grid";

import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Danger from "components/Typography/Danger.js";

import PasswordForm from "functionalComponents/PasswordForm";

const AccountForm = () => {
  const handleChange = () => {}
  const handleSubmit = () => {}
  const errors = []

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <h3>Passwort ändern</h3>
        </Grid>
        <Grid item xs={6}>
          <CustomInput
            labelText="Passwort"
            id="password"
            formControlProps={{
              fullWidth: true,
              required: true
            }}
            inputProps={{
              name: "password",
              type: "password",
              onChange: handleChange
            }}
          />
          <i>min. 6 Zeichen</i>
          <br />
          {errors.includes("password") && (
            <Danger>Passwort wird benötigt.</Danger>
          )}
        </Grid>
      </Grid>
      <PasswordForm handleChange={handleChange} errors={errors} newPassword />
      <Grid container>
        <Grid item xs={12}>
          <Button onClick={handleSubmit} color="success">
            Neues Passwort speichern
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default AccountForm;
