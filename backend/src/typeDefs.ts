import { gql } from "apollo-server-express";

const typeDefs = gql`
scalar Date

type Policy {
  customer: [Customer]
  provider: String
  insuranceType: [InsuranceType]
  status: [PolicyStatus]
  policyNumber: String
  startDate: Date
  endDate: Date
  createdAt: Date
}

type Customer {
  firstName: String
  lastName: String
  dateOfBirth: Date
}

type InsuranceType {
  insuranceType: String
}

type PolicyStatus {
  policyStatus: String
}

  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
    policy: [Policy]
  }
`;

module.exports = typeDefs;