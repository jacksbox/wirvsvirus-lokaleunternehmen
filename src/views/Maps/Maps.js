import React, { Component } from "react";

import Modal from "@material-ui/core/Modal";
import Request from "container/Request";

import axios from "axios";

import { Map, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet";
import Search from "./Search";

import db from "./db.json";
import { LeafletConsumer } from "react-leaflet";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  searchbar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    "& $label": {
      fontWeight: "bold",
      color: "#000"
    }
  }
};

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
      radius: 2,
      open: false,
      unternehmen: null
    };

    this.setCurrentPosition = this.setCurrentPosition.bind(this);
    this.filterValue = this.filterValue.bind(this);
    this.filterValue = this.filterValue.bind(this);
    this.searchName = this.searchName.bind(this)
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

  handleOpenModal = () => {
    this.setState({ open: true });
  };

  handleCloseModal = () => {
    this.setState({ open: false });
  };


  searchName(name){
    this.setState({searchName: name})
  }

  render() {
    let markers;

    if (this.state.data) {
      let data = this.state.data;
   

      if (this.state.searchName && this.state.searchName!="alle"){

        data = data? data.filter(el => el.name==this.state.searchName.name) : this.state.data.filter(el => el.name==this.state.searchName.name)

      } else if (this.state.searchName==="alle"){
          data= this.state.data
      }

      
   if (this.state.filterValue) {
        let filteredKats = this.state.filterValue.map((el => el.value));
        data = data.filter(el => filteredKats.includes(el.ober_kategorie));
      }

      markers = data.map(u => {
        let greenIcon = new L.Icon({
          iconUrl: require(`./icons/${u.ober_kategorie}.png`),
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
          iconSize: [66 * 0.75, 94 * 0.75],
          iconAnchor: [24, 41],
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
            onClick={() => {
              this.setState({ unternehmen: u }, this.handleOpenModal);
            }}
          >
            <Popup>
              <h3>{u.name}</h3>
              {u.beschreibung && <p>{u.beschreibung.substr(0,50)}...</p>}
            </Popup>
          </Marker>
        );
      });
    }

    const { open, unternehmen } = this.state;

    

    return (
      <div>
        <div className={this.props.classes.searchbar} >
          <Search searchName={this.searchName} filterValue={this.filterValue} names={this.state.data? this.state.data.map((el, i)=>{return {"id": i, "name": el.name}}):[]}/>
        </div>
        <Map
          center={[49.794714, 9.932212]}
          zoom={16}
          maxZoom={16}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
          style={{ height: '100vH' }}
        >
          <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
          {markers}
          <Marker
            icon={redIcon}
            position={[49.795028, 9.931700]}
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
        <Modal open={open} onClose={this.handleCloseModal}>
          <div
            style={{
              position: 'absolute',
              maxWidth: "1000px",
              minWidth: "800px",
              top: '10%',
              left: "50%",
              transform: "translateX(-50%)"
            }}
          >
            <Request preUnternehmen={unternehmen} handleClose={this.handleCloseModal} />
          </div>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(HereMap);
