import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home';
import Saved from './pages/saved';

class App extends Component {

  render() {
    return (
      <div>
          <Router>
            <switch>
              <Route exact path="/" component={Home}/>
              <Route path="/saved" component={Saved}/>
            </switch>
          </Router>
      </div>
    );
  }
}

export default App
