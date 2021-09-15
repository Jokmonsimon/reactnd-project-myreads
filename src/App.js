import React, {useState, useEffect} from 'react'
import Header from './myreads_components/Header'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelves from './myreads_components/BookShelves'
import BookSearchPage from './pages/BookSearchPage'
import { Route } from 'react-router-dom'

const BooksApp = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll()
      .then(data => setBooks(data));
  }, [books])

  const updateBookShelf = (book, newBookShelf) => {
    const updatedBooks = books.map(b => {
      if (b.id === book.id) {
        book.shelf = newBookShelf;
        return book;
      }
      return b;
    });
    setBooks(updatedBooks)
    BooksAPI.update(book, newBookShelf).then(data => (data))
  }

  return (
    <div className="app">
      <Route exact path='/' render={() => (
        <div className="list-books">
          <Header />
          <div className="list-books-content">
            <BookShelves books={books} updateBookShelf={updateBookShelf}/>
          </div>
        </div>
      )} />     
      <Route path="/search" render={() => (
          <BookSearchPage updateBookShelf={updateBookShelf}/>
        )} /> 
    </div>
  )
}

export default BooksApp