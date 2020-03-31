import React from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const SlotPicker = ({ selectedDay, slot, slotsPerDay, handleChange }) => {
  return (
    <div>
      <RadioGroup name="slot" value={slot && slot.id} onChange={handleChange}>
        {slotsPerDay.find(({ date }) => date === selectedDay).slots.map(({ id, startLabel, endLabel }) => (
            <FormControlLabel
              value={`${id}`}
              control={<Radio />}
              label={`${startLabel.timeString} - ${endLabel.timeString} Uhr`}
              key={id}
            />
        ))}
      </RadioGroup>
    </div>
  );
};

export default SlotPicker;
