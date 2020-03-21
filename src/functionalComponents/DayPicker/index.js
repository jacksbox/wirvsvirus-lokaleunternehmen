import React from "react";

import Button from "components/CustomButtons/Button.js";

const getShortDate = isoDate => {
  const date = new Date(isoDate);
  const month = date.toLocaleString('de-DE', { month: 'long' });;
  const day = date.getDate();
  return `${day}. ${month}`;
};

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