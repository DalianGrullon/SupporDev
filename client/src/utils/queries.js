import { gql } from "@apollo/client";

// returns a requester with their corresponding requests
export const QUERY_REQUESTER = gql`
  query getRequester($id: ID!) {
    requester(_id: $id) {
      _id
      userName
      email
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
