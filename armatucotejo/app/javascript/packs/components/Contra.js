import React, { Component } from 'react';
import Navgbar from './Navgbar';
import {Button,Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Checkbox from '@material-ui/core/Checkbox';
import logonav from '../../../assets/images/logo-nav.png';
import axios from 'axios';
class Contra extends React.Component{

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
        <div id="containerEven" className="container col-4 thirdbc">

          <div className="row">
            <div className="col">
            <div className="element-main secondbc">
            		<h1 className="fivec">Olvidaste tu contra...</h1>
            		<p className=""> Tu cotejo te espera</p>
            		<form>
            			<input className="firstbc fourc" type="correo" id="inputCorreo" ref="inputCorreo" placeholder="Su e-mail cotejo@"></input>
            			<input className="buttonReg divReg fivebc secondc"  onClick={()=>this.validateSingup()} value="Recuperar contra coteja"></input>
            		</form>
            	</div>
            </div>
            </div>
            </div>
            </div>
    		)

  	}
    validateSingup(){
      const data = {
          email: this.refs.inputCorreo.value
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
  export default Contra
