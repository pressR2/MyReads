import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksSearch extends React.Component {



    render() {
        return ( 
            <div className="search-books">
            <div className="search-books-bar">
             <a className="close-search" onClick={this.props.closeSearchCallback}>Close</a>
              <div className="search-books-input-wrapper">
                
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
          )
    }
}


export default BooksSearch