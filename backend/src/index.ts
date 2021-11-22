const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const dbmongoose = require("mongoose");
require('dotenv').config();

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const databaseURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster.zuufe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

dbmongoose.connect(
  databaseURL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => console.log("Database connected")
);

const port = 8080;

const startServer = async () => {
  const app = express();

  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(port, () => console.log(`Server up and running on port ${port}${apolloServer.graphqlPath}`))
};

startServer();