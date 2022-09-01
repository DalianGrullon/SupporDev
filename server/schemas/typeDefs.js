// Define model types
const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Developer {
  _id: ID
  username: String
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
}
 
type Requester {
  _id: ID
  username: String
  email: String
  request: [Request]
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
  developer(_id: ID!, userName: String!): [Developer]
  requester(_id: ID!, userName: String!): [Requester]
  requests: [Request]
  contribution: [Contribution]
}

type Mutation {
  developerLogin(userName: String!, password: String!): developerAuth
  requesterLogin(userName: String!, password: String!): requesterAuth
  addDeveloper(userName: String!, firstName: String!, lastName: String!, email: String!, password: String!): developerAuth
  addRequester(userName: String!, firstName: String!, lastName: String!, email: String!, password: String!): requesterAuth
  addContribution(userName: String!,  _id: ID!): Developer
  addRequest(title: String!, description: String!, _id: ID!): Request
  updateRequest(_id: ID!, title: String!, description: String!): Request
  deleteRequest(_id: ID!, title: String!, description: String!): Request
}
`;

module.exports = typeDefs;
