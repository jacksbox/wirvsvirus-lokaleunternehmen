import React, { Component } from "react";

import { CATEGORIES } from "consts";

import Select from "react-select";

import Grid from "@material-ui/core/Grid";

import { ReactSearchAutocomplete } from "react-search-autocomplete";



class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchName: "",
      
      suggestions: []
    };

   
    this.handleOnSearch = this.handleOnSearch.bind(this);
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleOnFocus = this.handleOnFocus.bind(this);
  


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





  render() {


    return (
      
       
            <ReactSearchAutocomplete
              items={this.props.names}
              onSearch={this.handleOnSearch}
              onSelect={this.handleOnSelect}
              onFocus={this.handleOnFocus}
              autoFocus
            />
       

    );
  }
}

export default Search;