import React from "react";
import Shelf from "./Shelf";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import * as SearchTerm from "./SearchTerm";

class BooksSearch extends React.Component {
    constructor(props) {
        super(props);

        this.search = this.search.bind(this);
    }

    state = {
        BookList: []
    };

    search(event) {
        console.log(event.target.value);
        if (event.target.value === undefined || event.target.value === "") {
            this.setState({ BookList: [] });
            return;
        }

        var terms = SearchTerm.termsArray.filter(term => event.target.value.toUpperCase() === term.toUpperCase());
        if (terms.length === 0) {
            this.setState({ BookList: [] });
            return;
        }

        BooksAPI.search(event.target.value).then(data => {
            if (data === undefined || !Array.isArray(data)) {
                data = [];
            }

            //books from search don't have shelf set, we have to check if we have them on our shelves
            data.map(book => {
                let myBook = this.props.myBooks.filter(myBook => myBook.id === book.id);
                if (myBook.length > 0) {
                    book.shelf = myBook[0].shelf;
                } else {
                    book.shelf = "none";
                }
            });

            this.setState({ BookList: data });
        });
    }

    createBookList() {
        return this.state.BookList.map(book => {
            return <Book book={book} key={book.id} load={() => {}} />;
        });
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input onInput={this.search} type="text" placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <Shelf bookList={this.createBookList()} />
                </div>
            </div>
        );
    }
}

export default BooksSearch;
