import React, { Component } from "react";

import Modal from "@material-ui/core/Modal";
import Request from "container/Request";

import { Map, TileLayer, Marker, Popup, } from "react-leaflet";
import Search from "./Search";

import { withStyles } from "@material-ui/core/styles";

import apiClient from 'utils/apiClient'

import MSearch from "react-leaflet-search";



const styles = {
  searchbar: {
    position: "absolute",
    top: 0,
    left: '60px',
    right: '80px',
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
      currentLat: "",
      currentLong: "",
      radius: 2,
      open: false,
      unternehmen: null,
      zoom: 16,
      locationSearchUsed: false
    };

    this.setCurrentPosition = this.setCurrentPosition.bind(this);
    this.filterValue = this.filterValue.bind(this);
    this.filterValue = this.filterValue.bind(this);
    this.searchName = this.searchName.bind(this)
    this.onSelect = this.onSelect.bind(this)
  }

  componentWillMount() {
    /* let arr = this.state.circlesArray;
    if (this.props.data && this.props.data[0]) arr.push(this.props.data[0]);
    this.setState({ circlesArray: arr });
    console.log("circle array", this.state.circlesArray);*/
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setCurrentPosition)}
  }

  filterValue(value) {
    this.setState({ filterValue: value });
  }

  onSelect(e){
    if (e&&e.target&&e.target.getCenter())console.log("onmove", e.target.getCenter().lat, e.target.getCenter().lng)

    //use API here to find local shops nearby: 
  

  }

  setCurrentPosition(position) {
    console.log("GOT POSITION", position.coords.longitude);

    this.setState({
      currentLat: position.coords.latitude,
      currentLong: position.coords.longitude
    });
  }

  componentDidMount() {
    apiClient.instance
      .get("/unternehmen")
      .then(res => {
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

      markers = data.map((u, i) => {
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
            key={`${i}:${u.langitude},${u.longitude}`}
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


    let curMarker ; 

    console.log(this.state.currentLat, this.state.currentLong)

    
    if (!this.state.locationSearchUsed) curMarker= <Marker
      icon={redIcon}
      position={[this.state.currentLat, this.state.currentLong]}
      onMouseOver={e => {
        e.target.openPopup();
      }}
      onMouseOut={e => {
        e.target.closePopup();
      }}
    >
      <Popup>Your location</Popup>
    </Marker>

    return (
      <div>
        <div className={this.props.classes.searchbar} >
          <Search searchName={this.searchName} filterValue={this.filterValue} names={this.state.data? this.state.data.map((el, i)=>{return {"id": i, "name": el.name}}):[]}/>
        </div>
        <Map
          center={[this.state.currentLat, this.state.currentLong]}
          zoom={this.state.zoom}
          maxZoom={this.state.zoom+2}
          minZoom={this.state.zoom-2}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          
          animate={true}
          easeLinearity={0.35}
          style={{ height: '100vH' }}
          onMoveEnd={this.onSelect}
          dragging={true}
          
        >
          <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
          {markers}
          {curMarker}
          <MSearch position="topleft"  markerIcon={redIcon} closeResultsOnClick={true} inputPlaceholder="Suche nach einem Ort"/>;
          
        </Map>
        <Modal open={open} onClose={this.handleCloseModal}>
          <div
            style={{
              position: 'absolute',
              maxWidth: "100%",
              width: "800px",
              top: '50%',
              left: "50%",
              transform: "translate(-50%, -50%)"
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
