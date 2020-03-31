import React from "react";

import Button from "components/CustomButtons/Button.js";

const DayPicker = ({ handleDaySelect, slotsPerDay, selectedDay }) => (
  <>
   {slotsPerDay.map(({ date, label }) => (
     <Button
      onClick={handleDaySelect(date)}
      color={date === selectedDay ? 'info' : null}
      key={`${date}`}
    >
      {label.shortDate}
    </Button>)
   )}
  </>
)

export default DayPicker