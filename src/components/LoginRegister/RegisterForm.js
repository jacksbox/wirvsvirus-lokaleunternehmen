import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import BusinessForm from 'components/BusinessForm'
import PasswordForm from 'components/PasswordForm'

import SuccessMessage from "./SuccessMessage";

const RegisterForm = ({ saved, handleChange, handleSubmit, errors }) => {

  if (saved) {
    return <SuccessMessage />;
  }

  return (
    <>
      <BusinessForm handleChange={handleChange} errors={errors} />
      <PasswordForm handleChange={handleChange} errors={errors} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Divider />
        </Grid>
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
