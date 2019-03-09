import React, { Component } from 'react';
import Navgbar from './Navgbar';
import Comentarios from './Comentarios';

class Calificacion extends React.Component{
  render(){
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
</div>
    )
  }
}

export default Calificacion;
