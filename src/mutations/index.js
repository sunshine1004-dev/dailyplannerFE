import { gql } from "apollo-boost";

export const loginMutation = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      email
      role
      error
    }
  }
`;

export const registerMutation = gql`
  mutation ($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      token
      email
      role
      error
    }
  }
`;
