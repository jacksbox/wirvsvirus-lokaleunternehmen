/**
 * @flow
 * @relayHash f4ee5cf79c2a059e758462bc3d633fc3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MapsQueryVariables = {|
  bounds: any
|};
export type MapsQueryResponse = {|
  +allCompanies: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +geometry: {|
          +coordinates: ?any
        |},
        +properties: ?{|
          +name: string,
          +category: {|
            +slug: string
          |},
        |},
      |}
    |}>
  |}
|};
export type MapsQuery = {|
  variables: MapsQueryVariables,
  response: MapsQueryResponse,
|};
*/


/*
query MapsQuery(
  $bounds: Geometry!
) {
  allCompanies(location_Intersects: $bounds) {
    edges {
      node {
        geometry {
          coordinates
        }
        properties {
          name
          category {
            slug
            id
          }
        }
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "bounds",
    "type": "Geometry!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "location_Intersects",
    "variableName": "bounds"
  }
],
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "geometry",
  "storageKey": null,
  "args": null,
  "concreteType": "GeometryObjectType",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "coordinates",
      "args": null,
      "storageKey": null
    }
  ]
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MapsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allCompanies",
        "storageKey": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "properties",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CompanyProperties",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "category",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "CategoryNode",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/)
                        ]
                      }
                    ]
                  }
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
    "name": "MapsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allCompanies",
        "storageKey": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "properties",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CompanyProperties",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "category",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "CategoryNode",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          (v5/*: any*/)
                        ]
                      }
                    ]
                  },
                  (v5/*: any*/)
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
    "name": "MapsQuery",
    "id": null,
    "text": "query MapsQuery(\n  $bounds: Geometry!\n) {\n  allCompanies(location_Intersects: $bounds) {\n    edges {\n      node {\n        geometry {\n          coordinates\n        }\n        properties {\n          name\n          category {\n            slug\n            id\n          }\n        }\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9e68102ba4f90696cb71de04d5848999';

module.exports = node;
