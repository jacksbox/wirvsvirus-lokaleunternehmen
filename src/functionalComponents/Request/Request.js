import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent"
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import StepOverview from "functionalComponents/StepOverview";
import StepOrder from "functionalComponents/StepOrder";
import StepSlot from "functionalComponents/StepSlot";
import StepSuccess from "functionalComponents/StepSuccess";

import { CATEGORIES } from "consts";

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

const Request = ({ requestStep, nextStep, prevStep, handleChange, unternehmen, formValues, day, handleDayChange, handleClose }) => {
  const StepComponent = steps[requestStep]
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {CATEGORIES.find(
            ({ value }) => value === unternehmen.ober_kategorie
          ).label}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {unternehmen.name}
        </Typography>
        <Divider />
      </CardContent>
      <CardContent>
        <StepComponent
          nextStep={nextStep}
          prevStep={prevStep}
          handleClose={handleClose}
          handleChange={handleChange}
          unternehmen={unternehmen}
          formValues={formValues}
          day={day}
          handleDayChange={handleDayChange}
        />
      </CardContent>
    </Card>
  );
};

export default Request;
