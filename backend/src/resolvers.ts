const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { AuthenticationError } = require("apollo-server-express");
require("dotenv").config();

import { PolicyModel } from "./models/PolicyModel";
import { UserModel } from "./models/UserModel";
import { PolicyType } from "./types/PolicyType";
import { UserType } from "./types/UserType";

const auth = require("./util/auth");

enum InsuranceType {
	LIABILITY = "Liability",
	HOUSEHOLD = "Household",
	HEALTH = "Health",
}

enum PolicyStatus {
	ACTIVE = "Active",
	PENDING = "Pending",
	CANCELLED = "Cancelled",
	DROPPED_OUT = "Dropped out",
}

enum Roles {
	ADMIN = "Admin",
	EDITOR = "Editor",
}

const generateToken = (user: any) => {
	return jwt.sign(
		{
			id: user.id,
			email: user.email,
			roles: user.roles,
		},
		`${process.env.SECRET_KEY}`,
		{ expiresIn: "1h" }
	);
};

export const resolvers = {
	InsuranceType,
	PolicyStatus,
	Roles,
	Query: {
		getAllPolicies: async (_: any, __: any, context: any) => {
			const user = auth(context);

			if (user.roles === "Admin") {
				const results = await PolicyModel.find({});
				return {
					results: results,
				};
			} else {
				throw new AuthenticationError(
					"You do not have the rights to perform this action"
				);
			}
		},
	},

	Mutation: {
		updatePolicy: async (
			_: any,
			{
				id,
				customer,
				provider,
				insuranceType,
				status,
				policyNumber,
				startDate,
				endDate,
				createdAt,
			}: PolicyType,
			context: any
		) => {
			const { firstName, lastName, dateOfBirth }: any = customer;

			const filter = { id };

			const update = {
				customer: {
					firstName: firstName,
					lastName: lastName,
					dateOfBirth: dateOfBirth,
				},
				provider: provider,
				insuranceType: insuranceType,
				status: status,
				policyNumber: policyNumber,
				startDate: startDate,
				endDate: endDate,
				createdAt: createdAt,
			};

			const user = auth(context);

			if (user.roles === "Admin") {
				let updatedPolicy = await PolicyModel.findOneAndUpdate(
					filter,
					{ $set: update },
					{ new: true }
				);

				return updatedPolicy;
			} else {
				throw new AuthenticationError(
					"You do not have the rights to perform this action"
				);
			}
		},

		registerUser: async (_: any, { email, password }: UserType) => {
			const user = await UserModel.findOne({ email });
			if (user) {
				throw new Error("One user already registered with this email");
			}

			password = await bcrypt.hash(password, 12);

			const newUser = await UserModel.create({
				email,
				password,
			});

			const res = newUser;
			const token = generateToken(res);

			return {
				email: res.email,
				password: res.password,
				id: res._id,
				token,
			};
		},
		login: async (_: any, { email, password }: UserType) => {
			const user = await UserModel.findOne({ email });

			if (!user) {
				throw new Error("User not found");
			}

			const match = await bcrypt.compare(password, user?.password);

			if (!match) {
				throw new Error("Password is incorrect");
			}

			const token = generateToken(user);

			return {
				email: user.email,
				password: user.password,
				roles: user.roles,
				id: user._id,
				token,
			};
		},
	},
};

export {};
