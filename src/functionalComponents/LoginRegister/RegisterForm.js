import React from "react";
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import BusinessForm from 'functionalComponents/BusinessForm'
import PasswordForm from 'functionalComponents/PasswordForm'

import SuccessMessage from "./SuccessMessage";

const RegisterForm = ({ saved, handleChange, handleSubmit, errors }) => {

  if (saved) {
    return <SuccessMessage />;
  }

  return (
    <>
      <BusinessForm handleChange={handleChange} errors={errors} />
      <PasswordForm handleChange={handleChange} errors={errors} />
      <GridContainer>
        <GridItem xs={12}>
          <Button onClick={handleSubmit} color="success">
            Jetzt registrieren
          </Button>
        </GridItem>
      </GridContainer>
    </>
  );
};

export default RegisterForm;
