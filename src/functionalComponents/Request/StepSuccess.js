import React from "react";

import Success from "components/Typography/Success.js";

const getShortDate = isoDate => {
  const date = new Date(isoDate);
  const month = date.toLocaleString('de-DE', { month: 'long' });;
  const day = date.getDay();
  return `${day}. ${month}`;
};

const getTimeString = isoDate => {
  const date = new Date(isoDate);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${!minutes ? "00" : minutes}`;
};

const formatSlot = slot => {
  const formattedSlot = `${getShortDate(slot.start)} ${getTimeString(slot.start)} - ${getTimeString(
    slot.stop
  )}`;
  return formattedSlot;
};

const StepSuccess = ({ formValues, unternehmen, day }) => (
  <Success>
    <h3>Danke! Ihr Laden um die Ecke freut sich auf Sie!</h3>
    <p>Ihr reservierter Slot: <strong>{formatSlot(unternehmen.available_time_slots[day].find(({ id }) => id === formValues.slot))}</strong></p>
  </Success>
)

export default StepSuccess