import React, { Component } from 'react';
import BookList from '../components/book-list';
import BookDetails from '../components/book-details';
import selectBook from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
  // selectBook() {
  //   console.log('in selectBook')
  // }
  render() {
    const {books, activeBook, selectBook} = this.props;
    return (
      <div>
        <BookList books={books} selectBook={selectBook}/>
        <BookDetails activeBook={activeBook}/>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    books: state.books,
    activeBook: state.activeBook
  }
}

function mapStateToDispatch(dispatch) {
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapStateToDispatch)(App);