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

	type User {
		id: ID
		email: String
		password: String
		token: String
	}

	type UserList {
		results: [User]
	}

	type PolicyList {
		results: [Policy]
	}

	type Query {
		getAllPolicies: PolicyList
		getAllUsers: UserList
		getOneUser(email: String, password: String): User
	}

	input CustomerInput {
		firstName: String
		lastName: String
		dateOfBirth: Date
	}

	input RegisterInput {
		email: String
		password: String
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
		registerUser(registerInput: RegisterInput): User
	}
`;

export {};
