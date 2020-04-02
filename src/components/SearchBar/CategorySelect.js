import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Select from "react-select";

const CategorySelect = ({ categories, handleCategoriesChange }) => {
  const [value, setValue] = useState(null);

  const handleChange = values => {
    setValue(values);
    handleCategoriesChange(values ? values.map(({ value }) => value) : []);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} />
      <Grid item xs={12} sm={6}>
        <Select
          isMulti
          name="categories"
          value={value}
          onChange={handleChange}
          options={categories.map(({ node: { id, name } }) => ({
            value: id,
            label: name
          }))}
          classNamePrefix="ReactSelect"
          placeholder="Kategorien Filter"
        />
      </Grid>
    </Grid>
  );
};

export default CategorySelect;
