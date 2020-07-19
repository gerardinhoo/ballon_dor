import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BallonDorList from './components/ballonDorList/BallonDorList';
import About from "./components/About/About";
import mainLogo from "./ballonDor.png"
import './App.css';


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul className="nav-links">
            <img src={mainLogo} alt="logo"/>
            <li className="nav-link">
              <Link to="/">HOME</Link>
            </li>
            <li className="nav-link">
              <Link to="/about">ABOUT</Link>
            </li>
          </ul>
      </nav>
        <Route exact path="/" component={BallonDorList} />
        <Route exact path="/about" component={About} />
      </div>
  </Router>
  );
}

export default App;
