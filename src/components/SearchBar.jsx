import { useState } from "react";

// simple search bar
// takes the text the user types and passes it back up to App.jsx
function SearchBar({ onSearch }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // stop the page from reloading
    if (text.trim() === "") {
      return;
    }
    onSearch(text);
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a book title, author..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
