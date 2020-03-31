import React from "react";

import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import SlotPicker from "functionalComponents/SlotPicker";
import DayPicker from "functionalComponents/DayPicker";

import Button from "components/CustomButtons/Button.js";

const StepSlot = ({
  nextStep,
  prevStep,
  slotsPerDay,
  handleSlotChange,
  formValues: {
    slot
  },
  selectedDay,
  handleDaySelect
}) => (
  <>
    <Grid container spacing={2}>
      <Grid item md={12}>
        <h5>Pickup-Zeit: {slot && slot.id !== ''  && `${slot.startLabel.shortDate} ${slot.startLabel.timeString} Uhr`}</h5>
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
            slot={slot}
            handleChange={handleSlotChange}
          />
        ) : (
          <h4>Wähle ein Datum um freie Zeitslots zu sehen.</h4>
        )}
      </Grid>
      <Grid item md={12} container  justify="space-between">
        <Button onClick={() => prevStep()}>zurück</Button>
        <Button
          onClick={() => nextStep()}
          color="success"
          disabled={!slot}
        >
          Anfrage senden
        </Button>
      </Grid>
    </Grid>
  </>
);

export default StepSlot;
