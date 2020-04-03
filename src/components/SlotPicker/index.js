import React from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Grid from "@material-ui/core/Grid";

const SlotPicker = ({ selectedDay, slot, slotsPerDay, handleChange }) => {
  return (
    <RadioGroup name="slot" value={slot && slot.id} onChange={handleChange}>
      <Grid container spacing={1}>
        {slotsPerDay
          .find(({ date }) => date === selectedDay)
          .slots.map(({ id, startLabel, endLabel }) => (
            <Grid item xs={6} sm={4} md={3} key={id}>
              <FormControlLabel
                value={`${id}`}
                control={<Radio />}
                label={`${startLabel.timeString} - ${endLabel.timeString} Uhr`}
                key={id}
                // disabled={!slot.available}
              />
            </Grid>
          ))}
      </Grid>
    </RadioGroup>
  );
};

export default SlotPicker;
