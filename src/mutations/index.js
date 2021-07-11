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
    $affirmation: String
    $callSos: String
    $research: String
    $reading: ReadingInputType
    $accountability: AccountabilityInputType
    $awake: String
    $asleep: String
  ) {
    updateSheet(
      id: $id
      gratefulFor: $gratefulFor
      affirmation: $affirmation
      callSos: $callSos
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

export const createTodoItemMutation = gql`
  mutation ($id: ID, $sheetId: ID!, $text: String, $type: String) {
    createTodoItem(id: $id, sheetId: $sheetId, text: $text, type: $type) {
      _id
      sheetId
      items {
        _id
        text
        completed
      }
      type
      startTime
      endTime
    }
  }
`;

export const updateTodoItemMutation = gql`
  mutation ($id: ID!, $todoItemId: ID!, $text: String!, $completed: Boolean!) {
    updateTodoItem(
      id: $id
      todoItemId: $todoItemId
      text: $text
      completed: $completed
    ) {
      _id
      sheetId
      items {
        _id
        text
        completed
      }
      type
      startTime
      endTime
    }
  }
`;

export const deleteTodoItemMutation = gql`
  mutation ($id: ID!, $todoItemId: ID!) {
    deleteTodoItem(id: $id, todoItemId: $todoItemId) {
      _id
      sheetId
      items {
        _id
        text
        completed
      }
      type
      startTime
      endTime
    }
  }
`;

export const updateTodoOptionsMutation = gql`
  mutation ($id: ID!, $startTime: String, $endTime: String) {
    updateTodoOptions(id: $id, startTime: $startTime, endTime: $endTime) {
      _id
      sheetId
      items {
        _id
        text
        completed
      }
      type
      startTime
      endTime
    }
  }
`;

export const createExpenseMutation = gql`
  mutation ($type: String!, $description: String!, $amount: Float!) {
    createExpense(type: $type, description: $description, amount: $amount) {
      _id
      type
      amount
      description
    }
  }
`;

export const updateExpenseMutation = gql`
  mutation ($id: ID!, $description: String, $amount: Float) {
    updateExpense(id: $id, description: $description, amount: $amount) {
      _id
      type
      amount
      description
    }
  }
`;

export const deleteExpenseMutation = gql`
  mutation ($id: ID!) {
    deleteExpense(id: $id) {
      result
    }
  }
`;
