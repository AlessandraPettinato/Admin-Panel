import { gql } from "apollo-server-express";

export const typeDefs = gql`
# scalar Date

type Policy {
  id: ID
  customer: [Customer]
  provider: String
  insuranceType: String
  status: String
  policyNumber: String
  startDate: String
  endDate: String
  createdAt: String
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
`;

export { }