import React, { Component } from "react";

import { CATEGORIES } from "consts";

import Select from "react-select";

import Grid from "@material-ui/core/Grid";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      multiValue: [],
      options: CATEGORIES
    };

    this.handleMultiChange = this.handleMultiChange.bind(this);
  }

  handleMultiChange(option) {
    this.setState(
      state => {
        return {
          multiValue: option
        };
      },
      () => this.props.filterValue(this.state.multiValue)
    );
  }

  render() {
    return (
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <label>Suche</label>
            <input
              className="select__control css-yk16xz-control"
              style={{ width: '100%', padding: '5px 10px' }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <label>Kategorien</label>
            <Select
              isMulti
              name="colors"
              value={this.state.multiValue}
              options={this.state.options}
              onChange={this.handleMultiChange}
              className="basic-multi-select"
              classNamePrefix="select"
              style={{ width: '100%' }}
            />
          </Grid>
        </Grid>
    );
  }
}

export default Search;
