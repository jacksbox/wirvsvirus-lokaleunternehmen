import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));

const CategorySelect = ({ categories }) => {
  const classes = useStyles();
  const [values, setValues] = useState([]);
  const handleChange = event => {
    const value = event.target.value;
    setValues(value);
  };
  const handleChipClick = id => event => {
    event.stopPropagation()
    const newValues = values.filter(value => value !== id)
    setValues(newValues);
  }
  console.log(categories, values)
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-mutiple-chip-label">Kategorie</InputLabel>
      <Select
        labelId="demo-mutiple-chip-label"
        id="demo-mutiple-chip"
        multiple
        value={values}
        onChange={handleChange}
        input={<Input id="select-multiple-chip" />}
        variant="outlined"
        renderValue={selected => (
          <div className={classes.chips}>
            {selected.map(value => {
              const {
                node: { id, name }
              } = categories.find(({ node: { id } }) => id === value);
              return <Chip key={id} label={name} className={classes.chip} onClick={handleChipClick(id)} />;
            })}
          </div>
        )}
      >
        {categories.map(({ node: { id, name } }) => (
          <MenuItem
            key={id}
            value={id}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategorySelect;
