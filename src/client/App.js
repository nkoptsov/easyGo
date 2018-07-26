import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Layouts/Home/Home';
import Register from './Layouts/Register/Register';
import Login from './Layouts/Login/Login';
import NotFound from './Layouts/NotFound/NotFound';
import TripsList from './Pages/TripsList';
import Trip from './Pages/Trip';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/trips" component={TripsList} />
            <Route exact path="/trips/:tripId" component={Trip}/>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
