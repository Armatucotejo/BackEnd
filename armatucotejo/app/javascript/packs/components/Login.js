/*global fetch*/
/*global Headers*/
/*global Request*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logopng from '../../../assets/images/logo-png.png';
import logonav from '../../../assets/images/logo-nav.png';
import axios from 'axios';
import { Redirect } from 'react-router';

class Login extends React.Component{

  constructor(props) {
    super(props);
    this.state = { redirect: false, data:[] };
    axios.get('../users')
		  .then(response => {
			    console.log("Hola");
			    this.setState({redirect: false, data: response.data, error: ""});
			    console.log("data " + this.state.data);
		  });
  }
  
  validateSingup2(){
    console.log("validateSingup2");
  }
  
  validateSingup(){
    const data = {
      username: this.refs.inputUserName.value,
      password: this.refs.inputPassword.value,
    }
    
        console.log(data);
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }

  const request = new Request('../loginown',options);
  fetch(request)
  .then(response => response.json())
  .then(
  data => console.log(data+" hola")
  );
  //console.log(this.state);
    
    for (var i=0; i<this.state.data.length; i++) {
        var temp = this.state.data[i];
        if (temp.username == data.username && temp.password == data.password ){
            this.setState({redirect: true, data: this.data, error:"Datos de acceso incorrectos"});
            
        }
        console.log("Holaaaaaaaaaaa");
    }
    
    


}
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
          <input type="user" className="comfortaa form-control formReg" id="inputUserName" ref="inputUserName" placeholder="Nombre de Usuario"
          />
        </div>

        <div className="col-10 centerdiv inputReg">
          <input type="password" className=" comfortaa form-control formReg" id="inputPassword" ref="inputPassword" placeholder="Contraseña"
          />
          <Link to="/contra"><h6 className="comfortaa  olvpass">¿Olvidaste tu contraseña?</h6></Link>
        </div>
        <div className="col-10 centerdiv inputReg">
          <button  onClick={()=>this.validateSingup()} className="btn comfortaa buttonLogin fivebc firstc">Iniciar Sesion</button>
          <a onClick={this.props.onClick} className="btn comfortaa buttonReg fivebc firstc">Registrate Rapido</a>
          <h1>{this.state.error}</h1>
        </div>
      </div>
      </form>

    </div>

  </div>
    );
      if (this.state.redirect) {
        return <Redirect push to="/perfilf" />
      }
    return(
      <div>
        {logo}
        {login}

      </div>
    )
  }
}

export default Login;
