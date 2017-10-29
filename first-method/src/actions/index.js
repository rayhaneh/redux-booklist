export default function selectBook(activeBook) {
  // selectBook is an action creator. 
  // It needs to creat and action, an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: activeBook
  }
}