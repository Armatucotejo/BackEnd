import React, { Component } from 'react';
import avatar from '../../../assets/images/avatarP.png';

class Interes extends React.Component{

  render(){
    const styles={
      avatar:{
        width:"50px",
        height:"50px",
        borderRadius: "50px",
        marginRight: "5px",
        marginBottom: "5px",
        marginTop: "18px"
      },
      text:{
        fontSize: "16px"
      }
    }

    return(
      <div>
      <div>
        <img alt="Avatar" src={avatar} style={styles.avatar} />
      </div>
      </div>
    );
}
}
export default Interes;
