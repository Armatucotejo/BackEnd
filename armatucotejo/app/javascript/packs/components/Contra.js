import React, { Component } from 'react';
import Navgbar from './Navgbar';
import {Button,Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Checkbox from '@material-ui/core/Checkbox';
import logonav from '../../../assets/images/logo-nav.png';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Contra extends React.Component{

    render(){
      const styles ={
        titulo:{
          fontSize: "19px",
          paddingTop: "12px",
          marginBottom: "0",
        },
        label:{
          marginBottom: "5px",
          fontSize: "14px",
        },
        input:{
          paddingBottom: "5px",
          width: "300px",
        },
        button:{
          width: "288px",
          marginBottom: "10px",
        }
      }

      const logo = (
        <div id="LogoEvento" className="col-4" align="center">
        <div className="col-8 mAuto">
          <img id="imgEvento" src={logonav} alt="logohome"/>
        </div>
        </div>
      );

      return(
        <div>
        <Navgbar/>
        {logo}
        <div id="containerEven" className="container col-4">
        <div className="row">
              <div className="col">
              </div>
              <div className="col-8">
                <div className="element-main secondbc" style={{textAlign:"center"}}>
              		<h1 style={styles.titulo} className="fivec comfortaa">Recuperación de Contraseña</h1>
              		<h1 style={styles.label} className="comfortaa">Ingresa tu Correo Electronico</h1>
                  <div className="col-10 centerdiv inputReg" style={styles.input}>
                    <input type="email" placeholder="example@mail.com" className="comfortaa form-control formReg" id="inputEmail" ref="inputEmail"
                    />
                  </div>
                  <Link to="/"><button /* onClick={()=>this.validateSingup()}*/ style={styles.button}className="btn comfortaa buttonLogin fivebc firstc">Recuperar</button></Link>
              	</div>
              </div>
              <div className="col">
              </div>
            </div>
            </div>
        </div>
    		)
  	}
  }
  export default Contra
