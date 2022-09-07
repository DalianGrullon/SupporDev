import { gql } from "@apollo/client";

export const ADD_REQUESTER = gql`
  mutation addRequester(
    $userName: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $role: String!
  ) {
    addRequester(
      userName: $userName
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      role: $role
    ) {
      token
    }
  }
`;

export const ADD_REQUEST = gql`
  mutation addRequest($title: String!, $description: String!) {
    addRequest(
      title: $title
      description: $description
      roler: $role
    ) {
      _id
      title
      description
      requester {
        userName
        email
      }
    }
  }
`;

export const REQUESTER_LOGIN = gql`
  mutation requesterLogin($email: String!, $password: String!) {
    requesterLogin(email: $email, password: $password) {
      token
      requester {
        _id
      }
    }
  }
`;

export const ADD_DEVELOPER = gql`
  mutation addDeveloper(
    $userName: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $role: String!
  ) {
    addDeveloper(
      userName: $userName
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      role: $role
    ) {
      token
    }
  }
`;

export const DEVELOPER_LOGIN = gql`
  mutation developerLogin($email: String!, $password: String!) {
    developerLogin(email: $email, password: $password) {
      token
      developer {
        _id
      }
    }
  }
`;
