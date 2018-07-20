import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksSearch from './BooksSearch'
import BooksShelfChanger from './BooksShelfChanger'
import Book from './Book'
import Shelf from './Shelf'

BooksAPI.getAll().then(data => console.log(data));


class BooksApp extends React.Component {
  state = {
    Books : [
    {
      title: "To Kill a Mockingbird",
      autor: "Harper Lee",
      coverUrl: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
      shelf: "Currently Reading"
    },
    {
      title: "Ender's Game",
      autor: "Orson Scott Card",
      coverUrl: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")',
      shelf: "Currently Reading"
    },
    { 
      title: "1776",
      autor: "David McCullough",
      coverUrl: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")',
      shelf: "Want to Read"
    },
    { 
      title: "Harry Potter and the Sorcerer's Stone",
      autor: "J.K. Rowling",
      coverUrl: 'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")',
      shelf: "Want to Read"
    },
    {
      title: "The Hobbit",
      autor: "J.R.R. Tolkien",
      coverUrl: 'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")',
      shelf: "Read"
    },
    {
      title: "Oh, the Places You'll Go!",
      autor: "Seuss",
      coverUrl: 'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")',
      shelf: "Read"
    },
    {
      title: "The Adventures of Tom Sawyer",
      autor: "Mark Twain",
      coverUrl: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")',
      shelf: "Read"
    }
    ],
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

  render() {
    var reading = this.state.Books
              .filter(book => book.shelf === "Currently Reading")
              .map(book => (
                <Book title = {book.title} author = {book.author} coverUrl = {book.coverUrl} />

              ));

    var wantToRead = this.state.Books
              .filter(book => book.shelf === "Want to Read")
              .map(book => (
                <Book title = {book.title} author = {book.author} coverUrl = {book.coverUrl} />

              ));

    var read = this.state.Books
              .filter(book => book.shelf === "Read")
              .map(book => (
                <Book title = {book.title} author = {book.author} coverUrl = {book.coverUrl} />

              ))


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
