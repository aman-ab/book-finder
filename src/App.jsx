import { useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import BookList from "./components/BookList.jsx";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  // Open Library Search API - free, no api key needed
  // same idea as https://api.tvmaze.com/search/shows?q=... but for books
  // docs: https://openlibrary.org/dev/docs/api/search
  async function handleSearch(query) {
    setLoading(true);
    setError("");
    setSearched(true);

    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
      );

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      const data = await res.json();
      setBooks(data.docs || []);
    } catch (err) {
      console.log(err);
      setError("Could not fetch books. Please try again.");
    }

    setLoading(false);
  }

  return (
    <div className="app">
      <h1>📚 Book Search</h1>
      <p className="subtitle">Search for books using the Open Library API</p>

      <SearchBar onSearch={handleSearch} />

      {loading && <p className="loading">Loading books...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && searched && !error && <BookList books={books} />}
    </div>
  );
}

export default App;
