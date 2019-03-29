import React from "react";
import { Heading } from "@kiwicom/orbit-components";
import { graphql } from "@kiwicom/relay";

import QueryRenderer from "../src/relay/QueryRenderer";

const renderRelayResponse = props => {
  const edges = props.locationsQuery?.edges ?? [];
  return (
    <div>
      {props.hello}
      <div>Locations: </div>
      {edges.map(edge => (
        <div key={edge.node.id}>{edge.node.name}</div>
      ))}
    </div>
  );
};
const Index = () => (
  <>
    <Heading>Travel hackathon</Heading>
    <QueryRenderer
      query={graphql`
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
      `}
      render={renderRelayResponse}
    />
  </>
);

export default Index;
