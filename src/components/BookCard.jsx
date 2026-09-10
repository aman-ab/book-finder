// this shows one book card
// data here comes from the Open Library search api
function BookCard({ book }) {
  const title = book.title || "No title";

  const authors =
    book.author_name && book.author_name.length > 0
      ? book.author_name.join(", ")
      : "Unknown author";

  const year = book.first_publish_year || "N/A";

  const subjects =
    book.subject && book.subject.length > 0
      ? book.subject.slice(0, 2).join(", ")
      : "No subject listed";

  // open library covers use a cover id, some books dont have one
  const image = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : null;

  const bookLink = book.key ? `https://openlibrary.org${book.key}` : null;

  return (
    <div className="book-card">
      {image ? (
        <img src={image} alt={title} />
      ) : (
        <div className="no-image">No Cover</div>
      )}

      <h3>{title}</h3>
      <p className="author">by {authors}</p>
      <p className="year">First published: {year}</p>
      <p className="desc">Subjects: {subjects}</p>

      {bookLink && (
        <a href={bookLink} target="_blank" rel="noreferrer">
          View Book
        </a>
      )}
    </div>
  );
}

export default BookCard;
