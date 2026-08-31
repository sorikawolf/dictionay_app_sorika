import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms">
        <strong>Synonyms: </strong>
        {props.synonyms.map(function (synonym, index) {
          return (
            <stan key={index} className="synonymList">
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
