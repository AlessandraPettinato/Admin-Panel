import { gql } from "@apollo/client";

export const QUERY_GET_ALL_POLICIES = gql`
	query PolicyList {
		getAllPolicies {
			results {
				id
				customer {
					firstName
					lastName
					dateOfBirth
				}
				provider
				insuranceType
				status
				policyNumber
				startDate
				endDate
				createdAt
			}
		}
	}
`;

export const UPDATE_POLICY = gql`
	mutation Mutation(
		$updatePolicyId: ID
		$customer: CustomerInput
		$provider: String
		$insuranceType: InsuranceType
		$status: PolicyStatus
		$policyNumber: String
		$startDate: Date
		$endDate: Date
		$createdAt: Date
	) {
		updatePolicy(
			id: $updatePolicyId
			customer: $customer
			provider: $provider
			insuranceType: $insuranceType
			status: $status
			policyNumber: $policyNumber
			startDate: $startDate
			endDate: $endDate
			createdAt: $createdAt
		) {
			customer {
				firstName
				lastName
				dateOfBirth
			}
			id
			provider
			insuranceType
			status
			policyNumber
			startDate
			endDate
			createdAt
		}
	}
`;
