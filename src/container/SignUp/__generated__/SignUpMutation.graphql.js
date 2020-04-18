/**
 * @flow
 * @relayHash 8cfebe366f23f8b5871798a244e0debf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type WeekdayType = "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday" | "%future added value";
export type CreateCompanyInput = {|
  name: string,
  address: string,
  email: string,
  description: string,
  location: any,
  categoryId: string,
  subCategoryIds?: ?$ReadOnlyArray<?string>,
  phone?: ?string,
  maxPerSlot?: ?number,
  businessHoursSet?: ?$ReadOnlyArray<?BusinessHoursInput>,
  clientMutationId?: ?string,
|};
export type BusinessHoursInput = {|
  start?: ?any,
  end?: ?any,
  weekday?: ?WeekdayType,
|};
export type SignUpMutationVariables = {|
  input: CreateCompanyInput
|};
export type SignUpMutationResponse = {|
  +createCompany: ?{|
    +clientMutationId: ?string
  |}
|};
export type SignUpMutation = {|
  variables: SignUpMutationVariables,
  response: SignUpMutationResponse,
|};
*/


/*
mutation SignUpMutation(
  $input: CreateCompanyInput!
) {
  createCompany(input: $input) {
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateCompanyInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createCompany",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateCompanyPayload",
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
    "name": "SignUpMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SignUpMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SignUpMutation",
    "id": null,
    "text": "mutation SignUpMutation(\n  $input: CreateCompanyInput!\n) {\n  createCompany(input: $input) {\n    clientMutationId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '27e96b4055f03b18629e176cec37049a';

module.exports = node;
