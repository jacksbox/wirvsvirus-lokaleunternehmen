import React from "react";

import Grid from "@material-ui/core/Grid";

import CustomInput from "components/CustomInput/CustomInput.js";
import Danger from "components/Typography/Danger.js";

const PasswordForm = ({ handleChange, errors, newPassword }) => {
  const labelPwd = newPassword ? 'Neues Passwort' : 'Passwort'
  const namePwd = newPassword ? 'newPassword' : 'password'
  const labelPwdConfirm = newPassword ? 'Neues Passwort bestätigen' : 'Passwort bestätigen'
  const namePwdConfirm = newPassword ? 'newPasswordConfirm' : 'passwordConfirm'
  return (
    <Grid container>
      <Grid item xs={6} sm={6} md={6}>
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
      </Grid>
      <Grid item xs={6} sm={6} md={6}>
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
      </Grid>
      <Grid item xs={12}>
        {errors.includes("noMatch") && (
          <Danger>Passwörter stimmen nicht überein.</Danger>
        )}
      </Grid>
    </Grid>
  );
};

export default PasswordForm;
