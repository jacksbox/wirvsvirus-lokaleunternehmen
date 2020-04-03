import React from "react";

import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import Request from "container/Request";

import environment from "graphql/environment.js";

const gqlQuery = graphql`
  query RequestQueryContainerQuery($id: ID!) {
    company(id: $id) {
      id
      geometry {
        coordinates
      }
      properties {
        email
        name
        address
        phone
        description
        category {
          name
        }
        subCategories {
          edges {
            node {
              name
            }
          }
        }
        timeslotSet {
          edges {
            node {
              id
              start
              end
              available
            }
          }
        }
      }
    }
  }
`;

const RequestQueryContainer = ({ companyId, handleClose }) => {
  return (
    <QueryRenderer
      environment={environment}
      fetchPolicy="store-and-network"
      query={gqlQuery}
      variables={{ id: companyId }}
      render={({ error, props }) => {
        if (error) {
          console.log(error);
          return null;
        }
        if (!props) {
          return "Loading";
        }
        const { company } = props;
        return <Request company={company} handleClose={handleClose} />;
      }}
    />
  );
};

export default RequestQueryContainer;
