import React, { Component, createRef } from "react";
import { QueryRenderer } from "react-relay";
import { fetchQuery } from 'relay-runtime';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import graphql from "babel-plugin-relay/macro";

import Modal from "@material-ui/core/Modal";

import RequestQueryContainer from "container/Request/RequestQueryContainer.js";
import SearchBar from "components/SearchBar";

import environment from "graphql/environment.js";

import L from "leaflet";

import ReactLeafletSearch from "react-leaflet-search";

const defaultZoom = 16

const redIcon = new L.Icon({
  iconUrl: require(`assets/img/icons/POSITION.png`),
  shadowUrl: require(`assets/img/icons/SHADOW.png`),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const initialState = {
  open: false,
  company: null,
  categories: [],
  selectedCategories: [],
  position: [52.498588, 13.442352],
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
          id
          geometry {
            coordinates
          }
          properties {
            name
            description
            category {
              id
              slug
            }
          }
        }
      }
    }
  }
`;
const categoriesGqlQuery = graphql`
  query MapsCategoriesQuery {
    allCategories {
      edges {
        node {
          id
          slug
          name
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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          this.setState({ position: [latitude, longitude] });
        }
      );
    }
    this.updateBounds();

    fetchQuery(environment, categoriesGqlQuery).then(
      (
        { allCategories: { edges: categories } } = {
          allCategories: { edges: [] }
        }
      ) => {
        this.setState({ categories });
      }
    );
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

  handleOpenModal = () => {
    this.setState({ open: true });
  };

  handleCloseModal = () => {
    this.setState({ open: false });
  };

  handleCategoriesChange = selectedCategories => {
    this.setState({ selectedCategories })
  }

  renderMarkers = edges => {
    const { selectedCategories } = this.state
    return edges.filter(({ node: { properties: { category: { id } } } }) => selectedCategories.length === 0 || selectedCategories.includes(id)).map(
      ({
        node: {
          id,
          geometry: {
            coordinates: [lng, lat]
          },
          properties: {
            name,
            description,
            category: { slug }
          }
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
            onMouseOver={e => {
              e.target.openPopup();
            }}
            onMouseOut={e => {
              e.target.closePopup();
            }}
            onClick={() => {
              this.setState({ companyId: id }, this.handleOpenModal);
            }}
          >
            <Popup>
              <h3>{name}</h3>
              {description && <p>{description.substr(0, 50)}...</p>}
            </Popup>
          </Marker>
        );
      }
    );
  }

  renderMap = (
    { allCompanies: { edges: companies } = { allCompanies: { edges: [] } } } = {
      allCompanies: { edges: [] }
    }
  ) => {
    const { position, open, companyId, categories } = this.state;
    const markers = companies ? this.renderMarkers(companies) : [];
    return (
      <>
        <SearchBar categories={categories} handleCategoriesChange={this.handleCategoriesChange} />
        <Map
          center={position}
          zoom={defaultZoom}
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
          <ReactLeafletSearch
            position="topright"
            zoom={defaultZoom}
            search={position}
            inputPlaceholder="Straße, PLZ..."
            openSearchOnLoad={true}
            markerIcon={redIcon}
            showPopup={false}
            closeResultsOnClick={true}
          />
        </Map>
        <Modal open={open} onClose={this.handleCloseModal}>
          <div
            style={{
              position: "absolute",
              maxWidth: "100%",
              width: "800px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <RequestQueryContainer
              companyId={companyId}
              handleClose={this.handleCloseModal}
            />
          </div>
        </Modal>
      </>
    );
  };

  renderQueryResult = ({ error, props }) => {
    if (error) {
      console.log(error);
      // TODO: just display an error notification on top the map
      return <div>Error!</div>;
    }
    return props ? this.renderMap(props) : this.renderMap();
  };

  render() {
    const { bounds } = this.state;

    return (
      <QueryRenderer
        environment={environment}
        fetchPolicy="store-and-network"
        query={gqlQuery}
        variables={{ bounds: JSON.stringify(bounds) }}
        render={resp => this.renderQueryResult(resp)}
      />
    );
  }
}

export default Maps;
