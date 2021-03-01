import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';
import ContactPage from './components/ContactPage';
import './App.css';
import { Route} from "react-router-dom";


function App() {
  return (
    <div>
    <NavBar />
    <div class="">
      <Route exact path= {["/", "/about", "/react_portfolio"]} component={HomePage} />
      <Route exact path="/ProjectPage"  component={ProjectPage} />
      <Route exact path="/ContactPage"  component={ContactPage} />
    </div>
  </div>
  );
}

export default App;
