import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
//import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import Layout from './components/Layout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}

export default App;