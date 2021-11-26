import { gql } from "apollo-server-express";

export const typeDefs = gql`
	type Policy {
		id: ID
		customer: [Customer]!
		provider: String
		insuranceType: InsuranceType
		status: PolicyStatus
		policyNumber: String
		startDate: String
		endDate: String
		createdAt: String
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
		dateOfBirth: String
	}

	type PolicyList {
		results: [Policy]
	}

	type Query {
		getAllPolicies: PolicyList
	}

	input CustomerInput {
		firstName: String!
		lastName: String!
		dateOfBirth: String!
	}

	type Mutation {
		addNewPolicy(
			customer: CustomerInput
			id: ID
			provider: String
			insuranceType: String
			status: String
			policyNumber: String
			startDate: String
			endDate: String
			createdAt: String
		): Policy
		updatePolicy(
			id: ID
			customer: CustomerInput
			provider: String
			insuranceType: String
			status: String
			policyNumber: String
			startDate: String
			endDate: String
			createdAt: String
		): Policy
	}
`;

export {};
