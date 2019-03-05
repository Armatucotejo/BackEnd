import React, { Component } from 'react';
import avatar from '../../../assets/images/avatarP.png';

class Interes extends React.Component{

  render(){
    const styles={
      avatar:{
        width:"60px",
        height:"60px",
        borderRadius: "60px",
        marginRight: "5px",
        marginBottom: "5px",
      },
      text:{
        fontSize: "16px"
      }
    }

    return(
      <div>
      <div style={{position:"relative"}}>
        <img alt="Avatar" src={avatar} style={styles.avatar} />
      </div>
      <div  style={{position:"absolute"}}>
        <h1 style={styles.text} className="comfortaa">15</h1>
      </div>
      </div>
    );
}
}
export default Interes;
