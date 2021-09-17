import React from "react";
import Book from "./Book";

const BookShelf = ({books, title, changeBookShelf}) => {

    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(eachBook => (
                        <li key={eachBook.id}>
                            <Book book={eachBook} changeBookShelf={changeBookShelf}/>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default BookShelf;