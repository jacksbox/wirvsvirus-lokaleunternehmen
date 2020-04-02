/**
 * @flow
 * @relayHash 551bfa0e6da23841e3a54e224c1f4860
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MapsCategoriesQueryVariables = {||};
export type MapsCategoriesQueryResponse = {|
  +allCategories: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +slug: string,
        +name: string,
      |}
    |}>
  |}
|};
export type MapsCategoriesQuery = {|
  variables: MapsCategoriesQueryVariables,
  response: MapsCategoriesQueryResponse,
|};
*/


/*
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allCategories",
    "storageKey": null,
    "args": null,
    "concreteType": "CategoryNodeConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "CategoryNodeEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "CategoryNode",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "slug",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MapsCategoriesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "MapsCategoriesQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "MapsCategoriesQuery",
    "id": null,
    "text": "query MapsCategoriesQuery {\n  allCategories {\n    edges {\n      node {\n        id\n        slug\n        name\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '029f08ee56a55b28783fee6e5dcb90e4';

module.exports = node;
