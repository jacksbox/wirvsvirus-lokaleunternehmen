import React from "react";

import Success from "components/Typography/Success.js";

import { getShortDate, formatSlot } from "utils/date"

const findSlot = (unternehmen, day, slotId) => unternehmen.available_time_slots[day].find(({ id }) => id === `${slotId}`)

const StepSuccess = ({ formValues, unternehmen, day }) => {
  const slot = findSlot(unternehmen, day, formValues.slot)
  return (
  <Success>
    <h3>Danke, die Bestellung wurde übermittelt!</h3>
    <h5>Ihr Lokales Unternehmen freut sich auf Sie!</h5>
    <p>Ihr reservierter Slot: <strong>{formatSlot(slot)}</strong></p>
  </Success>
)}

export default StepSuccess