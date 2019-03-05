import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import navlogo from '../../../assets/images/navlogo.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


class Navgbar extends React.Component{


  render(){

    const styles = {
  menuButton: {
    marginRight: "11em",
    color: "white",
  },
  img:{
    marginLeft: "13em",
  },
};
    return(
      <div>
      <nav className="navbar navbar-expand-lg fivebc navfont">
      <div className="container-fluid">
          <Link to="/" style={styles.img} className=" logonav"><img id="navlogo" src={navlogo} alt="navlogo"/></Link>
          <IconButton style={styles.menuButton} aria-label="Menu">
            <MenuIcon/>
          </IconButton>
      </div>
      </nav>
        </div>


    );
  }
}

export default Navgbar;
