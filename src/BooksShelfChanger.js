import React from "react";

class BooksShelfChanger extends React.Component {
    constructor(props) {
        super(props);

        this.changeShelf = this.changeShelf.bind(this);
    }

    changeShelf(event) {
        this.props.changeShelfCallback(event.target.value);
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={this.changeShelf} defaultValue={this.props.currentShelf}>
                    <option value="move" disabled>
                        Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default BooksShelfChanger;
