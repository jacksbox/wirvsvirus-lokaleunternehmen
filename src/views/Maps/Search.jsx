import React, { Component } from "react";

import { CATEGORIES } from "consts";

import Select from "react-select";

import Input from '@material-ui/core/Input';

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
    if (!string)this.props.searchName("alle")
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
      <div className="search-panel">
        <div>
          <label>Suche</label>
          {/*<input className="select__control css-yk16xz-control" style={{ width: '400px', padding: '5px 10px' }}></input>*/}
          <div className="searchbar" style={{height: 28}}>
          <ReactSearchAutocomplete
            items={this.props.names}
            onSearch={this.handleOnSearch}
            onSelect={this.handleOnSelect}
            onFocus={this.handleOnFocus}
            autoFocus
          /></div>
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
