import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <strong>Synonyms: </strong>
        {props.synonyms.map(function (synonym, index) {
          return <stan key={index}>{synonym}, </stan>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
