import React, { Component } from 'react';
import Navgbar from './Navgbar';
import Comentarios from './Comentarios';

import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

class Calificacion extends React.Component{

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
  {lis}
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
