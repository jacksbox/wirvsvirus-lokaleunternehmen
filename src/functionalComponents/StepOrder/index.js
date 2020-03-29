import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";

import Input from "functionalComponents/Input";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = email => {
  return EMAIL_REGEX.test(String(email).toLowerCase());
};

const validate = formValues => {
  const errors = [];
  if (!validateEmail(formValues.kunden_email)) {
    errors.push("kunden_email");
  }
  if (formValues.text.length === 0) {
    errors.push("text");
  }
  return errors;
};

const StepOverview = ({
  nextStep,
  prevStep,
  unternehmen,
  handleChange,
  formValues
}) => {
  const [errors, setErrors] = useState([]);

  const next = () => {
    const errors = validate(formValues);
    if (errors.length > 0) {
      setErrors(errors);
      return false;
    }
    nextStep();
  };

  const formFilled =
    formValues.kunden_email.length > 0 && formValues.text.length > 0;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <h5>Bestellungs-Details</h5>
          <p>Trage hier ein welche Produkte du haben möchtest.</p>
          <Input
            id="kunden_email"
            value={formValues.kunden_email}
            labelText="eMail Addresse"
            helperText="Bitte überprüfe die eMail Adresse."
            required
            handleChange={handleChange}
            errors={errors}
            fullWidth
          />
        </Grid>
        <Hidden xsDown>
          <Grid item md={6}>
            <h5>Beschreibung</h5>
            <p>{unternehmen.beschreibung}</p>
          </Grid>
        </Hidden>
        <Grid item md={12} xs={12}>
          <Input
            id="text"
            value={formValues.text}
            labelText="Meine Bestellung"
            helperText="Bitte gib eine Bestellung ein."
            required
            handleChange={handleChange}
            errors={errors}
            fullWidth
            multiline
            rows={5}
          />
        </Grid>

        <Grid item md={12} container justify="space-between">
          <Button onClick={() => prevStep()}>zurück</Button>
          <Button
            variant="contained"
            onClick={() => next()}
            color="primary"
            disabled={!formFilled}
          >
            Pickup-Zeit wählen
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default StepOverview;
