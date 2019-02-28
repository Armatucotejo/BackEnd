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

import InfoUsuario from './InfoUsuario';
import Estadisticas from './Estadisticas';

class Ajustes extends React.Component{

	constructor(props){
		super(props);
		this.state={ userName: "Mierda"};
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
      				<div style={styles.logoApp}>
        				<img id="imgLogo" src={logonav} alt="logohome"/>
      				</div>
      	</div>
			</div>
		);

		const pagina = (

			<div id="containerEven" className="container">

				<div className="row justify-content-md-center">

					<div className = "secondbc  col col-lg-3">
							<InfoUsuario/>

					</div>
					<div className="thirdbc col col-lg-6 justify-content-center divcol inputReg">
						<div className="row justify-content-center">
							<img alt="basketballpng1" src={basketballpng} style={styles.contenedor} />
							<img alt="ciclismopng1" src={ciclismopng} style={styles.contenedor} />
							<img alt="futballpng1" src={futballpng} style={styles.contenedor} />
							<img alt="voleyballpng1" src={voleyballpng} style={styles.contenedor} />
						</div>

							<div className="row divcol inputReg justify-content-center">
								<input type="name" class="comfortaa form-control formReg" id="inputUserName" placeholder="Nombre"></input>
								<input type="name" class="comfortaa form-control formReg" id="inputUserName" placeholder="Apellido"></input>
								<input type="name" class="comfortaa form-control formReg" id="inputUserName" placeholder="Usuario"></input>
								<input type="name" class="comfortaa form-control formReg" id="inputUserName" placeholder="E-mail"></input>
								<input type="password" class=" comfortaa form-control formReg" id="inputPassword" placeholder="Contraseña"></input>
								<input type="name" class="comfortaa form-control formReg" id="inputUserName" placeholder="Celular cotejo"></input>
								<p><label for="date"class="comfortaa formReg" >Example date</label>  <input type="date" id="date"></input></p>
								<textarea class="descForm form-control comfortaa" id="exampleFormControlTextarea1" rows="3" placeholder="Descripción"></textarea>
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
}


export default Ajustes
