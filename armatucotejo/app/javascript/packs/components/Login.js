import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logopng from '../../../assets/images/logo-png.png';
import logonav from '../../../assets/images/logo-nav.png';


class Login extends React.Component{

    render(){

    const styles ={
      display: this.props.dp
    }

    const logo = (
      <div id="logohome" className="col-8">
      <div>
        <img id="imgLogo" src={logonav} alt="logohome"/>
      </div>
      </div>


    );




    const login = (
  <div className="secondbc col-8 divReg" style={styles}>

    <div className="container containerReg welcomeText">
      <div >
      <h1 id="textBienvenido" className="fivec pacifico">Bienvenido</h1>

      </div>
      <div>
      <h6 id="textLine" className="fivec carter">Arma tu cotejo en pocos pasos</h6>
      </div>
    </div>

    <div className="container containerReg">

      <form>
      <div className="form-group formGReg">


        <div className="col-10 centerdiv inputReg">
          <input type="user" className="comfortaa form-control formReg" id="inputUserName" placeholder="Nombre de Usuario"
          />
        </div>

        <div className="col-10 centerdiv inputReg">
          <input type="password" className=" comfortaa form-control formReg" id="inputPassword" placeholder="Contraseña"
          />
          <Link to="/contra"><h6 className="comfortaa  olvpass">¿Olvidaste tu contraseña?</h6></Link>
        </div>
        <div className="col-10 centerdiv inputReg">
          <Link to="/Perfilf"><button className="btn comfortaa buttonLogin fivebc firstc">Iniciar Sesion</button></Link>
          <a onClick={this.props.onClick} className="btn comfortaa buttonReg fivebc firstc">Registrate Rapido</a>
        </div>
      </div>
      </form>

    </div>

  </div>
    );

    return(
      <div>
        {logo}
        {login}

      </div>
    )
  }
}

export default Login;
