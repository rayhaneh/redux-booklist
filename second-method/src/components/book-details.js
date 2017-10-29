import React, { Component } from 'react';

export default class BookDetails extends Component {
  render() {
    if (!this.props.activeBook) {
      return (
        <div>
          Select a book to start!
        </div>
      )
    }
    return(
      <div>
        <h3>Details are:</h3>
        <p>{this.props.activeBook.title}</p>
      </div>
    )
  }
}
