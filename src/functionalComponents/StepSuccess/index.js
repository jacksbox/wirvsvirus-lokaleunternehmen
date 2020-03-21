import React from "react";

import Success from "components/Typography/Success.js";

import { getShortDate, getTimeString, formatSlot } from "utils/date"

const StepSuccess = ({ formValues, unternehmen, day }) => {
  const slot = unternehmen.available_time_slots[day].find(({ id }) => id === formValues.slot)
  return (
  <Success>
    <h3>Danke! Ihr Laden um die Ecke freut sich auf Sie!</h3>
    <p>Ihr reservierter Slot: <strong>{getShortDate(slot.start)} {formatSlot(slot)}</strong></p>
  </Success>
)}

export default StepSuccess