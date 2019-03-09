import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logonav from '../../../assets/images/logo-nav.png';
import logopng from '../../../assets/images/logo-png.png';
import avatarpng from '../../../assets/images/avatar.png';
import estrellapng from '../../../assets/images/estrella.png';
import Navgbar from './Navgbar';
import Calificacion from './Calificacion';

import InfoUsuario from './InfoUsuario';
import Estadisticas from './Estadisticas';

class PerfilF extends React.Component{

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

			<div className="container">
				<div className="row">
					<div className = "col">
					</div>

					<div className = "secondbc col-2"  style={{borderRadius:"5px"}}>
							<InfoUsuario/>
					</div>

					<div className = "thirdbc col-5"  style={{borderRadius:"5px"}}>
							<Estadisticas/>
					</div>
					<div className = "col">
					    <Calificacion dp="block"/>
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


export default PerfilF
