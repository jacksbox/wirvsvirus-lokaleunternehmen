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
                     placeholderColor: "grey"}
                    }
              
            />
       

    );
  }
}

export default Search;