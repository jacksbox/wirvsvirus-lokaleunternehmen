import React from "react";

import Button from "components/CustomButtons/Button.js";

import { getShortDate } from "utils/date"

const DayPicker = ({ handleDayChange, slots, day }) => (
  <>
   {slots.map((slotsPerDay, i) => (
     <Button
      onClick={handleDayChange(i)}
      color={i === day ? 'info' : null}
      key={`${i}`}
    >
      {getShortDate(slotsPerDay[0].start)}
    </Button>)
   )}
  </>
)

export default DayPicker