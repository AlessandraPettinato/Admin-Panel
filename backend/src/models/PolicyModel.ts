import mongoose from "mongoose";

const PolicySchema = new mongoose.Schema({
	id: { type: String },
	customer: {
		firstName: String,
		lastName: String,
		dateOfBirth: String,
	},

	provider: String,
	insuranceType: String,
	status: String,
	policyNumber: String,
	startDate: String,
	endDate: String,
	createdAt: String,
});

export const PolicyModel = mongoose.model("policies", PolicySchema);
