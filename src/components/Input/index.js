import React from "react";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const Input = ({
  id,
  defaultValue = null,
  value,
  type,
  select,
  options,
  required = false,
  labelText,
  helperText = "Bitte ausfüllen",
  handleChange,
  errors,
  size = "small",
  variant,
  fullWidth = false,
  multiline = false,
  rows = null
}) => {
  let error = false;
  if (errors && errors.length && errors.includes(id)) {
    error = true;
  }
  let inputType = 'text'
  if (select) {
    inputType = 'hidden'
  } else if (type) {
    inputType = type
  }

  let valueOrDefault = {};
  if (typeof value !== 'undefined' && value !== null) {
    valueOrDefault.value = value;
  } else if (defaultValue) {
    valueOrDefault.defaultValue = defaultValue;
  }

  return (
    <TextField
      id={id}
      select={select}
      {...valueOrDefault}
      required={required}
      label={labelText}
      helperText={error ? helperText : null}
      onChange={handleChange}
      error={error}
      variant={variant}
      fullWidth={fullWidth}
      size={size}
      multiline={multiline}
      rows={rows}
      inputProps={{
        name: id,
        type: inputType
      }}
    >
      {select && options && options.length
        ? options.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))
        : null}
    </TextField>
  );
};

export default Input;
