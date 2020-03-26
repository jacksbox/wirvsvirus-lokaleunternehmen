import React from "react";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Danger from "components/Typography/Danger.js";

const PasswordForm = ({ handleChange, errors, newPassword }) => {
  return (
    <GridContainer>
      <GridItem xs={6} sm={6} md={6}>
        <CustomInput
          labelText={newPassword ? 'Neues Passwort' : 'Passwort'}
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
        {errors.includes("passwordToShort") && (
          <Danger>Passwort ist zu kurz.</Danger>
        )}
      </GridItem>
      <GridItem xs={6} sm={6} md={6}>
        <CustomInput
          labelText={newPassword ? 'Neues Passwort bestätigen' : 'Passwort bestätigen'}
          id="passwordConfirm"
          formControlProps={{
            fullWidth: true,
            required: true
          }}
          inputProps={{
            type: "password",
            name: "passwordConfirm",
            onChange: handleChange
          }}
        />
        {errors.includes("password") && (
          <Danger>Bitte bestätigen Sie ihr gewähltes Passwort.</Danger>
        )}
      </GridItem>
      <GridItem xs={12}>
        {errors.includes("noMatch") && (
          <Danger>Passwörter stimmen nicht überein.</Danger>
        )}
      </GridItem>
    </GridContainer>
  );
};

export default PasswordForm;
