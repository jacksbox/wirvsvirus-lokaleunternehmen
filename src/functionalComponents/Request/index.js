import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import StepOverview from "functionalComponents/Request/StepOverview";
import StepOrder from "functionalComponents/Request/StepOrder";
import StepSlot from "functionalComponents/Request/StepSlot";

const styles = theme => ({
  cardTitle: {
    margin: 0
  }
});
const useStyles = makeStyles(styles);

const steps = {
  0: StepOverview,
  1: StepOrder,
  2: StepSlot,
  3: StepOverview
}

const Request = ({ requestStep, nextStep, prevStep, handleChange, unternehmen, formValues, day, handleDayChange }) => {
  const classes = useStyles();
  const StepComponent = steps[requestStep]
  return (
    <Card>
      <CardHeader color="info">
        <h4 className={classes.cardTitle}>
          <strong>{unternehmen.name}</strong>
        </h4>
      </CardHeader>
      <CardBody>
        <StepComponent
          displayThankYou={requestStep === 3}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          unternehmen={unternehmen}
          formValues={formValues}
          day={day}
          handleDayChange={handleDayChange}
        />
      </CardBody>
    </Card>
  );
};

export default Request;
