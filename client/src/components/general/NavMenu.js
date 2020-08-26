import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './NavMenu.css';

import data from "../data";

import PropTypes from 'prop-types';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import Home from "../AppLinks/home.component";
import Products from "../AppLinks/products.component";
import About from "../AppLinks/about.component";
import Contact from "../AppLinks/contact.component";
import Login from "../AppLinks/login.component";
import Signup from "../AppLinks/signup.component";

function NavLink(props) {
    return (
        <Link className='NavLink' to={props.info.url}>
            {props.info.label}
        </Link>
    )
} 

class NavMenu extends Component {

    renderNavLink(i) {
        return (
          <NavLink
            handel={i.url}
            linkName={i.label}
          />
        );
      }

    render() {
        const navBarLinksLeft = data[0].slice(0,3);
        const loginSignup = data[0].slice(3,5);

        return (
          <Router>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
              <Link to="/home" className="navbar-brand">Zack's App</Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  {navBarLinksLeft.map( (item) => (
                      <NavLink key={item.id} info={item} />
                  ))}
                </Nav>
                <Nav className="ml-auto">
                  <NavLink key={loginSignup[0].url} info={loginSignup[0]} />
                </Nav>
                  <Link to={loginSignup[1].url}><Button>{loginSignup[1].label}</Button></Link>
              </Navbar.Collapse>
            </Navbar>
            <Route path="/home" exact component={Home} />
            <Route path="/products" exact component={Products} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
          </Router>
        )
    }
}
// ========================================
export default NavMenu;

NavMenu.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

NavMenu.defaultProps = {
    href: '#404',
    label: 'LinkNotFound'
}
