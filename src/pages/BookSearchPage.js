import React, { useState, useEffect } from 'react';
import * as BooksAPI from '../BooksAPI';
import BookShelf from '../myreads_components/BookShelf';
import { Link } from 'react-router-dom';


const BookSearchPage = (props) => {  
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [bookSearchResults, setBookSearchResults] = useState([]);
  // const [hasError, setHasError] = useState(false);
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
  
  return (
    <div className="app">
      <div className="serach-books">
        <div className="search-books-bar">
           
			<Link to="/"><button className="close-search" >Close</button></Link>
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