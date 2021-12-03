import mongoose, { Schema } from "mongoose";
import { PolicyType } from "../types/PolicyType";

const PolicySchema: Schema<PolicyType> = new Schema({
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

export const PolicyModel: mongoose.Model<PolicyType> = mongoose.model(
	"policies",
	PolicySchema
);
