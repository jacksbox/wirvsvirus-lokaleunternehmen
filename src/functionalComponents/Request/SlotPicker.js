import React from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const getTimeString = isoDate => {
  const date = new Date(isoDate);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${!minutes ? "00" : minutes}`;
};

const formatSlot = slot => {
  const formattedSlot = `${getTimeString(slot.start)} - ${getTimeString(
    slot.stop
  )}`;
  return formattedSlot;
};

const SlotPicker = ({ day, slot, slots, handleChange }) => {
  return (
    <div>
      <RadioGroup name="slot" value={slot} onChange={handleChange}>
        {slots[day].map(slot => (
            <FormControlLabel
              value={`${slot.id}`}
              control={<Radio />}
              label={formatSlot(slot)}
            />
        ))}
      </RadioGroup>
    </div>
  );
};

export default SlotPicker;
