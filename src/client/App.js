import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import TripsList from './Pages/TripsList';
import Trip from './Pages/Trip';
import Toolbar from './Components/Toolbar'
import Content from './Components/Content';
import Home from './Pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Toolbar />
          <Content>
            <Route exact path="/" component={Home}/>
            <Route  path="/trips/:tripId" component={Trip}/>
            <Route exact  path="/trips" component={TripsList}/>
          </Content>
        </div>
      </Router>
    );
  }
}

export default App;
