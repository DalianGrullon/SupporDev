import { gql } from "@apollo/client";

// returns a requester with their corresponding requests
export const QUERY_REQUESTER = gql`
  query getRequester($id: ID!) {
    requester(_id: $id) {
      _id
      userName
      email
      role
      requests {
        _id
        title
        description
      }
    }
  }
`;

// returns all requests with their corresponding requesters
export const QUERY_REQUESTS = gql`
  query getRequests {
    requests {
      _id
      title
      description
      requester {
        _id
        userName
        email
      }
    }
  }
`;

// returns all requests with their corresponding requesters
export const QUERY_REQUEST = gql`
  query getRequest($id: ID!) {
    request(_id: $id) {
      title
      description
      requester {
        userName
        email
      }
    }
  }
`;