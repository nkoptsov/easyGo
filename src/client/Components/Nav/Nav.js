import React from 'react';
import { Link } from "react-router-dom";
import isAuthorized from '../../Utils/isAuthorized';

class Nav extends React.Component {
  render(){
      console.log(isAuthorized());
      return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to="/" className="navbar-brand">EasyGo</Link>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <Link to="/" className="nav-link">Home</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/trips" className="nav-link">Trips</Link>
                      </li>
                      { isAuthorized() ?
                          (
                              <li className="nav-item">
                                <Link to="/subscriptions" className="nav-link">Subscriptions</Link>
                              </li>
                          ) :
                          (
                              <ul className="navbar-nav">
                                  <li className="nav-item">
                                     <Link to="/register" className="nav-link">Register</Link>
                                  </li>
                                  <li className="nav-item">
                                      <Link to="/login" className="nav-link">Login</Link>
                                  </li>
                              </ul>
                          )
                      }
                      <li className="nav-item">
                          <Link to="/search" className="nav-link">Search</Link>
                      </li>
                  </ul>
              </div>
          </nav>
      );
  }
}


export default Nav;