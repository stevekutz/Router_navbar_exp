import React from "react";
import { Link } from "react-router-dom";
import People from "../components/People";

const peeps = ["Joe", "Ted", "Sally", "Jules"];

const PeoplePage = props => {
  return (
    <div>
      <h2>People Page</h2>
      {peeps.map((peep, index) => (
        <Link to={`/people/${index}`} key={index}>
          <People peep={peep} key={index} idVal={index} test={"sillyString"} />
        </Link>
      ))}
    </div>
  );
};

export default PeoplePage;
