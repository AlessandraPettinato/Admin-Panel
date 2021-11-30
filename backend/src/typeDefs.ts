import { gql } from "apollo-server-express";

export const typeDefs = gql`
	scalar Date

	type Policy {
		id: ID
		customer: Customer
		provider: String
		insuranceType: InsuranceType
		status: PolicyStatus
		policyNumber: String
		startDate: Date
		endDate: Date
		createdAt: Date
	}

	enum InsuranceType {
		LIABILITY
		HOUSEHOLD
		HEALTH
	}

	enum PolicyStatus {
		ACTIVE
		PENDING
		CANCELLED
		DROPPED_OUT
	}

	type Customer {
		firstName: String
		lastName: String
		dateOfBirth: Date
	}

	type PolicyList {
		results: [Policy]
	}

	type Query {
		getAllPolicies(limit: Int): PolicyList
	}

	input CustomerInput {
		firstName: String
		lastName: String
		dateOfBirth: Date
	}

	type Mutation {
		updatePolicy(
			id: ID
			customer: CustomerInput
			provider: String
			insuranceType: InsuranceType
			status: PolicyStatus
			policyNumber: String
			startDate: Date
			endDate: Date
			createdAt: Date
		): Policy
	}
`;

export {};
