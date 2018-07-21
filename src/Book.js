import React from 'react'
import BooksShelfChanger from './BooksShelfChanger'
import * as BooksAPI from './BooksAPI'

class Book extends React.Component {
  constructor (props){
        super(props);

        this.changeShelf = this.changeShelf.bind(this);

  }

  changeShelf(shelf) {
    BooksAPI.update(this.props.bookID, shelf);
    this.props.load();
  }
    render () {
        return (
          <li>
             <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.coverUrl }}></div>
                <BooksShelfChanger changeShelfCallback = {this.changeShelf} />
              </div>
              <div className="book-title">{this.props.title}</div>
              <div className="book-authors">{this.props.author}</div>
             </div>
          </li>
        )
    }
}

export default Book