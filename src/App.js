import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BooksSearch from "./BooksSearch";
import BooksShelfChanger from "./BooksShelfChanger";
import Book from "./Book";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
    constructor(props) {
        super(props);

        this.load = this.load.bind(this);
    }

    state = {
        Books: []
    };

    filterBooks(shelfTitle) {
        return this.state.Books.filter(book => book.shelf === shelfTitle).map(book => {
            return <Book book={book} key={book.id} load={this.load} />;
        });
    }

    load() {
        BooksAPI.getAll()
            .then(data => {                
                this.setState({ Books: data });
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.load();
    }

    render() {
        var reading = this.filterBooks("currentlyReading");

        var wantToRead = this.filterBooks("wantToRead");

        var read = this.filterBooks("read");

        return (
            <div className="app">
                <Route path="/search" render={() => <BooksSearch myBooks={this.state.Books} />} />
                <Route
                    exact
                    path="/"
                    render={() => (
                        <div className="list-books">
                            <div className="list-books-title">
                                <h1>MyReads</h1>
                            </div>
                            <div className="list-books-content">
                                <div>
                                    <Shelf shelfTitle="Currently Reading" bookList={reading} />
                                    <Shelf shelfTitle="Want to Read" bookList={wantToRead} />
                                    <Shelf shelfTitle="Read" bookList={read} />
                                </div>
                            </div>
                            <div className="open-search">
                                <Link to="/search">Add a book</Link>
                            </div>
                        </div>
                    )}
                />
            </div>
        );
    }
}

export default BooksApp;
