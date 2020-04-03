import React from "react";

import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

import SlotPicker from "components/SlotPicker";
import DayPicker from "components/DayPicker";

const StepSlot = ({
  nextStep,
  prevStep,
  slotsPerDay,
  handleSlotChange,
  formValues: { slot },
  selectedDay,
  handleDaySelect
}) => (
  <>
    <Grid container spacing={2}>
      <Grid item md={12}>
        <h5>
          Pickup-Zeit:{" "}
          {slot &&
            slot.id !== "" &&
            `${slot.startLabel.shortDate} ${slot.startLabel.timeString} Uhr`}
        </h5>
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
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item md={12} container justify="space-between">
        <Button onClick={() => prevStep()}>zurück</Button>
        <Button onClick={() => nextStep()} variant="contained" color="primary" disabled={!slot.id}>
          Anfrage senden
        </Button>
      </Grid>
    </Grid>
  </>
);

export default StepSlot;
