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
import axios from 'axios';

class Ajustes extends React.Component{

	constructor(props){
		super(props);
		this.state={ username: "", data:[], players:[]};
		axios.get('../users')
		.then(response => {
			this.setState({data: response.data});
			console.log( this.state.data[response.data.length-1]);
			this.refs.inputName.value = response.data[response.data.length-1].name;
			this.refs.inputUserName.value = response.data[response.data.length-1].username;
			this.refs.inputCorreo.value = response.data[response.data.length-1].email;
			this.setState({username: response.data[response.data.length-1].username});
		});
		axios.get('../playersJson')
		.then(response => {
			this.setState({players: response.data});
			this.refs.inputCellphone.value = this.state.players[this.state.players.length-1].cellphone;
		});
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
				paddingTop: "3px",
        marginLeft: "1px",
        color: "#757d85"

      },
      divGenero:{
        justifyContent: "center",
        marginLeft: "0px",
        backgroundColor: "white",
        width: "94px",
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
								<h1 className="comfortaa fivec" style={{textAlign:"center", fontSize:"20px", marginTop:"11px"}}>Ajustes</h1>
								<h1 className="comfortaa fivec" style={{textAlign:"center", fontSize:"14px", marginTop:"3px"}}>Edita tu información personal</h1>
								<div style={{width:"230px"}}>
								<input type="name" className="comfortaa form-control formReg" id="inputName" ref="inputName" style={styles.input} placeholder="Nombre"></input>
								<input type="user" className="comfortaa form-control formReg" id="inputUserName" ref="inputUserName" style={styles.input} placeholder="Usuario"></input>
								<input type="correo" className="comfortaa form-control formReg" id="inputCorreo" ref="inputCorreo" style={styles.input} placeholder="E-mail"></input>
								<input type="cellphone" className="comfortaa form-control formReg" id="inputCellphone" ref="inputCellphone" style={styles.input} placeholder="Cellphone"></input>
								<input type="password" className="comfortaa form-control formReg" id="inputPassword" ref="inputPassword" style={styles.input} placeholder="Contraseña"></input>
								</div>
								<div style={styles.button}>
								<Link to="/PerfilF">
					      <MuiThemeProvider theme={theme}><Button onClick={()=>this.validateSingup()} style={{paddingBottom:"5px"}}variant="contained" color="primary" className="buttonAjustes" >
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
				username: this.refs.inputUserName.value,
				usernameOld: this.state.username,
				email: this.refs.inputCorreo.value,
				cellphone: this.refs.inputCellphone.value,
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

		const request = new Request('../userChangeInfo ',options);
		fetch(request)
		.then(response => response.json())
		.then(
		data => console.log(data)
		);

}


}


export default Ajustes
