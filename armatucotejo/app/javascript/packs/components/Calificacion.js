import React, { Component } from 'react';
import Navgbar from './Navgbar';
import Interes from './Interes';

class Calificacion extends React.Component{
  render(){
    const styles={
      calificacion:{
        display: this.props.dp,

      },
    }
    var lis = [];
    for (var i=0; i<10; i++) {
    lis.push(<Interes/>);
  }
    return(
<div style={styles.calificacion} >
  {lis}
</div>
    )
  }
}

export default Calificacion;
