import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import StepOverview from "functionalComponents/StepOverview";
import StepOrder from "functionalComponents/StepOrder";
import StepSlot from "functionalComponents/StepSlot";
import StepSuccess from "functionalComponents/StepSuccess";

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
  3: StepSuccess
}

const Request = ({ requestStep, nextStep, prevStep, handleChange, company, slots, formValues, day, handleDayChange, handleClose }) => {
  const classes = useStyles();
  const StepComponent = steps[requestStep]
  return (
    <Card>
      <CardHeader color="info">
        <h3 className={classes.cardTitle}>
          <strong>{company.properties.name}</strong>
        </h3>
      </CardHeader>
      <CardBody>
        <StepComponent
          nextStep={nextStep}
          prevStep={prevStep}
          handleClose={handleClose}
          handleChange={handleChange}
          company={company}
          slots={slots}
          formValues={formValues}
          day={day}
          handleDayChange={handleDayChange}
        />
      </CardBody>
    </Card>
  );
};

export default Request;
