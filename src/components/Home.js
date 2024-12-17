import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/books').then((res) => {
      setBooks(res.data.data);
    });
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      {books.map((book) => (
        <div key={book.BookID}>
          <h3>{book.Title}</h3>
          <p>Pages: {book.Pages}</p>
          <p>Published: {book.PublishedDate}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
