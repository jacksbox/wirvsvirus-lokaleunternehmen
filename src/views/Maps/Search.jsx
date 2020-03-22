import React, { Component } from "react";

import { CATEGORIES } from "consts";

import Select from "react-select";

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
      <div className="search-panel">
        <div>
          <label>Suche</label>
          <input className="select__control css-yk16xz-control"></input>
        </div>

        <div>
          <label>Kategorien</label>
          <Select
            isMulti
            name="colors"
            value={this.state.multiValue}
            options={this.state.options}
            onChange={this.handleMultiChange}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
      </div>
    );
  }
}

export default Search;
