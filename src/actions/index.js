export default function selectBook(activeBook) {
  return {
    type: 'BOOK_SELECTED',
    payload: activeBook
  }
}