import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary text-center">
      <form onSubmit={search}>
        <input
          type="search"
          autofocus={true}
          placeholder="Enter a word..."
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}
