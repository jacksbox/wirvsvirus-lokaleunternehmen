import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

import SlotPicker from "functionalComponents/SlotPicker";
import DayPicker from "functionalComponents/DayPicker";

import { formatSlot } from "utils/date";

const findSlot = (unternehmen, day, slotId) =>
  unternehmen.available_time_slots[day].find(({ id }) => id === `${slotId}`);

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
      <Grid item md={6}>
        <h5>Ihre eMail Adresse</h5>
        <p>{formValues.kunden_email}</p>
        <h5>Ihre Bestellung</h5>
        <p>{formValues.text}</p>
      </Grid>
      <Grid item md={6}>
        <h5>
          Pickup-Zeit:{" "}
          {day >= 0 && formValues.slot >= 0
            ? formatSlot(findSlot(unternehmen, day, formValues.slot))
            : ""}
        </h5>
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
          <h4>Wähle ein Datum um freie Zeitslots zu sehen.</h4>
        )}
      </Grid>
      <Grid item md={12} container justify="space-between">
        <Button onClick={() => prevStep()}>zurück</Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => nextStep()}
          disabled={!(formValues.slot >= 0)}
        >
          Anfrage senden
        </Button>
      </Grid>
    </Grid>
  </>
);

export default StepSlot;
