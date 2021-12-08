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

	enum Roles {
		ADMIN
		EDITOR
	}

	type User {
		id: ID
		email: String
		password: String
		roles: Roles
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
		registerUser(email: String, password: String): User
		login(email: String, password: String): User
	}
`;

export {};
