import React from "react";


export default function(props) {
  console.log("People props >> ", props);

return (
  <h4 key = {props.index}>
   Person {props.peep} {props.idVal} {props.index}
  </h4>
)

}


/*
function People(props) {
  console.log("People props >> ", props);

   const paramVal = props.props.match.params.id;
   // console.log("paramVal is ", paramVal);

  return (
    <h4 key={props.index}>
      Person {props.peep} {props.idVal}
    </h4>
  );
}

export default People;
*/