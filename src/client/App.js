import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Containers/Home/Home';
import Register from './Containers/Register/Register';
import Login from './Containers/Login/Login';
import Trip from './Containers/Trips/Trip';
import Trips from './Containers/Trips/Trips';
import TripsView from './Components/Trips/TripsView';
import NotFound from './Containers/NotFound/NotFound';
import Subscriptions from "./Containers/Trips/Subscriptions";
import MyTrips from "./Containers/Trips/MyTrips";
import isAuthorized from './Utils/isAuthorized';
import { Redirect } from 'react-router';
import Search from './Containers/Search/Search';


const routers = [{
  layout: Trips,
  path: '/trips',
  page: TripsView,
}, {
  layout: Trips,
  path: '/trips/1',
  page: Trip,
}];

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/trips" component={Trips} />
            <Route exact path="/trips/:tripId" component={Trip}/>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />

            <Route exact path="/subscriptions" render={() => (
                isAuthorized() ? (
                  <Subscriptions/>
                ) : (
                  <Redirect to="/"/>
                )
              )} />

            <Route exact path="/mytrips" render={() => (
                isAuthorized() ? (
                  <MyTrips/>
                ) : (
                  <Redirect to="/"/>
                )
              )} />

            <Route exact path="/search" component={Search} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
