import React from "react";

function People(props) {
  console.log("People props >> ", props);

  // const paramVal = props.match.params.id;
  // console.log("paramVal is ", paramVal);

  return (
    <h4 key={props.index}>
      Person {props.peep} {props.idVal}
    </h4>
  );
}

export default People;
