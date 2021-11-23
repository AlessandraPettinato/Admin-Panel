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
`