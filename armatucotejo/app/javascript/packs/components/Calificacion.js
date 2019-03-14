import React, { Component } from 'react';
import Navgbar from './Navgbar';
import Comentarios from './Comentarios';

import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios';

class Calificacion extends React.Component{
  
  	constructor(props){
		super(props);
		this.state = { messages: []} ;
		console.log("Hola players");
		axios.get('../players')
		.then(response => {
		  console.log("Hola players");
			console.log(response.data);
			
		for (var i = 0; i < response.data.length; i++){
      var obj = response.data[i];
      console.log(obj);
      this.setState({messages: response.data});
    }

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
      calificacion:{
        display: this.props.dp,

      },
    }
    var lis = [];
    for (var i=0; i<9; i++) {
    lis.push(<Comentarios/>);
  }
    return(
<div style={styles.calificacion} >
        {this.state.messages.slice().map((info)=>
           <Comentarios data={info}key={info.id} />
        )}
  <div>
  <MuiThemeProvider theme={theme}><Button style={{marginTop: "3px", marginLeft: "10px"}}onClick={this.props.onClick} variant="contained" color="primary" className="comfortaa buttonAjustes" >
    Enviar
    <i style={{marginLeft:"5px"}} className="material-icons">done</i>
  </Button></MuiThemeProvider>
  </div>
</div>
    )
  }
}

export default Calificacion;
