import React, { Component } from "react";
import HPlatform, {
  HMap,
  HMapPolyLine,
  HMapRoute,
  HMapCircle, HMapMarker
} from "react-here-map";
import axios from "axios";

const icon =
  '<svg width="24" height="24" ' +
  'xmlns="http://www.w3.org/2000/svg">' +
  '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
  'height="22" /><text x="12" y="18" font-size="12pt" ' +
  'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
  'fill="white">H</text></svg>';

class HereMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      circles: [],
      circlesArray: [],
      points: true,
      currentLat: 50,
      currentLong: 10,
      radius: 2

    };

    this.dataToMap = this.dataToMap.bind(this);
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

  // Define a callback function to process the routing response:
  dataToMap(data) {
    let result = data.data;
    var route, routeShape, startPoint, endPoint, linestring;
    if (result.response.route) {
      // Pick the first route from the response:
      route = result.response.route[0];

      // Pick the route's shape:
      routeShape = route.shape;
      console.log(routeShape);
      // Create a linestring to use as a point source for the route line
      /* linestring = new window.H.geo.LineString();

      // Push all the points in the shape into the linestring:
      routeShape.forEach(function(point) {
        var parts = point.split(",");
        linestring.pushLatLngAlt(parts[0], parts[1]);
      });

      // Retrieve the mapped positions of the requested waypoints:
      startPoint = route.waypoint[0].mappedPosition;
      endPoint = route.waypoint[1].mappedPosition;

      // Create a polyline to display the route:
      var routeLine = new window.H.map.Polyline(linestring, {
        style: { strokeColor: "blue", lineWidth: 3 }
      });

      // Create a marker for the start point:
      var startMarker = new window.H.map.Marker({
        lat: startPoint.latitude,
        lng: startPoint.longitude
      });

      // Create a marker for the end point:
      var endMarker = new window.H.map.Marker({
        lat: endPoint.latitude,
        lng: endPoint.longitude
      });
      if (routeShape) this.setState({ points: routeShape });
      else this.setState({ points: this.state.points });*/

      if (routeShape) {
        let array = routeShape.map(el => {
          let el2 = el.split(",");
          //console.log(el2);
          return { lat: el2[0], lng: el2[1] };
        });

        //console.log("array", array);

        this.setState({ points: array });
      }
      // Add the route polyline and the two markers to the map:
      /*map.addObjects([routeLine, startMarker, endMarker]);

      // Set the map's viewport to make the whole route visible:
      map.getViewModel().setLookAtData({ bounds: routeLine.getBoundingBox() });*/
    }
  }

  render() {
 


    let currentPositionCircle = (<HMapMarker
      coords={{
        lat: this.state.currentLat,
        lng: this.state.currentLong
      }}
      icon={icon}
      
    />)

    if (this.state.points) {
      return (
        <HPlatform
          app_id="2Ts3vDUTLPW8kNUtyFRY"
          app_code="MDivMVFtNkpim-dWuetlWw"
          useCIT
          useHTTPS
          interactive // Required for events
          includeUI
          includePlaces
        >
          <HMap
            style={{
              height: "90vh"
            }}
            mapOptions={{
              center: { lat: this.state.currrentLat, lng: this.state.currrentLong },
              zoom: 14
            }}
            useEvents // Required for events
            mapEvents={{
              pointerdown: e => console.log("Map Pointer Down", e)
            }} // event handlers
          >

          {currentPositionCircle}
 
          </HMap>
        </HPlatform>
      );
    } else {
      return <div>No data found</div>;
    }
  }
}

export default HereMap;