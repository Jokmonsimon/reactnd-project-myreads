import React from 'react';
import Book from './Book';

const BooksList = (books, setBooks, updatedBooks) => {
 // const [books, setBooks] = useState([]);
  const updateBookShelf = (book, newBookShelf) => {
    	const updatedBooks = books.map(b => {
        if (b.id === book.id) {
          book.shelf = newBookShelf;
          const bookOnShelf = updatedBooks.find(b => b.id ===book.id)
            if (bookOnShelf) {
                newBookShelf = bookOnShelf.shelf
            }
          return book;
        }
        return b;
      });
  }
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {updatedBooks.map(book => (
          <Book
            key={book.id}
            book={book}
            newBookShelf={book.shelf ? book.shelf : 'none'}
            updateBookShelf={updateBookShelf}
          />
        ))}
      </ol>
    </div>
  );
};

export default BooksList;