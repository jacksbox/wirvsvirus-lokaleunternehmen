import React from "react";

import Button from "@material-ui/core/Button";

const DayPicker = ({ handleDaySelect, slotsPerDay, selectedDay }) => (
  <>
    {slotsPerDay.map(({ date, shortDate }) => {
      const selected = date === selectedDay;
      return (
        <Button
          style={{ margin: "6px" }}
          onClick={handleDaySelect(date)}
          variant={selected ? "contained" : "outlined"}
          color={selected ? "primary" : null}
          key={`${date}`}
        >
          {shortDate}
        </Button>
      );
    })}
  </>
);

export default DayPicker;
