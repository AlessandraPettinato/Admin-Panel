import mongoose from "mongoose";

const PolicySchema = new mongoose.Schema({
	id: { type: String },
	customer: [
		{
			firstName: { type: String },
			lastName: { type: String },
			dateOfBirth: { type: String },
		},
	],
	provider: String,
	insuranceType: String,
	status: String,
	policyNumber: String,
	startDate: String,
	endDate: String,
	createdAt: String,
});

export const PolicyModel = mongoose.model("policies", PolicySchema);
