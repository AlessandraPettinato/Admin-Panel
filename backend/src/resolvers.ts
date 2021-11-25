import { PolicyModel } from "./models/PolicyModel";
import { Policy } from "./types/PolicyType";

export const resolvers = {
	Query: {
		getAllPolicies: async () => {
			const results = await PolicyModel.find({});
			return {
				results: results,
			};
		},
	},

	Mutation: {
		addNewPolicy: async (
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
			}: Policy
		) => {
			const { firstName, lastName, dateOfBirth }: any = customer;
			const newPolicy = await PolicyModel.create({
				id,
				customer: [
					{
						firstName: firstName,
						lastName: lastName,
						dateOfBirth: dateOfBirth,
					},
				],
				provider: provider,
				insuranceType: insuranceType,
				status: status,
				policyNumber: policyNumber,
				startDate: startDate,
				endDate: endDate,
				createdAt: createdAt,
			});

			return newPolicy;
		},

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
			}: Policy
		) => {
			const { firstName, lastName, dateOfBirth }: any = customer;

			const filter = { id };

			const update = {
				customer: [
					{
						firstName: firstName,
						lastName: lastName,
						dateOfBirth: dateOfBirth,
					},
				],
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
