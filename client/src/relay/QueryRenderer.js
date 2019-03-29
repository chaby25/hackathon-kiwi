import React from "react";
import { QueryRenderer as KiwiQueryRenderer } from "@kiwicom/relay";
import { Environment, Network, RecordSource, Store } from "relay-runtime";

import { inMemoryFetcher } from "./inMemoryFetcher";

const createInMemoryFetcher = () => {
  return function(request, variables) {
    return inMemoryFetcher(request.text, variables);
  };
};
const source = new RecordSource();
const store = new Store(source);
const network = Network.create(createInMemoryFetcher());

const environment = new Environment({
  network,
  store,
});

export default function QueryRenderer(props) {
  return (
    <KiwiQueryRenderer
      query={props.query}
      environment={environment}
      variables={props.variables}
      onResponse={props.render}
    />
  );
}
