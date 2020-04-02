/**
 * @flow
 * @relayHash cff9e25b0b974b6d1c305e6ae27d3773
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateRequestInput = {|
  companyId: string,
  slotId: string,
  customerEmail: string,
  text: string,
  clientMutationId?: ?string,
|};
export type RequestMutationVariables = {|
  input: CreateRequestInput
|};
export type RequestMutationResponse = {|
  +createRequest: ?{|
    +clientMutationId: ?string
  |}
|};
export type RequestMutation = {|
  variables: RequestMutationVariables,
  response: RequestMutationResponse,
|};
*/


/*
mutation RequestMutation(
  $input: CreateRequestInput!
) {
  createRequest(input: $input) {
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateRequestInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createRequest",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateRequestPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RequestMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RequestMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "RequestMutation",
    "id": null,
    "text": "mutation RequestMutation(\n  $input: CreateRequestInput!\n) {\n  createRequest(input: $input) {\n    clientMutationId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7749803f72de2264088b8b2c66b3c610';

module.exports = node;
