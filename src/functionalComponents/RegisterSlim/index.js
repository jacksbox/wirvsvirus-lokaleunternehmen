import React from "react";

import BusinessForm from "functionalComponents/BusinessForm";
import GeneralForm from "./GeneralForm";
import TimeSlotForm from "./TimeSlotForm";
import SuccessMessage from "./SuccessMessage";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Button from "components/CustomButtons/Button.js";

const stepComponents = [
  {
    Component: BusinessForm,
    title: "Unternehmensdaten",
    nextButtonLabel: "weiter"
  },
  { Component: BusinessForm, title: "TimeSlots", nextButtonLabel: "speichern" },
  { Component: SuccessMessage, title: "Ihre Daten wurden gespeichert." }
];

const RegisterSlim = ({ step, prevStep, nextStep, handleChange, errors }) => {
  const { Component, title, nextButtonLabel } = stepComponents[step];

  return (
    <Card>
      <CardHeader color="info">
        <h4 style={{ margin: 0, padding: 0 }}>Registrierung</h4>
        Schritt {step + 1} von {stepComponents.length}: {title}
      </CardHeader>
      <CardBody>
        <Component handleChange={handleChange} errors={errors} />
        <GridContainer>
          <GridItem xs={12}>
            {step >= 1 && step < stepComponents.length - 1 && (
              <Button onClick={prevStep}>
                zurück
              </Button>
            )}
            {step < stepComponents.length && nextButtonLabel && (
              <Button onClick={nextStep} color="success">
                { nextButtonLabel }
              </Button>
            )}
          </GridItem>
        </GridContainer>
      </CardBody>
    </Card>
  );
};

export default RegisterSlim;
