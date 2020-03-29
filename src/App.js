// App.js
import React from 'react';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import environment from 'graphql/environment.js'

export default class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery {
            allCategories {
              edges {
                node {
                  slug
                  name
                }
              }
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          console.log(error)
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          console.log(props)
          return props.allCategories.edges.map(({ node: { slug, name } }) => <div>{slug}: {name}</div>)
        }}
      />
    );
  }
}