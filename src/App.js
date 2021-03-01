import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';
import ContactPage from './components/ContactPage';
import './App.css';
import { BrowserRouter as Router, } from "react-router-dom";
import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
        <NavBar />
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/ProjectPage">ProjectPage</Link></li>
            <li><Link to="/ContactPage">ContactPage</Link></li>
            
          </ul>

          <hr />
          <Route exact path= {["/", "/about", "/react_portfolio"]} component={HomePage} />
          <Route exact path="/ProjectPage"  component={ProjectPage} />
          <Route exact path="/ContactPage"  component={ContactPage} />
        </div>
      </HashRouter>
    );
  }
}

export default App;


/*function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div class="">
          <Route exact path= {["/", "/about", "/react_portfolio"]} component={HomePage} />
          <Route exact path="/ProjectPage"  component={ProjectPage} />
          <Route exact path="/ContactPage"  component={ContactPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;*/
