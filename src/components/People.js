import React from "react";

<<<<<<< HEAD

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
=======
const color = ["red", "yellow", "blue", "pink"];

function People(props, match) {
>>>>>>> 90c381fe0ec7f7d890c469414a1e932b92a20bf6
  console.log("People props >> ", props);
  console.log("People idVal >> ", props.idVal);

   const paramVal = props.props.match.params.id;
   // console.log("paramVal is ", paramVal);

  return (
    <h4 key={props.index}>
      at idVal {props.idVal}, person {props.peep} {props.test}
      {color[`${props.idVal}`]}
    </h4>
  );
}

export default People;
*/