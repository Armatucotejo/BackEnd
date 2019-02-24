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

			<div className="container">
				<div className="row">
					<div className = "col">
					</div>

					<div className = "secondbc col-2">
							<InfoUsuario/>
					</div>

					<div className = "thirdbc row-4">
						<div className="">
							<img alt="basketballpng1" src={basketballpng} style={styles.basketball} />
						</div>
						<div className="">
							<img alt="ciclismopng1" src={ciclismopng} style={styles.basketball} />
						</div>
						<div className="">
							<img alt="futballpng1" src={futballpng} style={styles.basketball} />
						</div>
						<div className="">
							<img alt="voleyballpng1" src={voleyballpng} style={styles.basketball} />
						</div>
					</div>


					<div className = "thirdbc col-5">
          <h2>xd</h2>
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
