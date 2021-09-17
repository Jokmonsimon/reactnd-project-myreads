import React from "react";
import BookShelf from "./BookShelf";

const BookShelves = ({books, changeBookShelf}) => {
    const currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
    const wantToRead = books.filter((book) => book.shelf === "wantToRead");
    const read = books.filter((book) => book.shelf === "read");

    return (
        <div>
            <BookShelf title="Currently Reading" books={currentlyReading} changeBookShelf={changeBookShelf} />
            <BookShelf title="Want To Read" books={wantToRead} changeBookShelf={changeBookShelf} />
            <BookShelf title="Read" books={read} changeBookShelf={changeBookShelf} />
        </div>
    );
};

export default BookShelves;