import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { queryBooks } from '../queries/queries';


function displayBook(book) {
  return <li key={book.id}>{ book.name }</li>;
}

function displayBooks(data) {
  return data.books.map(book => {
    return displayBook(book);
  });
}

function BookList() {

  const { loading, error, data } = useQuery(queryBooks);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  return (
    <div>
      <ul id="book-list">
        { displayBooks(data) }
      </ul>
    </div>
  );
}

export default BookList;
