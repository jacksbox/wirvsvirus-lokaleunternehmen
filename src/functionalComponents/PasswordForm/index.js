import React from "react";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Danger from "components/Typography/Danger.js";

const PasswordForm = ({ handleChange, errors, newPassword }) => {
  const labelPwd = newPassword ? 'Neues Passwort' : 'Passwort'
  const namePwd = newPassword ? 'newPassword' : 'password'
  const labelPwdConfirm = newPassword ? 'Neues Passwort bestätigen' : 'Passwort bestätigen'
  const namePwdConfirm = newPassword ? 'newPasswordConfirm' : 'passwordConfirm'
  return (
    <GridContainer>
      <GridItem xs={6} sm={6} md={6}>
        <CustomInput
          labelText={labelPwd}
          id={namePwd}
          formControlProps={{
            fullWidth: true,
            required: true
          }}
          inputProps={{
            type: "password",
            name: namePwd,
            onChange: handleChange
          }}
        />
        <i>min. 6 Zeichen</i>
        <br />
        {errors.includes(namePwd) && (
          <Danger>Passwort wird benötigt.</Danger>
        )}
        {errors.includes("passwordToShort") && (
          <Danger>Passwort ist zu kurz.</Danger>
        )}
      </GridItem>
      <GridItem xs={6} sm={6} md={6}>
        <CustomInput
          labelText={labelPwdConfirm}
          id={namePwdConfirm}
          formControlProps={{
            fullWidth: true,
            required: true
          }}
          inputProps={{
            type: "password",
            name: namePwdConfirm,
            onChange: handleChange
          }}
        />
        {errors.includes(namePwdConfirm) && (
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
