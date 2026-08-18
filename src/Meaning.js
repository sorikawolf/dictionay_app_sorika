import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h4 className="partOfSpeech">{props.meaning.partOfSpeech}</h4>

      <strong>Definition: </strong>
      {props.meaning.definition}

      <div>
        {" "}
        <Example example={props.meaning.example} />
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
