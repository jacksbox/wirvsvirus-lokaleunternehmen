import React from "react";

const StepSuccess = () => {
  return (
    <div>
      <h3>Danke, die Bestellung wurde übermittelt!</h3>
      <p>
        Die Bestellung wurde per Mail an Ihr lokales Unternehmen übermittelt.
        Sie erhalten eine Bestätigungsmail sowie den zu bezahlenden Preis,
        sobald Ihr lokales Unternehmen Ihre Bestellung geprüft hat.
      </p>
      <p>
        Sollten Sie weitere Fragen haben, wenden Sie sich gerne an{" "}
        <a href="mailto:bleib.lokal2020@gmail.com">bleib.lokal2020@gmail.com</a>
        .
      </p>
    </div>
  );
};

export default StepSuccess;
