import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav.jsx';
import Welcome from './components/Welcome.jsx';
import Details from './components/Details.jsx';
import PageContent from './components/PageContent.jsx';
import About from './components/About.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Welcome />
          <Route exact path="/pageContent" component={PageContent} />
          <Route exact path="/about" component={About} />
          <Details />
        </div>
      </Router>
    );
  }
}

export default App;
