import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logonav from '../../../assets/images/logo-nav.png';
import logopng from '../../../assets/images/logo-png.png';
import avatarpng from '../../../assets/images/avatar.png';
import basketballpng from '../../../assets/images/basketball.png';
import ciclismopng from '../../../assets/images/ciclismo.png';
import futballpng from '../../../assets/images/futball.png';
import voleyballpng from '../../../assets/images/voleyball.png';
import Navgbar from './Navgbar';
import Button from '@material-ui/core/Button';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import AjustesUsuario from './AjustesUsuario';
import Estadisticas from './Estadisticas';

class Ajustes extends React.Component{

	constructor(props){
		super(props);
		this.state={ userName: "ARMATUCTEJO"};
		}

	render(){

		const theme = createMuiTheme({
			palette: {
				primary: {
					main: '#183152',
				},
			},
		});

		const styles={
			logoApp:{
				width: "70%",
    		display: "block",
	    	margin: "auto",
			},
			divLogo:{
				paddingTop: "40px",
			},
			input:{
				marginBottom: "3px",
			},
			button:{
				paddingTop: "10px",
				paddingBottom:"5px",
				width: "255px"
			},
			genero:{
        fontSize: "14px",
        marginTop: "5px",
				paddingTop: "3px",
        marginLeft: "2px",
        color: "#757d85"

      },
      divGenero:{
        justifyContent: "center",
        marginLeft: "-133px",
        backgroundColor: "white",
        width: "34%",
        borderRadius: ".25rem",
        height: "37px",
        marginTop: "2px"
      },
		}


		const logo = (
			<div id="LogoEvento" className="col-4" align="center">
			<div className="col-8 mAuto">
				<img id="imgEvento" src={logonav} alt="logohome"/>
			</div>
			</div>
		);

		const pagina = (

			<div id="containerEven" className="container">
				<div className="row">
				<div className="col">
				</div>
					<div className="thirdbc col-3 divcol inputReg" align="center">

							<div id="InputAjustes" className="thirdbc">
								<h1 className="comfortaa fivec" style={{textAlign:"center", fontSize:"20px", marginTop:"11px"}}>Información de Usuario</h1>
								<div style={{width:"230px"}}>
								<input type="name" class="comfortaa form-control formReg" id="inputName" ref="inputName" style={styles.input} placeholder="Nombre"></input>
								<input type="lastname" class="comfortaa form-control formReg" id="inputLastName" ref="inputLastName" style={styles.input} placeholder="Apellido"></input>
								<input type="user" class="comfortaa form-control formReg" id="inputUserName" ref="inputUserName" style={styles.input} placeholder="Usuario"></input>
								<input type="correo" class="comfortaa form-control formReg" id="inputCorreo" ref="inputCorreo" style={styles.input} placeholder="E-mail"></input>
								<input type="password" class="comfortaa form-control formReg" id="inputPassword" ref="inputPassword" style={styles.input} placeholder="Contraseña"></input>
								<input type="celular" class="comfortaa form-control formReg" id="inputCelular" ref="inputCelular" style={styles.input} placeholder="Celular cotejo"></input>
								</div>
								<div style={styles.divGenero}>
			          <h1 style={styles.genero} className="comfortaa">Fecha de Nacimiento</h1>
								<input style={{fontSize:"15px"}} type="date" id="date" ref="date"></input>
								</div>
								<div style={styles.button}>
								<Link to="/PerfilF">
					      <MuiThemeProvider theme={theme}><Button style={{paddingBottom:"5px"}}variant="contained" color="primary" className="buttonAjustes" >
					        Guardar
					        <i style={{marginLeft:"5px"}} className="material-icons">done</i>
					      </Button></MuiThemeProvider>
					      </Link>
					      </div>
							</div>
					</div>
					<div className="col">

					</div>
				</div>
			</div>


		);
		return(
			<div>
			<Navgbar/>
			{logo}
			{pagina}
			</div>
		);


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


export default Ajustes
