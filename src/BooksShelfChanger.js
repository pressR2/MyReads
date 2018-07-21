import React from 'react'
// import Book from './Book'

class BooksShelfChanger extends React.Component {
    constructor (props){
        super(props);

        this.changeShelf = this.changeShelf.bind(this);

    }


    changeShelf(event) {
        this.props.changeShelfCallback(event.target.value);
    }

    render () {
        return (
        <div className="book-shelf-changer">
          <select onChange={this.changeShelf}>
            <option value="move" disabled selected>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
        )
    }

}

export default BooksShelfChanger