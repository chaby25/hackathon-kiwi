import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import {
  connectionDefinitions,
  connectionFromArray,
  connectionArgs,
} from "@kiwicom/graphql-utils";
import GlobalID from "@kiwicom/graphql-global-id";
import fetch from "@kiwicom/fetch";

const { API_KEY } = process.env;

const GraphQLocation = new GraphQLObjectType({
  name: "Location",

  fields: {
    id: GlobalID(({ id }) => id),
    name: {
      type: GraphQLString,
    },
  },
});

const { connectionType: LocationsConnection } = connectionDefinitions({
  nodeType: GraphQLocation,
});

export default {
  name: "LocationsQuery",
  type: LocationsConnection,
  args: {
    term: {
      type: GraphQLNonNull(GraphQLString),
    },
    ...connectionArgs,
  },
  resolve: async (_, args) => {
    const res = await fetch(
      `https://kiwicom-prod.apigee.net/locations/query?apikey=${API_KEY}&term=${
        args.term
      }`,
    );

    const json = await res.json();
    return connectionFromArray(json.locations, args);
  },
};
