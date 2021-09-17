import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header';
import BookShelves from './components/BookShelves';
import * as BooksAPI from './BooksAPI';
import Book from './components/Book';
import './App.css'

const BooksApp = () => {
  /**
    * TODO: Instead of using this state variable to keep track of which page
    * we're on, use the URL in the browser's address bar. This will ensure that
    * users can use the browser's back and forward buttons to navigate between
    * pages, as well as provide a good URL they can bookmark and share.
  */
  const [books, setBooks] = useState([]);
  const [mapOfIdToBooks, setMapOfIdToBooks] = useState(new Map());
  const [searchBooks, setSearchBooks] = useState([]);
  const [mergedBooks, setMergedBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    BooksAPI.getAll()
      .then(res => {
        setBooks(res);
        setMapOfIdToBooks(createMapOfBooks(res));
      }
      );
  }, []);

  useEffect(() => {
    let searchIsActive = true;
    if (searchTerm) {
      BooksAPI.search(searchTerm).then(res => {
        if (res.error) {
          setSearchBooks([])
        } else {
          if (searchIsActive) {
            setSearchBooks(res);
          }
        }
      })
    }
    return () => {
      searchIsActive = false;
      setSearchBooks([]);
    }
  }, [searchTerm])

  useEffect(() => {

    const combinedBooks = searchBooks.map(book => {
      if (mapOfIdToBooks.has(book.id)) {
        return mapOfIdToBooks.get(book.id);
      } else {
        return book;
      }
    })
    setMergedBooks(combinedBooks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchBooks])


  const createMapOfBooks = (books) => {
    const map = new Map();
    books.map(book => map.set(book.id, book));
    return map;
  }

  const changeBookShelf = (book, setNewBookShelf) => {
    const updatedBooks = books.map(eachBook => {
      if (eachBook.id === book.id) {
        book.shelf = setNewBookShelf;
        return book;
      }
      return eachBook;
    })
    if (!mapOfIdToBooks.has(book.id)) {
      book.shelf = setNewBookShelf;
      updatedBooks.push(book)
    }
    setBooks(updatedBooks);
    BooksAPI.update(book, setNewBookShelf);
  }

  return (
    <div className="app">
      <Router>
        <Switch>
          {/* BOOK SEARCH PAGE */}
          <Route path="/search">
            <div className="search-books">
              <div className="search-books-bar">
                <Link to="/"><button className="close-search">Close</button></Link>
                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                  {mergedBooks.map(eachBook => (
                    <li key={eachBook.id}>
                      <Book book={eachBook} changeBookShelf={changeBookShelf} />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Route>
          {/* BOOK MAIN PAGE */}
          <Route path="/">
            <div className="list-books">
              <Header />
              <div className="list-books-content">
                <BookShelves books={books} changeBookShelf={changeBookShelf} />
              </div>
              <div className="open-search">
                <Link to="/search"><button>Add a book</button></Link>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default BooksApp;