// Define model types
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Developer {
    _id: ID
    userName: String
    firstName: String
    lastName: String
    email: String
    password: String
    contribution: [Contribution]
  }

  type Contribution {
    _id: ID
    title: String
    description: String
  }

  type Request {
    _id: ID
    title: String
    description: String
    requester: Requester
  }

  type Requester {
    _id: ID
    userName: String
    firstName: String
    lastName: String
    email: String
    password: String
    requests: [Request]
  }

  type developerAuth {
    token: ID
    developer: Developer
  }

  type requesterAuth {
    token: ID
    requester: Requester
  }

  type Query {
    requester(_id: ID!): Requester
    requests: [Request]
    request(_id: ID!): Request
  }

  type Mutation {
    addRequester(
      userName: String!
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): requesterAuth
    addDeveloper(
      userName: String!
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): developerAuth
    addRequest(title: String!, description: String!): Request
    requesterLogin(email: String!, password: String!): requesterAuth
    developerLogin(email: String!, password: String!): developerAuth
  }
`;



module.exports = typeDefs;
