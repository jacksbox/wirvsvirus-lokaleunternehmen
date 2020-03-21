import React from "react";

import Grid from "@material-ui/core/Grid";

import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

const StepOverview = ({ nextStep, prevStep, handleChange, formValues }) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <h5>Bestellungs-Details</h5>
          <p>Trage hier ein welche Produkte du haben möchtest.</p>
        </Grid>
        <Grid item md={6}>
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
        <Grid item md={12}>
          <CustomInput
            labelText="Bestellung"
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
          <Button onClick={() => prevStep()}>zurück</Button>
          <Button onClick={() => nextStep()} color="info">
            Pickup-Zeit wählen
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default StepOverview;
