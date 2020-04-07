import React, { Component } from "react";

import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

const initialState = {
  searchName: "",
  suggestions: [],
};

class CompanyFilter extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleOnSearch = (_, value) => {
    this.props.handleOnSearch(value ? value : null);
  };

  render() {
    return (
      <Autocomplete
        id="combo-box-demo"
        options={this.props.companyNames}
        getOptionLabel={option => option.name}
        style={{ background: "#fff" }}
        renderInput={params => (
          <TextField
            {...params}
            label="Filter (Name)"
            variant="outlined"
            size="small"
            fullWidth
          />
        )}
        onChange={this.handleOnSearch}
      />
    );
  }
}

export default CompanyFilter;
