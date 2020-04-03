import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import MuiAlert from '@material-ui/lab/Alert';

import StepOverview from "components/StepOverview";
import StepOrder from "components/StepOrder";
import StepSlot from "components/StepSlot";
import StepSuccess from "components/StepSuccess";

const steps = {
  0: StepOverview,
  1: StepOrder,
  2: StepSlot,
  3: StepSuccess
};

const Request = ({ requestStep, company, submitError,...rest }) => {
  const StepComponent = steps[requestStep];
  return (
    <Card style={{ maxHeight: '80vH', overflowY: 'scroll' }}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {company.properties.category.name}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {company.properties.name}
        </Typography>
        <Divider />
      </CardContent>
      {submitError &&  (
        <CardContent>
          <MuiAlert severity="error">{submitError.msg ? submitError.msg : 'Leider ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.'}</MuiAlert>
        </CardContent>
      )}
      <CardContent>
        <StepComponent company={company} {...rest} />
      </CardContent>
    </Card>
  );
};

export default Request;
