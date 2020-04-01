import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import StepOverview from "functionalComponents/StepOverview";
import StepOrder from "functionalComponents/StepOrder";
import StepSlot from "functionalComponents/StepSlot";
import StepSuccess from "functionalComponents/StepSuccess";

const steps = {
  0: StepOverview,
  1: StepOrder,
  2: StepSlot,
  3: StepSuccess
};

const Request = ({ requestStep, company, ...rest }) => {
  const StepComponent = steps[requestStep];
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {company.properties.category.name}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {company.properties.name}
        </Typography>
        <Divider />
      </CardContent>
      <CardContent>
        <StepComponent company={company} {...rest} />
      </CardContent>
    </Card>
  );
};

export default Request;
