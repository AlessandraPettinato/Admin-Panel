import mongoose from "mongoose";

const PolicySchema = new mongoose.Schema({
	id: { type: String },
	customer: {
		firstName: String,
		lastName: String,
		dateOfBirth: Date,
	},

	provider: String,
	insuranceType: String,
	status: String,
	policyNumber: String,
	startDate: Date,
	endDate: Date,
	createdAt: Date,
});

export const PolicyModel = mongoose.model("policies", PolicySchema);
