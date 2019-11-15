import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_BOOKS, QUERY_AUTHORS, ADD_BOOK } from '../queries/queries';

function AddBook() {

  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorId] = useState('');

  const [addBook] = useMutation(ADD_BOOK);

  const { loading, error, data } = useQuery(QUERY_AUTHORS);
  const { refetch } = useQuery(QUERY_BOOKS);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  function submitForm(e) {
    e.preventDefault();
    addBook({ variables: {name: name, genre: genre, authorId: authorId}});
    refetch();
  }

  function displayAuthors() {
    return data.authors.map(author => {
      return <option key={author.id} value={author.id}>{ author.name }</option>;
    });
  }

  return (
    <form id="add-book" onSubmit={(e)=>submitForm(e)}>

      <div className="field">
        <label>Book name:</label>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
      </div>

      <div className="field">
        <label>Genre:</label>
        <input type="text" onChange={(e)=>setGenre(e.target.value)}/>
      </div>

      <div className="field">
        <label>Author:</label>
        <select onChange={(e)=>setAuthorId(e.target.value)}>
          <option>Select author</option>
          { displayAuthors() }
        </select>
      </div>

      <button>+</button>

    </form>
  );
}

export default AddBook;