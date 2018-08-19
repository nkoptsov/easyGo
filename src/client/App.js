import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import Profile from './Containers/Profile/Profile';
import Home from './Containers/Home/Home';
import Register from './Containers/Register/Register';
import Login from './Containers/Login/Login';
import Trip from './Containers/Trips/Trip';
import Trips from './Containers/Trips/Trips';
import NotFound from './Containers/NotFound/NotFound';
import Subscriptions from './Containers/Trips/Subscriptions';
import MyTrips from './Containers/Trips/MyTrips';
import isAuthorized from './Utils/isAuthorized';

const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/trips" component={Trips} />
            <Route exact path="/trips/:tripId" component={Trip} />
            <Route exact path="/subscriptions/:tripId" component={Trip} />
            <Route exact path="/mytrips/:tripId" component={Trip} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route
              path="/profile"
              render={() => (
                isAuthorized() ? (
                  <Profile />
                ) : (
                  <Redirect to="/" />
                )
              )}
            />
            <Route
              
              path="/subscriptions"
              render={() => (
                isAuthorized() ? (
                  <Subscriptions />
                ) : (
                  <Redirect to="/" />
                )
              )}
            />
            <Route
              
              path="/mytrips"
              render={() => (
                isAuthorized() ? (
                  <MyTrips />
                ) : (
                  <Redirect to="/" />
                )
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
