import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { queryAuthors } from '../queries/queries';

function displayAuthor(author) {
  return <option key={author.id} value={author.id}>{ author.name }</option>;
}

function displayAuthors(data) {
  return data.authors.map(author => {
    return displayAuthor(author)
  });
}

function AddBook() {

  const { loading, error, data } = useQuery(queryAuthors);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  return (
    <form id="add-book">

      <div className="field">
        <label>Book name:</label>
        <input type="text"/>
      </div>

      <div className="field">
        <label>Genre:</label>
        <input type="text"/>
      </div>

      <div className="field">
        <label>Author:</label>
        <select>
          <option>Select author</option>
          { displayAuthors(data) }
        </select>
      </div>

      <button>+</button>

    </form>
  );
}

export default AddBook;