import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Layouts/Home/Home';
import Register from './Layouts/Register/Register';
import Login from './Layouts/Login/Login';
import Trip from './Layouts/Trips/Trip';
import Trips from './Layouts/Trips/Trips';
import TripsList from './Layouts/Trips/TripsList';
import NotFound from './Layouts/NotFound/NotFound';

const routers = [{
  layout: Trips,
  path:'/trips',
  page: TripsList,
},{
  layout:Trips,
  path:'/trips/1',
  page: Trip,
}]

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/trips" component={Trips} />
            <Route exact path="/trips/:tripId" component={Trip}/>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
