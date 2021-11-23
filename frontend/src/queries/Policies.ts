import { gql } from "@apollo/client";

export const QUERY_GET_ALL_POLICIES = gql`
query getAllPolicies {
    results {
      customer {
        firstName
        lastName
        dateOfBirth
      }
      provider
      id
      insuranceType
      status
      policyNumber
      startDate
      endDate
      createdAt
    }
  }
`