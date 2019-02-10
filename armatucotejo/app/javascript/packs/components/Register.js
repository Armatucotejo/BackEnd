import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logopng from '../../../assets/images/logo-png.png';
import logonav from '../../../assets/images/logo-nav.png';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

class Register extends React.Component{
  render(){

    const styles ={
      display: this.props.dp
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
          <input type="name" className="comfortaa form-control formReg" id="inputName" placeholder="Nombres"
          />
        </div>
        <div className="col-10 centerdiv inputReg">
          <input type="lastname" className="comfortaa form-control formReg" id="inputLastName" placeholder="Apellidos"
          />
        </div>

        <div className="col-10 centerdiv inputReg">
          <input type="user" className="comfortaa form-control formReg" id="inputUserName" placeholder="Nombre de Usuario"
          />
        </div>
        <div className="col-10 centerdiv inputReg">
          <input type="correo" className="comfortaa form-control formReg" id="inputCorreo" placeholder="Correo Electronico"
          />
        </div>
        <div className="col-10 centerdiv inputReg">
          <input type="correo" className="comfortaa form-control formReg" id="inputCelular" placeholder="Celular"
          />
        </div>
        <div className="col-10 centerdiv inputReg">
          <input type="password" className="comfortaa form-control formReg" id="inputPassword" placeholder="Contraseña"
          />
        </div>
        <div className="col-10 centerdiv inputReg">
          <input type="password" className="comfortaa form-control formReg" id="inputPasswordC" placeholder="Confirmar Contraseña"
          />
        </div>
        <div className="col-10 centerdiv inputReg birthPicker">
          <form noValidate className="DivInfo">
            <TextField
              id="date"
              label="Fecha de Nacimiento"
              type="date"
              defaultValue="2019-01-31"
              style={styleDP}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </div>


        <div className="col-10 centerdiv inputReg">
          <button className="btn comfortaa buttonReg fivebc firstc">Registrar</button>
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
}

export default Register
