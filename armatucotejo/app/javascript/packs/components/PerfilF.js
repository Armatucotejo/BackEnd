/*global fetch*/
/*global Headers*/
/*global Request*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logonav from '../../../assets/images/logo-nav.png';
import logopng from '../../../assets/images/logo-png.png';
import avatarpng from '../../../assets/images/avatar.png';
import estrellapng from '../../../assets/images/estrella.png';
import Navgbar from './Navgbar';
import Calificacion from './Calificacion';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import InfoUsuario from './InfoUsuario';
import Estadisticas from './Estadisticas';
import axios from 'axios';

class PerfilF extends React.Component{

	constructor(props){
		super(props);
		this.state={ comentarios: "none", data:[], name:"", username:""};
	  this.ChangeDiv = this.ChangeDiv.bind(this);
		this.ChangeDivN = this.ChangeDivN.bind(this);
		console.log("Hola prev");
		axios.get('../users')
		.then(response => {
			console.log("Hola");
			this.setState({data: response.data});
			console.log(this.state.data[2])
			let name = this.state.data[this.state.data.length-1].name;
			let username = this.state.data[this.state.data.length-1].username;
			var usuarioelegido = null;
			    for (var i=0; i<this.state.data.length; i++) {
			        var temp = this.state.data[i];
			        if (usuarioelegido == null ){
			            usuarioelegido = temp;
			        }else if(temp.logindate != null && usuarioelegido != null){
			        		var dateNew= new Date(temp.logindate);
			        		var dateOld= new Date(usuarioelegido.logindate);// some mock date
							var millisecondsNew = dateNew.getTime(); 
							var millisecondsOld = dateOld.getTime(); 
							if(millisecondsNew > millisecondsOld){
								usuarioelegido = temp;
							}
			  
			        }
			        console.log("Holaaaaaaaaaaa");
			    }
			    
			this.setState({name: usuarioelegido.name, username: usuarioelegido.username})
			console.log(this.state.lugares)
		});
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
							<InfoUsuario username={this.state.username} name={this.state.name}/>
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
