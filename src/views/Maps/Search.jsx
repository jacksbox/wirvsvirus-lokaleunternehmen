import React, { Component } from "react";

import { CATEGORIES } from "consts";

import Select from "react-select";

import Input from '@material-ui/core/Input';

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
          <input className="select__control css-yk16xz-control" style={{ width: '400px', padding: '5px 10px' }}></input>
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
