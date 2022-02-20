import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/Resolvers.js";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

server.start(() => console.log("GraphQL server Running"));
