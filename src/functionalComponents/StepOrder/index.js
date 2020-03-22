import React from "react";

import Grid from "@material-ui/core/Grid";

import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Hidden from '@material-ui/core/Hidden';

const StepOverview = ({ nextStep, prevStep, unternehmen, handleChange, formValues }) => {
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
        </Grid>

        <Grid item md={12}>
          <Grid container justify="space-between">
            <Button onClick={() => prevStep()}>zurück</Button>
            <Button onClick={() => nextStep()} color="info">
              Pickup-Zeit wählen
            </Button>
        </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default StepOverview;
