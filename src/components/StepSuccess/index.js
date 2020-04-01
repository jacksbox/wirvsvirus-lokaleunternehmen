import React from "react";

import DemoBanner from "components/DemoBanner";

const StepSuccess = ({ formValues: { slot } }) => {
  const slotString = `${slot.startLabel.shortDate} ${slot.startLabel.timeString} Uhr`
  return (
  <div>
    <h3>Danke, die Bestellung wurde übermittelt!</h3>
    <h5>Ihr Lokales Unternehmen freut sich auf Sie!</h5>
    <p>Ihr reservierter Slot: <strong>{slotString}</strong></p>
    <DemoBanner />
  </div>
)}

export default StepSuccess