import React from "react";

import Success from "components/Typography/Success.js";
import Banner from "functionalComponents/Banner.js";

const StepSuccess = ({ formValues: { slot }, compnay }) => {
  const slotString = `${slot.labels.startLabel.shortDate} ${slot.labels.startLabel.timeString} Uhr`
  return (
  <Success>
    <h3>Danke, die Bestellung wurde übermittelt!</h3>
    <h5>Ihr Lokales Unternehmen freut sich auf Sie!</h5>
    <p>Ihr reservierter Slot: <strong>{slotString}</strong></p>
    <Banner />
  </Success>
)}

export default StepSuccess