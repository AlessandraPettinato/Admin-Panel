const { ApolloServer }: any = require("apollo-server-express");
const express: any = require("express");
const dbconnection: any = require("./dbconnection");

const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import { UserModel } from "./models/UserModel";

const port: number = 8080;

const startServer = async () => {
	const corsOptions = {
		origin: "http://localhost:3000/",
		credentials: true,
	};

	const app = express();

	app.use(cors(corsOptions));
	app.use(
		express.urlencoded({
			extended: true,
		})
	);

	const ADMIN_KEY = "adminSuperSecretKey!";

	app.post("/", async (req: any, res: any) => {
		const { email, password } = req.body;
		const loginUser: any = UserModel.find({ email: email, password: password });

		if (!loginUser) {
			res.status(404).send({
				success: false,
				message: `Could not find account: ${email}`,
			});
			return;
		}

		const match = await bcrypt.compare(password, loginUser.password);
		if (!match) {
			res.status(401).send({
				success: false,
				message: "Incorrect credentials",
			});
			return;
		}

		const token = jwt.sign(
			{ email: loginUser.email, id: loginUser.id },
			ADMIN_KEY
		);

		res.send({
			success: true,
			token: token,
		});
	});

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
