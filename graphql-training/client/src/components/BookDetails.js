import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_BOOK } from '../queries/queries';

function BookDetails({ bookId }) {

  const { loading, data } = useQuery(QUERY_BOOK, {variables: {id:bookId}});

  if(loading) return <div>Loading...</div>;

  function displayBookDetail() {
    if(data) {
      const book = data.book;
      return(
        <div>
            <h2>{book.name}</h2>
            <p>{book.genre}</p>
            <p>{book.author.name}</p>
            <p>All books by this author:</p>
            <ul className="other-books">
              {
                book.author.books.map(b => {
                  return <li key={b.id}>{b.name}</li>
                })
              }
            </ul>
        </div>
      );
    }
    else {
      return(
        <div>No book selected</div>
      );
    }
  }
  
  return (
    <div id="book-details">
      { displayBookDetail() }
    </div>
  );
}

export default BookDetails;