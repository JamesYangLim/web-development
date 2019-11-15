import { gql } from 'apollo-boost';

const QUERY_BOOK = gql`
  query($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

const QUERY_BOOKS = gql`
  query {
    books {
      name
      id
    }
  }
`;

const QUERY_AUTHORS = gql`
  query {
    authors {
      name
      id
    }
  }
`;

const ADD_BOOK = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId){
      name
      id
    }
  }
`;




export { QUERY_BOOK, QUERY_BOOKS, QUERY_AUTHORS, ADD_BOOK };