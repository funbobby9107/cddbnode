import React, {Component} from 'react'
import {
    BrowserRouter as Router, 
    Route
} from 'react-router-dom';

//import './styles.css'

import DiscContainer from './DiscContainer'

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route>
            <div>
              <DiscContainer />
              
            </div> 
           </Route> 
        </div>
      </Router>
    )
  }
}


//'<Route exact path="/" component={DiscContainer} />'