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
		$id: String
		$updatePolicyId: String
		$customer: CustomerInput
		$provider: String
		$insuranceType: String
		$status: String
		$policyNumber: String
		$startDate: String
		$endDate: String
		$createdAt: String
	) {
		updatePolicy(
			id: $id
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
