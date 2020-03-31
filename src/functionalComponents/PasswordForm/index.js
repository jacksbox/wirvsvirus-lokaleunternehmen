import React from "react";

import Grid from "@material-ui/core/Grid";
import Input from "functionalComponents/Input";

const PasswordForm = ({ handleChange, errors, newPassword }) => {
  const labelPwd = newPassword ? 'Neues Passwort' : 'Passwort'
  const namePwd = newPassword ? 'newPassword' : 'password'
  const labelPwdConfirm = newPassword ? 'Neues Passwort bestätigen' : 'Passwort bestätigen'
  const namePwdConfirm = newPassword ? 'newPasswordConfirm' : 'passwordConfirm'
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sm={6} md={6}>
        <Input
          id={namePwd}
          labelText={labelPwd}
          helperText="Passwort übperprüfen"
          required
          type="password"
          variant="outlined"
          handleChange={handleChange}
          errors={errors}
          fullWidth
        />
        <p><i>Min. 6 Zeichen</i></p>
      </Grid>
      <Grid item xs={6} sm={6} md={6}>
        <Input
          id={namePwdConfirm}
          labelText={labelPwdConfirm}
          helperText="Passwörter stimmen nicht überein."
          required
          type="password"
          variant="outlined"
          handleChange={handleChange}
          errors={errors}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default PasswordForm;
