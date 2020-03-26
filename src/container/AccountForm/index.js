import React from "react";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";

import Danger from "components/Typography/Danger.js";

import PasswordForm from "functionalComponents/PasswordForm";

const AccountForm = () => {
  const handleChange = () => {}
  const handleSubmit = () => {}
  const errors = []

  return (
    <>
      <GridContainer>
        <GridItem xs={12}>
          <h3>Passwort ändern</h3>
        </GridItem>
        <GridItem xs={6}>
          <CustomInput
            labelText="Passwort"
            id="password"
            formControlProps={{
              fullWidth: true,
              required: true
            }}
            inputProps={{
              name: "password",
              type: "password",
              onChange: handleChange
            }}
          />
          <i>min. 6 Zeichen</i>
          <br />
          {errors.includes("password") && (
            <Danger>Passwort wird benötigt.</Danger>
          )}
        </GridItem>
      </GridContainer>
      <PasswordForm handleChange={handleChange} errors={errors} newPassword />
      <GridContainer>
        <GridItem xs={12}>
          <Button onClick={handleSubmit} color="success">
            Neues Passwort speichern
          </Button>
        </GridItem>
      </GridContainer>
    </>
  );
};

export default AccountForm;
