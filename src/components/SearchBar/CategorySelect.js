import React, { useState } from "react";

import Select from "react-select";

const CategorySelect = ({ categories, handleCategoriesChange }) => {
  const [value, setValue] = useState(null);

  const handleChange = values => {
    setValue(values);
    handleCategoriesChange(values ? values.map(({ value }) => value) : []);
  };

  return (
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
  );
};

export default CategorySelect;
