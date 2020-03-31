import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import BusinessFormComponent from "functionalComponents/BusinessForm";
import OpeningHoursForm from "functionalComponents/OpeningHoursForm";

const BusinessForm = () => {
  const handleChange = () => {}
  const handleSubmit = () => {}
  const errors = []

  return (
    <>
      <BusinessFormComponent handleChange={handleChange} errors={errors} newPassword />
      <OpeningHoursForm handleChange={handleChange} errors={errors} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleSubmit} color="secondary">
            Speichern
          </Button>
        </Grid>
      </Grid>
      </>
  );
};

export default BusinessForm;
