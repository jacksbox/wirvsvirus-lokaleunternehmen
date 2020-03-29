import React from "react";

import Button from "@material-ui/core/Button";

import { getShortDate } from "utils/date";

const DayPicker = ({ handleDayChange, slots, day }) => {
  return (
    <>
      {slots.map((slotsPerDay, i) => {
        const selected = i === day;
        return (
          <Button
            style={{ margin: '6px' }}
            variant={selected ? "contained" : "outlined"}
            onClick={handleDayChange(i)}
            color={selected ? "primary" : null}
            key={`${i}`}
          >
            {getShortDate(slotsPerDay[0].start)}
          </Button>
        );
      })}
    </>
  );
};

export default DayPicker;
