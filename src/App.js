import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksSearch from './BooksSearch'
import BooksShelfChanger from './BooksShelfChanger'
import Book from './Book'
import Shelf from './Shelf'


class BooksApp extends React.Component {
  state = {
    Books : [],
    
    
    
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    closeSearchPage: () => {
      this.setState({showSearchPage: false})
    }

    
  }

  filterBooks (shelfTitle) {
    this.state.Books.map(book => {
       console.log(book);
      });
      
      return this.state.Books
              .filter(book => book.shelf === shelfTitle)
              .map(book => {
                let coverUrl = "";
                if (book.imageLinks !== undefined) {
                  coverUrl = 'url(' + book.imageLinks.smallThumbnail + ')' 
                }

                return (<Book title = {book.title} author = {book.authors[0]} coverUrl = {coverUrl} key = {book.id} />)
              });

  }

  componentDidMount() {
    BooksAPI.getAll().then((data) => {
      this.setState({Books: data})
    })
  }

  render() {
    

    var reading = this.filterBooks("currentlyReading");

    var wantToRead = this.filterBooks("wantToRead");

    var read = this.filterBooks("read");


    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <BooksSearch closeSearchCallback = {this.state.closeSearchPage}/>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>

                <Shelf shelfTitle = "Currently Reading" bookList = {reading} />
                <Shelf shelfTitle = "Want to Read" bookList = {wantToRead} />
                <Shelf shelfTitle = "Read" bookList = {read} />

              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
