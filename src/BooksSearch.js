import React from 'react'
import Shelf from './Shelf'
import Book from './Book'
import * as BooksAPI from './BooksAPI'


class BooksSearch extends React.Component {

    constructor (props){
        super(props);

        this.search = this.search.bind(this);

    }

    state = {

        BookList: []
    
    }


    search(event) {
        console.log(event.target.value)
        BooksAPI.search(event.target.value).then((data) => {
            console.log(data)
            this.setState({BookList: data})
        })
    }

    createBookList() {
      
      return this.state.BookList
              .map(book => {
                let coverUrl = "";
                if (book.imageLinks !== undefined) {
                  coverUrl = 'url(' + book.imageLinks.smallThumbnail + ')' 
                }

                return (<Book title = {book.title} author = {book.authors !== undefined ? book.authors[0]: ''} coverUrl = {coverUrl} key = {book.id} bookID = {book.id} load = {() => {}} />)
              });

    }

    render() {
        return ( 
            <div className="search-books">
            <div className="search-books-bar">
             <a className="close-search" onClick={this.props.closeSearchCallback}>Close</a>
              <div className="search-books-input-wrapper">
                
                <input onInput = {this.search} type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
            <Shelf bookList = {this.createBookList()} />
            </div>
          </div>
          )
    }
}


export default BooksSearch