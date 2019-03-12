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
		this.state={ comentarios: "none"};
	  this.ChangeDiv = this.ChangeDiv.bind(this);
		this.ChangeDivN = this.ChangeDivN.bind(this);
		}

		ChangeDiv(){
				this.setState({ comentarios: 'block'});
		}
		ChangeDivN(){
				this.setState({ comentarios: 'none'});
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

					<div className = "secondbc col-2"  style={{borderRadius:"5px",height: "340px"}}>
							<InfoUsuario/>
					</div>

					<div className = "thirdbc col-5"  style={{borderRadius:"5px",height: "340px"}}>
							<Estadisticas onClick={this.ChangeDiv}/>
					</div>
					<div className = "col">
					    <Calificacion dp={this.state.comentarios} onClick={this.ChangeDivN}/>
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
