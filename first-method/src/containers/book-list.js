import React, { Component } from 'react';
// Redux serves to construct application's state
// React provides the views to display that state
// The two libraries are inherintly discounected and it's only through
// the react-redux that we clearly get a connection between the two.
import { connect } from 'react-redux';
import selectBook from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
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


function mapStateToProps(state) {
  // Whatever is returned here will show up as props inside booklist
  return {
    books: state.books
  }
}

// Anything returned from this function will end up as props on bookList container
function mapStatetoDispatch(dispatch) {
  // Whenever selectBook is called, the results should be passed to all our reducers
  // That's what bindActionCreators does, it takes the results of the action and runs
  // it through dispatch
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// Promote booklist from a component to a container - it needs to know about the
// dispatch method, selectBook. Make it avaiable as a prop.
export default connect(mapStateToProps, mapStatetoDispatch)(BookList)
