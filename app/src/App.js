import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom"; // wrap App !!!

import PeoplePage from "./components/PeoplePage";
import People from "./components/People";
import Home from './components/Home';

import "./styles.css";

// const Home = () => <h4> Home</h4>;
// const People = props => <h4>People {props.index}</h4>;
const About = () => <h4> About</h4>;

export default function App() {
  return (
    <div className="App">
      <nav className="navbar-container">
        <h3> Some basic Routes </h3>
        <div className="navbar">
          <div className="divLink">
            <Link to="/">Home </Link>
          </div>
          <div className="divLink">
            <NavLink to="/about">About</NavLink>
          </div>
          <div className="divLink">
            <NavLink to="/peoplepage">People Page</NavLink>
          </div>
        </div>
      </nav>

      {/* <Route exact path="/" component={Home} /> */}

      <Route path = '/' exact render = { (props) => {
          return <Home {...props} />
      } }   />
      
      <Route path = 'peoplepage' render = { (props)  => {
          return <PeoplePage {...props}  />
      }}  />
      
      <Route path="/people/:id" exact component={People} />
      <Route path="/about" component={About} />
      <Route path="/peoplepage" component={PeoplePage} />
    </div>
  );
}


// <Route path="/peoplepage" component={PeoplePage} />