import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

import CategoryFilter from "./CategoryFilter";
import CompanyFilter from "./CompanyFilter";

const styles = theme => ({
  FilterBar: {
    position: "absolute",
    top: 60,
    right: 10,
    width: 270,
    maxWidth: 270,
    zIndex: 1000,
    [theme.breakpoints.down('xs')]: {
      top: 80,
      left: 10,
      width: 'auto',
      maxWidth: 'none'
    }
  }
})

const useStyles = makeStyles(styles);

const FilterBar = ({
  categories,
  handleCategoriesChange,
  handleOnSearch,
  companyNames,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.FilterBar}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={12}>
          <CompanyFilter
            companyNames={companyNames}
            handleOnSearch={handleOnSearch}
          />
        </Grid>
        <Grid item xs={6} sm={12}>
          <CategoryFilter
            categories={categories}
            handleCategoriesChange={handleCategoriesChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FilterBar;
