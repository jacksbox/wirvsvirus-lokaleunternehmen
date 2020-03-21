import React from "react";

import Grid from "@material-ui/core/Grid";

import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

const StepOverview = ({ nextStep, prevStep, handleChange, formValues }) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <h5> Anfrage Details</h5>
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
          <Button onClick={() => nextStep()} color="primary">
            Timeslot wählen
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default StepOverview;
