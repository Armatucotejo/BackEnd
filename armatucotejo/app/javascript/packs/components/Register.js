/*global fetch*/
/*global Headers*/
/*global Request*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logopng from '../../../assets/images/logo-png.png';
import logonav from '../../../assets/images/logo-nav.png';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';

class Register extends React.Component{
  render(){

    const styles ={
      display: this.props.dp,
      genero:{
        fontSize: "14px",
        marginTop: "6px",
        marginLeft: "11px",
        color: "#757d85"

      },
      divGenero:{
        justifyContent: "center",
        marginLeft: "0px",
        backgroundColor: "white",
        width: "41%",
        borderRadius: ".25rem",
        height: "27px",
        marginTop: "2px"
      }
    }
    const styleDP = {
      display: "flex",
      fontFamily: "comfortaa",
    }


    const registro = (
    <div className="secondbc col-8 divReg " style={styles}>

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
          <input type="name" className="comfortaa form-control formReg" id="inputName" ref="inputName" placeholder="Nombres"
          />
        </div>
        <div className="col-10 centerdiv inputReg">
          <input type="lastname" className="comfortaa form-control formReg" id="inputLastName" ref="inputLastName"  placeholder="Apellidos"
          />
        </div>

        <div className="col-10 centerdiv inputReg">
          <input type="user" className="comfortaa form-control formReg" id="inputUserName" ref="inputUserName"  placeholder="Nombre de Usuario"
          />
        </div>
        <div className="col-10 centerdiv inputReg">
          <input type="correo" className="comfortaa form-control formReg" id="inputCorreo" ref="inputCorreo" placeholder="Correo Electronico"
          />
        </div>
        <div className="col-10 centerdiv inputReg">
          <input type="correo" className="comfortaa form-control formReg" id="inputCelular" ref="inputCelular" placeholder="Celular"
          />
        </div>
        <div className="col-10 centerdiv inputReg">
          <input type="password" className="comfortaa form-control formReg" id="inputPassword" ref="inputPassword" placeholder="Contraseña"
          />
        </div>
        <div className="col-10 centerdiv inputReg">
          <input type="password" className="comfortaa form-control formReg" id="inputPasswordC" ref="inputPasswordC" placeholder="Confirmar Contraseña"
          />
        </div>
        <div className="col-10 row centerdiv inputReg" style={{justifyContent: "center", marginLeft: "4px"}}>
          <div style={styles.divGenero}>
          <h1 style={styles.genero} className="comfortaa">Generó</h1>
          </div>
          <div style={{width:"49%"}}>
          <select  style={{marginLeft:"6px", width:"113%", fontSize:"16px", height:"31px"}}>
           <option className="comfortaa" value="masculino">Masculino</option>
           <option className="comfortaa" value="femenino">Femenino</option>
         </select>
          </div>
        </div>
        <div className="col-10 centerdiv inputReg birthPicker">
          <form noValidate className="DivInfo">
            <TextField ref="date"
              id="date"
              label="Fecha de Nacimiento"
              type="date"
              defaultValue="2000-01-01"
              style={styleDP}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </div>


        <div className="col-10 centerdiv inputReg">
            <Link to="/perfilf"><button  onClick={()=>this.validateSingup()}  className="btn comfortaa buttonLogin fivebc firstc">Registrar</button></Link>
          <a onClick={this.props.onClick} className="btn comfortaa buttonReg fivebc firstc">Iniciar Sesión</a>
        </div>

        <div className="col-10 centerdiv inputReg">
          <p className="comfortaa condicionesReg">Al registrarte, aceptas nuestras Condiciones, la Política de datos y la Política de cookies.</p>
        </div>
      </div>

      </form>
    </div>

  </div>
    );

    return(
      <div>
        {registro}
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
  passwordc: this.refs.inputPasswordC.value,
  datechoose: this.refs.date.value,
  user_data_type: "Player",
  user_data_id :1,
  date : new Date(),
  sender_id: 1
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
  fetch(request)
  .then(response => response.json())
  .then(
  data => console.log(data)
  );
  console.log(this.state);

  }
}

export default Register
