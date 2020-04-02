/**
 * @flow
 * @relayHash d5c667714000579a557097acad8c88f3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignUpCategoriesQueryVariables = {||};
export type SignUpCategoriesQueryResponse = {|
  +allCategories: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: string,
      |}
    |}>
  |},
  +allSubCategories: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: string,
      |}
    |}>
  |},
|};
export type SignUpCategoriesQuery = {|
  variables: SignUpCategoriesQueryVariables,
  response: SignUpCategoriesQueryResponse,
|};
*/


/*
query SignUpCategoriesQuery {
  allCategories {
    edges {
      node {
        id
        name
      }
    }
  }
  allSubCategories {
    edges {
      node {
        id
        name
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
    "name": "name",
    "args": null,
    "storageKey": null
  }
],
v1 = [
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
            "selections": (v0/*: any*/)
          }
        ]
      }
    ]
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allSubCategories",
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
            "selections": (v0/*: any*/)
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
    "name": "SignUpCategoriesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SignUpCategoriesQuery",
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "SignUpCategoriesQuery",
    "id": null,
    "text": "query SignUpCategoriesQuery {\n  allCategories {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n  allSubCategories {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'da137cff944463611917f48fa65264a4';

module.exports = node;
