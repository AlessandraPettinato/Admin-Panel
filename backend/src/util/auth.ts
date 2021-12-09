const { AuthenticationError } = require("apollo-server-express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (context: { req: { headers: { authorization: any } } }) => {
	const authHeader = context.req.headers.authorization;
	if (authHeader) {
		const token = authHeader.split("Bearer ")[1];
		if (token) {
			try {
				//verify given token using SECRET_KEY to get a decoded token
				const user = jwt.verify(token, `${process.env.SECRET_KEY}`);
				return user;
				//if fails, goes to catch and send error message
			} catch (err) {
				throw new AuthenticationError("Invalid/Expired token");
			}
		}
		throw new Error("Authentication token must be Bearer [token]");
	}
	throw new Error("Authorization header must be provided");
};
