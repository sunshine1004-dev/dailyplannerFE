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

export const checkOrCreateSheetMutation = gql`
  mutation ($day: String!) {
    checkOrCreateSheet(day: $day) {
      id
    }
  }
`;

export const addDayMutation = gql`
  mutation ($date: Date!) {
    addDay(date: $date) {
      date
      createdAt
    }
  }
`;

export const updateSheetMutation = gql`
  mutation (
    $id: ID!
    $gratefulFor: String
    $research: String
    $reading: ReadingInputType
    $accountability: AccountabilityInputType
    $awake: String
    $asleep: String
  ) {
    updateSheet(
      id: $id
      gratefulFor: $gratefulFor
      research: $research
      reading: $reading
      accountability: $accountability
      awake: $awake
      asleep: $asleep
    ) {
      id
    }
  }
`;
