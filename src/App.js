import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';


import Navbar from './components/Navbar';
import MobileNavBar from './components/MobileNavBar';
import Social from './components/Social';
import Footer from './components/Footer';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Contact from './components/pages/Contact';


function App() {
  return (
    <Router>
      <div className="App">
        <div id="header">
          <div className="headerWrapper">
            <Navbar />
            <Social />
          </div>
        </div>
				<MobileNavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>  
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
