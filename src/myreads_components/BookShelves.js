import React from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

const BookShelves = ({ books, updateBookShelf }) => {
    const currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
    const wantToRead = books.filter((book) => book.shelf === "wantToRead");
    const read = books.filter((book) => book.shelf === "read");
    
    return (
        <div>
            <BookShelf bookShelfTitle="Currently Reading" books={currentlyReading}  updateBookShelf={updateBookShelf}/>
            <BookShelf bookShelfTitle="Want To Read" books={wantToRead}  updateBookShelf={updateBookShelf}/>
            <BookShelf bookShelfTitle="Read" books={read} updateBookShelf={updateBookShelf}/>
            <div className="list-books">
            <div className="open-search">
                <Link to="search">
                    <button>Add a Book</button>
                </Link>
            </div>
          </div>
        </div>
    )
}

export default BookShelves;