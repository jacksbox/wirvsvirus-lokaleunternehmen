import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";

import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Hidden from '@material-ui/core/Hidden';

import Danger from "components/Typography/Danger.js";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = email => {
  return EMAIL_REGEX.test(String(email).toLowerCase());
}

const validate = formValues => {
  const errors = []
  if(!validateEmail(formValues.kunden_email)) {
    errors.push('kunden_email')
  }
  if(formValues.text.length === 0) {
    errors.push('text')
  }
  return errors
}

const StepOverview = ({ nextStep, prevStep, unternehmen, handleChange, formValues }) => {
  const [ errors, setErrors ] = useState([])

  const next = () => {
    const errors = validate(formValues)
    setErrors(errors)
    if (errors.length > 0) {
      return false
    }
    nextStep()
  }

  const formFilled = formValues.kunden_email.length > 0 && formValues.text.length > 0

  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <h5>Bestellungs-Details</h5>
          <p>Trage hier ein welche Produkte du haben möchtest.</p>
          <CustomInput
            formControlProps={{ fullWidth: true }}
            labelText="eMail Addresse"
            id="kunden_email"
            inputProps={{
              name: "kunden_email",
              value: formValues.kunden_email,
              onChange: handleChange
            }}
          />
          {errors.includes('kunden_email') && <Danger>Bitte überprüfe die eMail Adresse.</Danger>}
        </Grid>
        <Hidden xsDown>
          <Grid item md={6}>
            <h5>Beschreibung</h5>
            <p>{unternehmen.beschreibung}</p>
          </Grid>
        </Hidden>
        <Grid item md={12} xs={12}>
          <CustomInput
            labelText="Meine Bestellung"
            id="text"
            formControlProps={{ fullWidth: true }}
            inputProps={{
              name: "text",
              value: formValues.text,
              onChange: handleChange,
              multiline: true,
              rows: 5
            }}
          />
          {errors.includes('text') && <Danger>Bitte gib eine Bestellung ein.</Danger>}
        </Grid>

        <Grid item md={12}>
          <Grid container justify="space-between">
            <Button onClick={() => prevStep()}>zurück</Button>
            <Button onClick={() => next()} color="info" disabled={!formFilled}>
              Pickup-Zeit wählen
            </Button>
        </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default StepOverview;
