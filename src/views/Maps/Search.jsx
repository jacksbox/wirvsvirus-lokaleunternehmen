import React, { Component } from 'react';

import Select from "react-select"

class Search extends Component {

  constructor() {
        super();
        this.state = {
          multiValue: [],
          options: [
            { value: "LEB", label: "Lebensmittel" },
            { value: "BAE", label: "Bäckerei" },
            { value: "FLE", label: "Fleischerei" },
            { value: "GET", label: "Getränke" },
            { value: "DRO", label: "Drogerie" },
            { value: "HWO", label: "Haushalt & Wohnen" },
            { value: "ELE", label: "Elektronik" },
            { value: "SPO", label: "Sport" },
            { value: "WEB", label: "Werkeln & Basteln" },
            { value: "UNT", label: "Unterhaltung" },
            { value: "MOD", label: "Mode" },
            { value: "APO", label: "Apotheke" },
            { value: "ZEI", label: "Zeitungen & Kioskn" },
            { value: "BUE", label: "Bücher" },
            { value: "TIE", label: "Tierbedarf" },
            { value: "BLU", label: "Blumenladen" },
            { value: "OUT", label: "Outdoor" },
            { value: "SON", label: "Sonstiges" },
            { value: "RAU", label: "Raucherbedarf" },
            { value: "SPI", label: "Spielwaren" },
            { value: "SCH", label: "Schuhe" }
          ]
        };
    
        this.handleMultiChange = this.handleMultiChange.bind(this);
        
      }

      handleMultiChange(option) {
        this.setState(state => {
          return {
            multiValue: option
          };
        }, ()=>this.props.filterValue(this.state.multiValue));

        
      }

    render() {
        return (
            <div className="search-panel">
                <div>
            <label>Suche</label>
            <input className="select__control css-yk16xz-control"></input></div>

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