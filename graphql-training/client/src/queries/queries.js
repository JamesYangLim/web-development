import { gql } from 'apollo-boost';

const queryBooks = gql`
  {
    books {
      name
      id
    }
  }
`;

const queryAuthors = gql`
  {
    authors {
      name
      id
    }
  }
`;

export { queryBooks, queryAuthors };