/**
 * @flow
 * @relayHash 9eb65021ddde807ce947e93adac52878
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RequestQueryContainerQueryVariables = {|
  id: string
|};
export type RequestQueryContainerQueryResponse = {|
  +company: ?{|
    +id: string,
    +geometry: {|
      +coordinates: ?any
    |},
    +properties: ?{|
      +email: string,
      +name: string,
      +address: string,
      +phone: string,
      +description: string,
      +category: {|
        +name: string
      |},
      +subCategories: {|
        +edges: $ReadOnlyArray<?{|
          +node: ?{|
            +name: string
          |}
        |}>
      |},
      +timeslotSet: {|
        +edges: $ReadOnlyArray<?{|
          +node: ?{|
            +id: string,
            +start: any,
            +end: any,
          |}
        |}>
      |},
    |},
  |}
|};
export type RequestQueryContainerQuery = {|
  variables: RequestQueryContainerQueryVariables,
  response: RequestQueryContainerQueryResponse,
|};
*/


/*
query RequestQueryContainerQuery(
  $id: ID!
) {
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
        id
      }
      subCategories {
        edges {
          node {
            name
            id
          }
        }
      }
      timeslotSet {
        edges {
          node {
            id
            start
            end
          }
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
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
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "address",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "phone",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v9 = [
  (v5/*: any*/)
],
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "timeslotSet",
  "storageKey": null,
  "args": null,
  "concreteType": "TimeSlotNodeConnection",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "TimeSlotNodeEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "TimeSlotNode",
          "plural": false,
          "selections": [
            (v2/*: any*/),
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "start",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "end",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
},
v11 = [
  (v5/*: any*/),
  (v2/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RequestQueryContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "company",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CompanyNode",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "properties",
            "storageKey": null,
            "args": null,
            "concreteType": "CompanyProperties",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "category",
                "storageKey": null,
                "args": null,
                "concreteType": "CategoryNode",
                "plural": false,
                "selections": (v9/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "subCategories",
                "storageKey": null,
                "args": null,
                "concreteType": "SubCategoryNodeConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SubCategoryNodeEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SubCategoryNode",
                        "plural": false,
                        "selections": (v9/*: any*/)
                      }
                    ]
                  }
                ]
              },
              (v10/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RequestQueryContainerQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "company",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CompanyNode",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "properties",
            "storageKey": null,
            "args": null,
            "concreteType": "CompanyProperties",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "category",
                "storageKey": null,
                "args": null,
                "concreteType": "CategoryNode",
                "plural": false,
                "selections": (v11/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "subCategories",
                "storageKey": null,
                "args": null,
                "concreteType": "SubCategoryNodeConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SubCategoryNodeEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SubCategoryNode",
                        "plural": false,
                        "selections": (v11/*: any*/)
                      }
                    ]
                  }
                ]
              },
              (v10/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "RequestQueryContainerQuery",
    "id": null,
    "text": "query RequestQueryContainerQuery(\n  $id: ID!\n) {\n  company(id: $id) {\n    id\n    geometry {\n      coordinates\n    }\n    properties {\n      email\n      name\n      address\n      phone\n      description\n      category {\n        name\n        id\n      }\n      subCategories {\n        edges {\n          node {\n            name\n            id\n          }\n        }\n      }\n      timeslotSet {\n        edges {\n          node {\n            id\n            start\n            end\n          }\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a95f68776862222d496c7dbb24bce743';

module.exports = node;
