import React, { Component } from 'react';
import Navgbar from './Navgbar';
import {Button,Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Checkbox from '@material-ui/core/Checkbox';
import logonav from '../../../assets/images/logo-nav.png';
import Lista from './Lista';
import InfoEvento from './InfoEvento';
class Unirse extends React.Component{

    render(){

      const logo = (
        <div id="LogoEvento" className="col-4">
        <div className="col-8 mAuto">
          <img id="imgEvento" src={logonav} alt="logohome"/>
        </div>
        </div>
      );

      return(
        <div>
        <Navgbar/>
        {logo}
        <div id="containerEven" className="container">

          <div className="row">
            <div className="col">
            </div>

            <div className="secondbc EventoDivUp col-6 justify-content-center">
                <div className="EventoDiv" id="map"></div>
                <InfoEvento/>
            </div>

            <div className="secondbc EventoDivUp col-3 justify-content-center">
                <div id="Pickers" className="mContent">
                  <Lista/>
                </div>

            </div>
          </div>
        </div>
          </div>

  		)
  	}
    validateSingup(){
  		const data = {
  				name: this.refs.inputName.value,
  				lastname: this.refs.inputLastName.value,
  				username: this.refs.inputUserName.value,
  				email: this.refs.inputCorreo.value,
  				celphone: this.refs.inputCelular.value,
  				password: this.refs.inputPassword.value,
  				datechoose: this.refs.date.value
  		}
  		console.log(data);
  		const headers = new Headers();
  		headers.append('Content-Type','application/json');
  		const options = {
  		method: 'POST',
  		headers,
  				body: JSON.stringify(data)
  		}


  		const request = new Request('../users',options);
  		fetch(request).then(response => response.json())
  	.then(data => this.setState({ data }));;
  	console.log(this.state);

  }
  }

export default Unirse
