import React from 'react';
import { NavLink } from 'react-router-dom';
import isAuthorized from '../../Utils/isAuthorized';
import LogOut from '../LogOut/LogOut';

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="navbar-brand">
          EasyGo
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeStyle={{
                  fontWeight: ' bold ',
                  color: ' green ',
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/trips"
                className="nav-link"
                activeStyle={{
                  fontWeight: ' bold ',
                  color: ' green ',
                }}
              >
                Trips
              </NavLink>
            </li>
            {isAuthorized()
              ? (
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink
                      to="/subscriptions"
                      className="nav-link"
                      activeStyle={{
                        fontWeight: ' bold ',
                        color: ' green ',
                      }}
                    >
                      Subscriptions
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/mytrips"
                      className="nav-link"
                      activeStyle={{
                        fontWeight: ' bold ',
                        color: ' green ',
                      }}
                    >
                      My Trips
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to="/profile"
                      className="nav-link"
                      activeStyle={{
                        fontWeight: ' bold ',
                        color: ' green ',
                      }}
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <LogOut className="nav-link" />
                  </li>
                </ul>
              )
              : (
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink
                      to="/register"
                      className="nav-link"
                      activeStyle={{
                        fontWeight: ' bold ',
                        color: ' green ',
                      }}
                    >
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link"
                      activeStyle={{
                        fontWeight: ' bold ',
                        color: ' green ',
                      }}
                    >
                      Login
                    </NavLink>
                  </li>
                </ul>
              )
            }
          </ul>
        </div>
      </nav>
    );
  }
}


export default Nav;
