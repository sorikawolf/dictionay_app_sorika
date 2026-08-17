import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response);
    console.log(response.data.meanings[0]);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "357affaact442eeoc3f4199173062fb9";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary text-center">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Enter a word..."
          onChange={handleKeywordChange}
        />
      </form>
      <Results results={results} />
    </div>
  );
}
