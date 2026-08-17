import React from "react";
export default function Meaning(props) {
  return (
    <div className="meaning">
      <h4 className="partOfSpeech">{props.meaning.partOfSpeech}</h4>
      <p className="definition">{props.meaning.definition}</p>
      <p className="example">{props.meaning.example}</p>
    </div>
  );
}
