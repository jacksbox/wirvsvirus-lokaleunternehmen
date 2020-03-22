import React, { Component } from "react";

import axios from "axios";

import { Map, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet";
import Search from "./Search";

import db from "./db.json";
import { LeafletConsumer } from "react-leaflet";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  searchbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    '& $label': {
      fontWeight: 'bold',
      color: '#000'
    }
  }
}

const L = require("leaflet");

let redIcon = new L.Icon({
  iconUrl:
    "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

class HereMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      circles: [],
      circlesArray: [],
      points: false,
      currentLat: 50,
      currentLong: 10,
      radius: 2
    };

    this.setCurrentPosition = this.setCurrentPosition.bind(this);
    this.filterValue = this.filterValue.bind(this);
  }

  componentWillMount() {
    /* let arr = this.state.circlesArray;
    if (this.props.data && this.props.data[0]) arr.push(this.props.data[0]);
    this.setState({ circlesArray: arr });
    console.log("circle array", this.state.circlesArray);*/
    /*if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setCurrentPosition)}*/
  }

  filterValue(value) {
    console.log("filter value", value);
    this.setState({ filterValue: value });
  }

  setCurrentPosition(position) {
    console.log("GOT POSITION", position.coords.longitude);

    this.setState({
      currentLat: position.coords.latitude,
      currentLong: position.coords.longitude
    });
  }

  componentDidMount() {
    axios
      .get("https://nameless-retreat-67960.herokuapp.com/unternehmen")
      .then(res => {
        console.log("Got data", res);
        this.setState({ data: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    let markers;

    if (this.state.data) {
      let data = this.state.data;
      if (this.state.filterValue) {
        let filteredKats = this.state.filterValue.map(el => el.value);
        data = data.filter(el => filteredKats.includes(el.ober_kategorie));
      }
      markers = data.map(u => {
        let greenIcon = new L.Icon({
          iconUrl: require(`./icons/${u.ober_kategorie}.png`),
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        });

        return (
          <Marker
            position={[parseFloat(u.langitude), parseFloat(u.longitude)]}
            icon={greenIcon}
            onMouseOver={e => {
              e.target.openPopup();
            }}
            onMouseOut={e => {
              e.target.closePopup();
            }}
          >
            <Popup>
              <h3>{u.name}</h3>
              <button>Bestellen</button>
            </Popup>
          </Marker>
        );
      });
    }

    return (
      <div>
        <div className={this.props.classes.searchbar}>
          <Search filterValue={this.filterValue} />
        </div>
        <Map
          center={[45.11, 78.65]}
          zoom={14}
          maxZoom={16}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
        >
          <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
          {markers}
          <Marker
            icon={redIcon}
            position={[45.11, 78.65]}
            onMouseOver={e => {
              e.target.openPopup();
            }}
            onMouseOut={e => {
              e.target.closePopup();
            }}
          >
            <Popup>Your location</Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

export default withStyles(styles)(HereMap);
