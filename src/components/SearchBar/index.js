import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import CategorySelect from "./CategorySelect";
import SearchName from "./SearchName";

const SearchBar = ({ categories, handleCategoriesChange, searchName, names }) => {



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
      <SearchName
      names={names}
      searchName={searchName}
      />
    </Box>
  );
};

export default SearchBar;
