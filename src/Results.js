import React from "react";

import "./Results.css";

export default function Results(props) {
  return (
    <div className="results">
      <h2>{props.results.word}</h2>
      <h3>{props.results.phonetic}</h3>
      <h4>{props.results.meanings[0].partOfSpeech}</h4>
      <p>{props.results.meanings[0].definition}</p>
    </div>
  );
}
