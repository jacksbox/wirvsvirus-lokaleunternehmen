import React, { Component } from "react";

import { CATEGORIES } from "consts";

import Select from "react-select";

import Grid from "@material-ui/core/Grid";

import { ReactSearchAutocomplete } from "react-search-autocomplete";

const initialState = {
  searchName: "",
  suggestions: [],
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleOnSearch = string => {
    if (!string) {
      this.props.handleOnSearch(null);
    }
  };

  handleOnSelect = item => {
    this.props.handleOnSearch(item);
  };

  render() {
    return (
      <ReactSearchAutocomplete
        items={this.props.companyNames}
        onSearch={this.handleOnSearch}
        onSelect={this.handleOnSelect}
        autoFocus
        placeholder={"Suche nach Namen"}
        showIcon={false}
        styling={{
          borderColor: "hsl(0,0%,80%)",
          height: "36px",
          borderRadius: "4px",
          borderWidth: "1px",
          backgroundColor: "white",
          boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",
          hoverBackgroundColor: "#eee",
          color: "#212121",
          fontSize: "16px",
          fontFamily: "Arial",
          iconColor: "grey",
          lineColor: "rgb(232, 234, 237)",
          placeholderColor: "grey",
        }}
      />
    );
  }
}

export default Search;
