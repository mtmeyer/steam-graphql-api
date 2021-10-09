const { getSteamApp } = require("./steamAppResolver.js");

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLSchema,
} = require("graphql");

const PORT = 9000;

const app = express();

const steamAppType = new GraphQLObjectType({
  name: "SteamApp",
  description: "Game/app from steam",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    isFree: { type: GraphQLBoolean },
  },
});

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
