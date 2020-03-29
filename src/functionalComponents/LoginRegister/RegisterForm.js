import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import BusinessForm from 'functionalComponents/BusinessForm'
import PasswordForm from 'functionalComponents/PasswordForm'

import SuccessMessage from "./SuccessMessage";

const RegisterForm = ({ saved, handleChange, handleSubmit, errors }) => {

  if (saved) {
    return <SuccessMessage />;
  }

  return (
    <>
      <BusinessForm handleChange={handleChange} errors={errors} />
      <PasswordForm handleChange={handleChange} errors={errors} />
      <Grid container>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleSubmit} color="secondary">
            Jetzt registrieren
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default RegisterForm;
