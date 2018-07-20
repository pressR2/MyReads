import React from 'react'
import BooksShelfChanger from './BooksShelfChanger'

class Book extends React.Component {
    render () {
        return (
          <li>
             <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.coverUrl }}></div>
                <BooksShelfChanger />
              </div>
              <div className="book-title">{this.props.title}</div>
              <div className="book-authors">{this.props.author}</div>
             </div>
          </li>
        )
    }

}

export default Book