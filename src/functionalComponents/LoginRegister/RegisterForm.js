import React from "react";

import Grid from "@material-ui/core/Grid";

import Button from "components/CustomButtons/Button.js";

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
          <Button onClick={handleSubmit} color="success">
            Jetzt registrieren
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default RegisterForm;
