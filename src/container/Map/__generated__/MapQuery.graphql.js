/**
 * @flow
 * @relayHash 5a307dfc97a9262eaf72136844b6d12c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MapQueryVariables = {||};
export type MapQueryResponse = {|
  +allCompanies: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +properties: ?{|
          +name: string,
          +active: boolean,
        |}
      |}
    |}>
  |}
|};
export type MapQuery = {|
  variables: MapQueryVariables,
  response: MapQueryResponse,
|};
*/


/*
query MapQuery {
  allCompanies {
    edges {
      node {
        properties {
          name
          active
        }
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "properties",
  "storageKey": null,
  "args": null,
  "concreteType": "CompanyProperties",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "active",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MapQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allCompanies",
        "storageKey": null,
        "args": null,
        "concreteType": "CompanyNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "CompanyNodeEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "CompanyNode",
                "plural": false,
                "selections": [
                  (v0/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MapQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allCompanies",
        "storageKey": null,
        "args": null,
        "concreteType": "CompanyNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "CompanyNodeEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "CompanyNode",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "MapQuery",
    "id": null,
    "text": "query MapQuery {\n  allCompanies {\n    edges {\n      node {\n        properties {\n          name\n          active\n        }\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0eb709a6e174ab48d523813f8ed42063';

module.exports = node;
