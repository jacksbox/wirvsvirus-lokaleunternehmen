import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import CategorySelect from "./CategorySelect";
import SearchName from "./SearchName";

const SearchBar = ({
  categories,
  handleCategoriesChange,
  handleOnSearch,
  companyNames,
}) => {
  return (
    <Box
      style={{
        position: "absolute",
        top: 60,
        right: 10,
        width: 270,
        maxWidth: 270,
        zIndex: 1000,
      }}
    >
      <CategorySelect
        categories={categories}
        handleCategoriesChange={handleCategoriesChange}
      />
      <SearchName companyNames={companyNames} handleOnSearch={handleOnSearch} />
    </Box>
  );
};

export default SearchBar;
