import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksSearch from './BooksSearch'
import BooksShelfChanger from './BooksShelfChanger'
import Book from './Book'
import Shelf from './Shelf'


class BooksApp extends React.Component {

    constructor (props){
        super(props);

        this.load = this.load.bind(this);

    }

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
      this.load()
    }

    
  }

  filterBooks (shelfTitle) {
      
      return this.state.Books
              .filter(book => book.shelf === shelfTitle)
              .map(book => {
                  return (<Book book={book} key = {book.id} load = {this.load} />)
              });

  }

  load() {
     BooksAPI.getAll().then((data) => {
      console.log(data);
      this.setState({Books: data})
    }).catch(err => console.log(err))
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
        {this.state.showSearchPage ? (
          <BooksSearch closeSearchCallback = {this.state.closeSearchPage} myBooks = {this.state.Books}/>
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
