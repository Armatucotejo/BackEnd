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

import AjustesUsuario from './AjustesUsuario';
import Estadisticas from './Estadisticas';

class Ajustes extends React.Component{

	constructor(props){
		super(props);
		this.state={ userName: "ARMATUCTEJO"};
		}

	render(){

		const styles={
			logoApp:{
				width: "70%",
    		display: "block",
	    	margin: "auto",
			},
			divLogo:{
				paddingTop: "40px",
			}
		}


		const logo = (
			<div align ="center" style={styles.divLogo}>
				<div id="logohome" className="col-3">
      				<div style={styles.ajuste}>
        				<img id="imgLogo" src={logonav} alt="logohome"/>
      				</div>
      	</div>
			</div>
		);

		const pagina = (

			<div id="containerEven" className="container">

				<div className="row justify-content-md-center">

					<div className = "secondbc  col col-lg-3 justify-content-center divcol inputReg">
							<AjustesUsuario/>
					</div>
					<div className="thirdbc  col col-lg-4 justify-content-center divcol inputReg">
						<div id="DeporteAjustes" className="row justify-content-center dep-ajustes">
							<img alt="basketballpng1" src={basketballpng} style={styles.ajuste} />
							<img alt="ciclismopng1" src={ciclismopng} style={styles.ajuste} />
							<img alt="futballpng1" src={futballpng} style={styles.ajuste} />
							<img alt="voleyballpng1" src={voleyballpng} style={styles.ajuste} />
						</div>

							<div id="InputAjustes" className="row  justify-content-center thirdbc">
								<input type="name" class="comfortaa form-control formReg" id="inputName" ref="inputName" placeholder="Nombre"></input>
								<input type="lastname" class="comfortaa form-control formReg" id="inputLastName" ref="inputLastName" placeholder="Apellido"></input>
								<input type="user" class="comfortaa form-control formReg" id="inputUserName" ref="inputUserName" placeholder="Usuario"></input>
								<input type="correo" class="comfortaa form-control formReg" id="inputCorreo" ref="inputCorreo" placeholder="E-mail"></input>
								<input type="password" class="comfortaa form-control formReg" id="inputPassword" ref="inputPassword" placeholder="Contraseña"></input>
								<input type="celular" class="comfortaa form-control formReg" id="inputCelular" ref="inputCelular" placeholder="Celular cotejo"></input>
								<p><label for="date"class="comfortaa formReg" >Fecha de nacimiento</label>  <input type="date" id="date" ref="date"></input></p>
								<textarea class="descForm form-control comfortaa" id="FormControlTextarea1" rows="3" ref="inputDescription" placeholder="Descripción"></textarea>
							</div>
					</div>
					<div className="col col-lg-1">

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