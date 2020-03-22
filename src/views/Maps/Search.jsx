import React, { Component } from "react";

import { CATEGORIES } from "consts";

import Select from "react-select";

import Grid from "@material-ui/core/Grid";

import { ReactSearchAutocomplete } from "react-search-autocomplete";

const items = [
  {
    id: 0,
    name: "Cobol",
  },
  {
    id: 1,
    name: "JavaScript"
  },
  {
    id: 2,
    name: "Basic"
  },
  {
    id: 3,
    name: "PHP"
  },
  {
    id: 4,
    name: "Java"
  },
]

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchName: "",
      multiValue: [],
      suggestions: [],
      options: CATEGORIES,
      value: ""
    };

    this.handleMultiChange = this.handleMultiChange.bind(this);
    this.handleOnSearch = this.handleOnSearch.bind(this);
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleOnFocus = this.handleOnFocus.bind(this);


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

 handleOnSearch = (string, cached) => {
    // onSearch returns the string searched and if
    // the values are cached. If the values are cached
    // "cached" contains the cached values, if not, returns false
    console.log(string, cached);
  }

 handleOnSelect = item => {
    // the item selected
    this.props.searchName(item);
    console.log(item);
  }

  handleOnFocus = () => {
    console.log("Focused");
  }


  searchName(name){
    this.setState({searchName: name})
  }



  render() {

    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "",
      value,
      onChange: this.onChange
    };

    return (
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <label>Suche</label>
            <ReactSearchAutocomplete
              items={this.props.names}
              onSearch={this.handleOnSearch}
              onSelect={this.handleOnSelect}
              onFocus={this.handleOnFocus}
              autoFocus
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
