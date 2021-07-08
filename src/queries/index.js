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

export const sheetQuery = gql`
  query {
    sheet {
      _id
      userId
      day
      gratefulFor
      research
      reading {
        title
        start
        end
      }
      accountability {
        done
        todo
      }
      awake
      asleep
    }
  }
`;

export const sheetQueryStr = `
  query SheetQuery($id: ID) {
    sheet(id: $id) {
      _id
      userId
      day
      gratefulFor
      research
      reading {
        title
        start
        end
      }
      accountability {
        done
        todo
      }
      awake
      asleep
      todos {
        today {
          _id
          items {
            _id
            text
            completed
          }
          startTime
          endTime
        }
        tomorrow {
          _id
          items {
            _id
            text
            completed
          }
          startTime
          endTime
        }
        work {
          _id
          items {
            _id
            text
            completed
          }
          startTime
          endTime
        }
        art {
          _id
          items {
            _id
            text
            completed
          }
          startTime
          endTime
        }
      }
    }
  }
`;
