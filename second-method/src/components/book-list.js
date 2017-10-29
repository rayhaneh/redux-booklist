import React, { Component } from 'react';

export default class BookList extends Component {
  renderList() {
    return this.props.books.map( (book) => {
      return (
        <li
        className='list-group-item'
        key={book.title}
        onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul className='list-group col-sm-4'>
          {this.renderList()}
        </ul>
      </div>
    )
  }
}