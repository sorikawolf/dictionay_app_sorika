import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handlePhotoResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function search() {
    //documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "357affaact442eeoc3f4199173062fb9";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    let photoApiKey = "357affaact442eeoc3f4199173062fb9";
    let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photoApiKey}`;

    axios.get(apiUrl).then(handleDictionaryResponse);
    axios.get(photoApiUrl).then(handlePhotoResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();

    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary text-center">
        <section>
          <h4>What definition are you looking for?</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              defaultValue={props.defaultKeyword}
              placeholder="Enter a word..."
              onChange={handleKeywordChange}
            />
          </form>
          Suggestions: sunset, sunrise, morning...
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
  }
}
