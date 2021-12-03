import { PolicyModel } from "./models/PolicyModel";
import { UserModel } from "./models/UserModel";
import { PolicyType } from "./types/PolicyType";
import { UserType } from "./types/UserType";

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

export const resolvers = {
	InsuranceType,
	PolicyStatus,
	Query: {
		getAllPolicies: async () => {
			const results = await PolicyModel.find({});
			return {
				results: results,
			};
		},
		getAllUsers: async () => {
			const results = await UserModel.find({});
			return {
				results: results,
			};
		},
		getOneUser: async (_: any, { email, password }: UserType) => {
			const user = await UserModel.findOne({ email, password });
			return user;
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
			}: PolicyType
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

			let updatedPolicy = await PolicyModel.findOneAndUpdate(
				filter,
				{ $set: update },
				{ new: true }
			);

			return updatedPolicy;
		},
	},
};

export {};
