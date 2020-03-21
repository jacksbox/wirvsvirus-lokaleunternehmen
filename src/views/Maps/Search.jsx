import React, { Component } from 'react';
import Select from "react-select";


class Search extends Component {

  constructor() {
        super();
        this.state = {
          multiValue: [],
          filterOptions: [
            { value: "foo", label: "Foo" },
            { value: "bar", label: "Bar" },
            { value: "bat", label: "Bat" }
          ]
        };
    
        
      }

    render() {
        return (
            <div className="search-panel">
                <div>
            <label>Suche</label>
            <input></input></div>

<div>
            <label>Kategorien</label>
            <input></input></div>

            </div>
        );
    }
}

export default Search;