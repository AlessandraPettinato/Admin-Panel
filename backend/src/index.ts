import { ApolloServer } from "apollo-server-express";
const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const typeDefs = require("./typeDefs.ts");
const resolvers = require("./resolvers.ts");

const databaseURL = "mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}0.0jhze.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(
  databaseURL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => console.log("Database connected")
);

const startServer = async () => {
  const app = express();

  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => console.log(`Server up and running on port 4000${apolloServer.graphqlPath}`))
};

startServer();