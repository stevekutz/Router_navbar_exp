import React from "react";

const color = ["red", "yellow", "blue", "pink"];

function People(props, match) {
  console.log("People props >> ", props);
  console.log("People idVal >> ", props.idVal);

  // const paramVal = props.match.params.id;
  // console.log("paramVal is ", paramVal);

  return (
    <h4 key={props.index}>
      at idVal {props.idVal}, person {props.peep} {props.test}
      {color[`${props.idVal}`]}
    </h4>
  );
}

export default People;
