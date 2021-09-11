import React, { useState, useEffect } from 'react';
import * as BooksAPI from '../BooksAPI';
import BookShelf from '../myreads_components/BookShelf';
import {useHistory} from "react-router-dom";

const BookSearchPage = (props) => {   
  const [searchTerm, setSearchTerm] = useState("");
  const [bookSearchResults, setBookSearchResults] = useState([]);
  const [hasError, setHasError] = useState(false);
  const onInputChange = (e) => {
  	setSearchTerm(e.target.value);
    
  }
  
  useEffect(() => {
    BooksAPI.getAll()
      .then(data => setBooks(data))
    BooksAPI.search(searchTerm).then((response) => {
      setBookSearchResults(response)
    }) 
  }, [searchTerm]);
  
  	const [books, setBooks] = useState([]);
    const updateBookShelf = (book, newBookShelf) => {
      const updatedBooks = books.map(b => {
        if (b.id === book.id) {
          book.shelf = newBookShelf;
          const bookOnShelf = updatedBooks.find(b => b.id ===book.id)
            if (bookOnShelf) {
                book.shelf = bookOnShelf.shelf
            }
          return book;
        }
        return b;
      });
      setBooks(updatedBooks)
      BooksAPI.update(book, newBookShelf).then(data => (data))
    }

  let history = useHistory();
  const redirect = () => {
    history.push('/')
  }
  
  return (
    <div className="app">
      <div className="serach-books">
        <div className="search-books-bar">
            <button className="close-search" onClick={redirect}>Redirect</button>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={onInputChange} />
          </div>
        </div>
      </div>
      <br/><br/><br/>
      {bookSearchResults && <BookShelf books={bookSearchResults} bookShelfTitle={null} updateBookShelf={props.updateBookShelf}/>}
    </div>
  );
}

export default BookSearchPage;