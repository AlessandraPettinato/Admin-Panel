const { ApolloServer }: any = require("apollo-server-express");
const express: any = require("express");
const dbconnection: any = require("./dbconnection");

import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

const port: number = 8080;

const startServer = async () => {
	const app = express();

	const apolloServer = new ApolloServer({ typeDefs, resolvers });

	await apolloServer.start();
	apolloServer.applyMiddleware({ app });

	await dbconnection;

	app.listen(port, () =>
		console.log(
			`Server up and running on port ${port}${apolloServer.graphqlPath}`
		)
	);
	console.log("Database connected");
};

startServer();
