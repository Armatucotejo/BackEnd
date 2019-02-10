import React, { Component } from 'react';
import {Button,Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import navlogo from '../../../assets/images/navlogo.png';
import { Link } from 'react-router-dom';

class Navgbar extends React.Component{


  render(){
    return(
      <nav className="navbar navbar-expand-lg fivebc navfont">
      <div className="container-fluid">
        <div className= "navbar-header firstc">
          <Link to="/" className="navbar-brand link nav-link"><img id="navlogo" src={navlogo} alt="navlogo"/></Link>
        </div>
        <ul className="navbar-nav">

        </ul>
      </div>
      </nav>
    )
  }
}

export default Navgbar;
