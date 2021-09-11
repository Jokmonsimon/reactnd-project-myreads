import React from "react";

const Book = ({book, changeBookShelf }) => {
  const bookAuthors = (authors) => {
  	if (undefined !== authors && authors.length <= 2) {
    	authors = authors.join(' and ');
    } else if (undefined !== authors && authors.length > 2) {
    	let lastBookAuthor = ' and ' + authors.slice(-1);
        authors.pop();
        authors = authors.join(', ');
        authors += lastBookAuthor;
    } else if (authors !== false) {
    	authors = 'Unknown Author';
    }
    return authors;
  }

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ 
      				width: 128, 
      				height: 193, 
      				backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : 'icons/book-placeholder.svg'})`
                    }}></div>
                    <div className="book-shelf-changer">
                        <select defaultValue={book.shelf} onChange={(event) => changeBookShelf(book, event.target.value)}> 
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
            <div className="book-title">{book.title}</div>
            {<div className="book-authors">{bookAuthors(book.authors)}</div>}        
        </div>

        
    )
}

export default Book;