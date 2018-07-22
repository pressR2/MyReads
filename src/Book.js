import React from "react";
import BooksShelfChanger from "./BooksShelfChanger";
import * as BooksAPI from "./BooksAPI";

class Book extends React.Component {
    constructor(props) {
        super(props);

        this.changeShelf = this.changeShelf.bind(this);
    }

    changeShelf(shelf) {
        BooksAPI.update(this.props.book.id, shelf);
        this.props.load();
    }
    render() {
        let coverUrl = "";
        if (this.props.book.imageLinks !== undefined) {
            coverUrl = "url(" + this.props.book.imageLinks.smallThumbnail + ")";
        }

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: coverUrl }} />
                        <BooksShelfChanger changeShelfCallback={this.changeShelf} currentShelf={this.props.book.shelf} />
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors !== undefined ? this.props.book.authors[0] : ""}</div>
                </div>
            </li>
        );
    }
}

export default Book;
