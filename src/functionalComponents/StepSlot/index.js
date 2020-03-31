import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import SlotPicker from "functionalComponents/SlotPicker";
import DayPicker from "functionalComponents/DayPicker";

import Button from "components/CustomButtons/Button.js";

import { formatSlot } from 'utils/date'

const findSlot = (unternehmen, day, slotId) => unternehmen.available_time_slots[day].find(({ id }) => id === `${slotId}`)

const StepSlot = ({
  nextStep,
  prevStep,
  company,
  slotsPerDay,
  handleChange,
  handleSlotChange,
  formValues,
  selectedDay,
  handleDaySelect
}) => (
  <>
    <Grid container spacing={2}>
      <Grid item md={6}>
        <h5>Ihre eMail Adresse</h5>
        <p>{formValues.customerEmail}</p>
        <h5>Ihre Bestellung</h5>
        <p>{formValues.text}</p>
      </Grid>
      <Grid item md={6}>
        <h5>Pickup-Zeit: {formValues.slot && formValues.slot.id !== ''  && `${formValues.slot.labels.startLabel.shortDate} ${formValues.slot.labels.startLabel.timeString} Uhr`}</h5>
        <DayPicker
          slotsPerDay={slotsPerDay}
          selectedDay={selectedDay}
          handleDaySelect={handleDaySelect}
        />
        <br />
        <br />
        <Divider />
        {selectedDay ? (
          <SlotPicker
            slotsPerDay={slotsPerDay}
            selectedDay={selectedDay}
            slot={formValues.slot}
            handleChange={handleSlotChange}
          />
        ) : (
          <h4>Wähle ein Datum um freie Zeitslots zu sehen.</h4>
        )}
      </Grid>
      <Grid item md={12}>
        <Grid container justify="space-between">
          <Button onClick={() => prevStep()}>zurück</Button>
          <Button
            onClick={() => nextStep()}
            color="success"
            disabled={!formValues.slot}
          >
            Anfrage senden
          </Button>
        </Grid>
      </Grid>
    </Grid>
  </>
);

export default StepSlot;
