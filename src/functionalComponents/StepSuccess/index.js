import React from "react";

import Banner from "functionalComponents/Banner.js";

import { formatSlot } from "utils/date"

const findSlot = (unternehmen, day, slotId) => unternehmen.available_time_slots[day].find(({ id }) => id === `${slotId}`)

const StepSuccess = ({ formValues, unternehmen, day }) => {
  const slot = findSlot(unternehmen, day, formValues.slot)
  return (
  <div>
    <h3>Danke, die Bestellung wurde übermittelt!</h3>
    <h5>Ihr Lokales Unternehmen freut sich auf Sie!</h5>
    <p>Ihr reservierter Slot: <strong>{formatSlot(slot)}</strong></p>
    <Banner />
  </div>
)}

export default StepSuccess