/**
 * @flow
 * @relayHash a3c644155a889047e4d3d33f755ff24b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type pagesQueryVariables = {||};
export type pagesQueryResponse = {|
  +hello: ?string,
  +locationsQuery: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: ?string,
      |}
    |}>
  |},
|};
export type pagesQuery = {|
  variables: pagesQueryVariables,
  response: pagesQueryResponse,
|};
*/


/*
query pagesQuery {
  hello
  locationsQuery(term: "Barcelona") {
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
    "name": "hello",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "locationsQuery",
    "storageKey": "locationsQuery(term:\"Barcelona\")",
    "args": [
      {
        "kind": "Literal",
        "name": "term",
        "value": "Barcelona",
        "type": "String!"
      }
    ],
    "concreteType": "LocationConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "LocationEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Location",
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
    "name": "pagesQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "pagesQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "pagesQuery",
    "id": null,
    "text": "query pagesQuery {\n  hello\n  locationsQuery(term: \"Barcelona\") {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '47996e180ffa788a8f74fd799fcb49ae';
module.exports = node;
