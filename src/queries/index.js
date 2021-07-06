import { gql } from "apollo-boost";

export const meQuery = gql`
  query {
    me {
      _id
      email
      role
    }
  }
`;

export const meQueryStr = `
  query {
    me {
      _id
      email
      role
    }
  }
`;
