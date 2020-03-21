import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import SlotPicker from "functionalComponents/Request/SlotPicker.js";
import DayPicker from "functionalComponents/Request/DayPicker.js";

import Button from "components/CustomButtons/Button.js";

const StepSlot = ({
  nextStep,
  prevStep,
  unternehmen,
  handleChange,
  formValues,
  day,
  handleDayChange
}) => (
  <>
    <Grid container spacing={2}>
      <Grid item md={12}>
        <h5>Timeslot wählen</h5>
        <DayPicker
          slots={unternehmen.available_time_slots}
          handleDayChange={handleDayChange}
          day={day}
        />
        <br />
        <br />
        <Divider />
        {day > -1 ? (
          <SlotPicker
            day={day}
            slots={unternehmen.available_time_slots}
            slot={formValues.slot}
            handleChange={handleChange}
          />
        ) : (
          <h4>Wähle ein Datum um freie Timeslots zu finden.</h4>
        )}
      </Grid>
      <Grid item md={12}>
        <Button onClick={() => prevStep()}>zurück</Button>
        <Button
          onClick={() => nextStep()}
          color="success"
          disabled={!(formValues.slot >= 0)}
        >
          Anfrage senden
        </Button>
      </Grid>
    </Grid>
  </>
);

export default StepSlot;
