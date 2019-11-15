import React , { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_BOOKS } from '../queries/queries';

// components
import BookDetails from './BookDetails';

function BookList() {

  const [bookId, selectBookId] = useState('');

  const { loading, error, data } = useQuery(QUERY_BOOKS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  function displayBooks() {
    return data.books.map(book => {
      return <li key={book.id} onClick={ ()=>selectBookId(book.id) }>{ book.name }</li>;
    });
  }

  return (
    <div>
      <ul id="book-list">
        { displayBooks(data) }
      </ul>
      <BookDetails bookId={bookId}/>
    </div>
  );
}

export default BookList;
