import BookCard from "./BookCard.jsx";

// loops through the books array and renders a card for each book
function BookList({ books }) {
  if (books.length === 0) {
    return <p className="no-results">No books to show. Try searching something!</p>;
  }

  return (
    <div className="book-list">
      {books.map((book, index) => (
        // open library keys are usually unique, but just in case use index too
        <BookCard key={book.key || index} book={book} />
      ))}
    </div>
  );
}

export default BookList;
