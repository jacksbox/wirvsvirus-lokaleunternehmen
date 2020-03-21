import React, { Component } from "react";
import HPlatform, {
  HMap,
  HMapPolyLine,
  HMapRoute,
  HMapCircle, HMapMarker
} from "react-here-map";
import axios from "axios";

import { Map, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet";
import Search from "./Search"

import db from "./db.json"
import { LeafletConsumer } from "react-leaflet";

const L = require('leaflet');


let greenIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  let redIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
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


    this.setCurrentPosition = this.setCurrentPosition.bind(this)
  }

  componentWillMount() {
    /* let arr = this.state.circlesArray;
    if (this.props.data && this.props.data[0]) arr.push(this.props.data[0]);
    this.setState({ circlesArray: arr });
    console.log("circle array", this.state.circlesArray);*/

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setCurrentPosition)}
    

  }

  setCurrentPosition(position){

    console.log("GOT POSITION", position.coords.longitude)

    this.setState({currentLat: position.coords.latitude, currentLong: position.coords.longitude})

  }

  componentDidMount() {

    

    /*axios
      .get(
        "https://route.ls.hereapi.com/routing/7.2/calculateroute.json?apiKey=jRnvr-8MEuEHcoK1BqobtLx6cyVLTsc79lRIeNjdZBM&routeattributes=shape&waypoint0=geo!52.5,13.4&waypoint1=geo!52.5,13.45&mode=fastest;car;traffic:disabled"
      )
      .then(data => {
        this.dataToMap(data);
      })
      .catch(err => console.log(err));*/
  }



  render() {
 



    let markers = db.api.unternehmen.map(u=>
      

     ( <Marker position={[u.latitude, u.longitude]} icon={greenIcon}>
      <Popup>
    <h3>{u.name}</h3>
    <button>Bestellen</button>
      </Popup>
    </Marker>)
         
      )

 



return (


  <div>
  <Search></Search>
<Map
        center={[this.state.currentLat, this.state.currentLong]}
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
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {markers}
        <Marker icon={redIcon} position={[this.state.currentLat, this.state.currentLong]}>
        <Popup>
            Your location
          </Popup> 
        </Marker>
      </Map></div>
    )

  }
}

export default HereMap;