import React, { Component, createRef } from "react";

import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import environment from "graphql/environment.js";

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

const initialState = {
  bounds: {
    type: "Polygon",
    coordinates: [[[0.0, 0.0], [0.0, 0.0], [0.0, 0.0], [0.0, 0.0], [0.0, 0.0]]]
  }
};

const gqlQuery = graphql`
  query MapsQuery($bounds: Geometry!) {
    allCompanies(location_Intersects: $bounds) {
      edges {
        node {
          geometry {
            coordinates
          }
          properties {
            name,
            category {
              slug
            }
          }
        }
      }
    }
  }
`;

const lngLatToArray = lngLat => {
  return [lngLat.lng, lngLat.lat];
};

class Maps extends Component {
  constructor(props) {
    super(props);
    this.mapRef = createRef();
    this.state = initialState;
  }

  componentDidMount() {
    this.updateBounds();
  }

  updateBounds = () => {
    if (this.mapRef && this.mapRef.current) {
      const bbox = this.mapRef.current.leafletElement.getBounds();
      const bounds = {
        type: "Polygon",
        coordinates: [
          [
            lngLatToArray(bbox.getSouthWest()),
            lngLatToArray(bbox.getNorthWest()),
            lngLatToArray(bbox.getNorthEast()),
            lngLatToArray(bbox.getSouthEast()),
            lngLatToArray(bbox.getSouthWest())
          ]
        ]
      };
      this.setState({ bounds });
    }
  };

  renderMarkers = edges =>
    edges.map(
      ({
        node: {
          geometry: {
            coordinates: [lng, lat]
          },
          properties: { name, category: { slug } }
        }
      }) => {
        let icon = new L.Icon({
          iconUrl: require(`assets/img/icons/${slug}.png`),
          shadowUrl: require(`assets/img/icons/SHADOW.png`),
          iconSize: [66 * 0.75, 94 * 0.75],
          iconAnchor: [24, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        });

        return (
          <Marker
            key={`${name}:${lat},${lng}`}
            position={[lat, lng]}
            icon={icon}
          />
        );
      }
    );

  renderMap = (
    { allCompanies: { edges } } = { allCompanies: { edges: [] } }
  ) => {
    const markers = edges ? this.renderMarkers(edges) : [];
    return (
      <Map
        center={[52.498588, 13.442352]}
        zoom={16}
        maxZoom={16}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
        style={{ height: "100vH" }}
        ref={this.mapRef}
        onViewportChanged={this.updateBounds}
      >
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        {markers}
      </Map>
    );
  };

  renderQueryResult = ({ error, props }) => {
    if (error) {
      console.log(error);
      return <div>Error!</div>;
    }
    if (!props) {
      return this.renderMap();
    }
    return this.renderMap(props);
  };

  render() {
    const { bounds } = this.state;

    return (
      <QueryRenderer
        environment={environment}
        query={gqlQuery}
        variables={{ bounds: JSON.stringify(bounds) }}
        render={resp => this.renderQueryResult(resp)}
      />
    );
  }
}

export default Maps;
