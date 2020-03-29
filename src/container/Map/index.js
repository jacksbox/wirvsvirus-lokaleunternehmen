import React from "react";

import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import environment from "graphql/environment.js";

const Map = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query MapQuery {
          allCompanies {
            edges {
              node {
                geometry {
                  coordinates
                }
                properties {
                  name
                  active
                }
              }
            }
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          console.log(error);
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        console.log(props);
        return <></>;
      }}
    />
  );
};

export default Map;
