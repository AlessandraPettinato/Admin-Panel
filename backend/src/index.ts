import { ApolloServer } from "apollo-server-express";
const express = require("express");

const typeDefs = require("./typeDefs.ts");
const resolvers = require("./resolvers.ts");

const startServer = async () => {
  const app = express(); 

  const apolloServer = new ApolloServer({typeDefs, resolvers}); 

  await apolloServer.start(); 
  apolloServer.applyMiddleware({app}); 

  app.listen(4000, () => console.log(`Server up and running on port 4000${apolloServer.graphqlPath}`))
};

startServer()