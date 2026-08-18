import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h4 className="partOfSpeech">{props.meaning.partOfSpeech}</h4>
      <p className="definition">
        <strong>Definition: </strong>
        {props.meaning.definition}
      </p>
      <p>
        {" "}
        <Example example={props.meaning.example} />
      </p>
      <p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
