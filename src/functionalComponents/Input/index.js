import React from "react";

import TextField from "@material-ui/core/TextField";

const Input = ({
  id,
  defaultValue,
  required = false,
  labelText,
  helperText = 'Bitte ausfüllen',
  handleChange,
  errors,
  size = 'small',
  fullWidth = false
}) => {

  let error = false;
  if (errors.includes(id)) {
    error = true;
  }

  return (
    <TextField
      id={id}
      defaultValue={defaultValue}
      required={required}
      label={labelText}
      helperText={error ? helperText : null}
      onChange={handleChange}
      error={error}
      fullWidth={fullWidth}
      size={size}
      inputProps={{
        name: id
      }}
    />
  );
};

export default Input;
