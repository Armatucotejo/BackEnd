import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logonav from '../../../assets/images/logo-nav.png';
import logopng from '../../../assets/images/logo-png.png';
import avatarpng from '../../../assets/images/avatar.png';
import estrellapng from '../../../assets/images/estrella.png';
import Navgbar from './Navgbar';

class Perfil extends React.Component{





	render(){
		const logo = (

			<div align =  "center">
				<div id="logohome" className="col-3">
      				<div>
        				<img id="imgLogo" src={logonav} alt="logohome"/>
      				</div>
      			</div>
			</div>
		);

		const pagina = (

			<div className="container">
				<div className = "col-4">
				<div className="secondbc col-14 divReg" >
					<div id = "avatar" align = "center" className="row">
						<div id="avatarpng" className="col-5">
      						<div>
        						<img id="imgAvatar" src={avatarpng} alt="logohome" width = "250%" />
      						</div>
      					</div>
					</div>

					<div id = "info" className="container containerReg">
						<div className="col-10 centerdiv inputReg">
          					<input type="user" className="comfortaa form-control formReg" id="inputUserName" placeholder="Usuario"
          					/>
        				</div>
        				<div className="col-10 centerdiv inputReg">
          					<input type="user" className="comfortaa form-control formReg" id="Name" placeholder="Nombre"
          					        					/>
        				</div>
        				<div className="col-10 centerdiv inputReg">
          					<input type="user" className="comfortaa form-control formReg" id="inputUserName" placeholder="Informacion"
          					/>
        				</div>
					</div>

					<div id = "puntaje" >
						<div id = "texto" align = "center">
							<h3 className="fivec pacifico"> Puntaje </h3>
						</div>
						<div id = "estrellas" >

							<img id="imgEstrella1" src={estrellapng} width = "30%" alt="logohome"/>

							<img id="imgEstrella2" src={estrellapng} alt="logohome" width = "30%"/>
							<img id="imgEstrella3" src={estrellapng} alt="logohome" width = "30%"/>
						</div>
					</div>

					<div id = "boton">

						<div className="col-10 centerdiv inputReg">
          				<Link to="/eventos"><button className="btn comfortaa buttonLogin fivebc firstc">Ajustes</button></Link>
        				</div>

					</div>
				</div>

				<div>

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
			)
	}
}


export default Perfil
