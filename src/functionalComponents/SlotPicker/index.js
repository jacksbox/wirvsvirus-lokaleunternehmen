import React from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { getTimeString, formatSlotTime } from "utils/date"

const SlotPicker = ({ day, slot, slots, handleChange }) => {
  return (
    <div>
      <RadioGroup name="slot" value={`${slot}`} onChange={handleChange}>
        {slots[day].map(slot => (
            <FormControlLabel
              value={`${slot.id}`}
              control={<Radio />}
              label={formatSlotTime(slot)}
              key={slot.id}
            />
        ))}
      </RadioGroup>
    </div>
  );
};

export default SlotPicker;
