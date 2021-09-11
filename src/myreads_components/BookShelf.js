import React from "react";
import Book from "./Book";

const BookShelf = ({ books, bookShelfTitle, updateBookShelf }) => {
  
  
    console.log(updateBookShelf);

  return (
    <div className="bookshelf">
      {bookShelfTitle && <h2 className="bookshelf-title">{bookShelfTitle}</h2>}
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(b => (
            <li key={b.id}>
              <Book book={b} changeBookShelf={updateBookShelf}/>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf;