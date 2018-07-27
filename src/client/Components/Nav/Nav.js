import React from 'react';
//import { Link } from "react-router-dom";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';

export default class Toolbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Easy Go</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-left" navbar>
                            <NavItem>
                                <NavLink href="/">Главная</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/profile">Профайл</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/trips">Путешествия</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/trips">Мои утешествия</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/updatetrip">Изменить путешествие</NavLink>
                            </NavItem>


                        </Nav>
                    </Collapse>

                </Navbar>
            </div>
        );
    }
}


/*
const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/" className="navbar-brand">EasyGo</Link>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">Register</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/trips" className="nav-link">Trips</Link>
        </li>
      </ul>
    </div>
  </nav>  
)

export default Nav;

*/