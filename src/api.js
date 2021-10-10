import express from "express";
import { GraphQLObjectType, GraphQLInt, GraphQLSchema } from "graphql";
import { graphqlHTTP } from "express-graphql";

import { getSteamApp } from "./steamAppResolver.js";
import { steamAppType } from "./steamAppType.js";

const PORT = 9000;

const app = express();

const rootQuery = new GraphQLObjectType({
  name: "RootQuery",
  description: "RootQuery",
  fields: {
    app: {
      type: steamAppType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, { id }) => getSteamApp(id),
    },
  },
});

const schema = new GraphQLSchema({ query: rootQuery });

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
