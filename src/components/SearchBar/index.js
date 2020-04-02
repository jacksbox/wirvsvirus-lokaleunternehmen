import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import CategorySelect from "./CategorySelect";

const SearchBar = ({ categories, handleCategoriesChange }) => {
  return (
    <Box
      style={{
        position: "absolute",
        top: 60,
        right: 10,
        width: 270,
        maxWidth: 270,
        zIndex: 1000
      }}
    >
      <CategorySelect
        categories={categories}
        handleCategoriesChange={handleCategoriesChange}
      />
    </Box>
  );
};

export default SearchBar;
