import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonymTitle">
        <strong>Synonyms: </strong>
        {props.synonyms.map(function (synonym, index) {
          return (
            <stan key={index} className="Synonyms">
              {synonym},{" "}
            </stan>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
