import React,{Componente} from 'react';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../../../assets/images/avatarP.png';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

class AjustesUsuario extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        username:"PepitoPrepa13",
        name: "Pepito Preparatoria",
        age: 20,
    };
  }

  render(){
      const styles={
        avatar:{
          width:"150px",
          height:"150px",
          borderRadius: "150px",
          paddingBottom: "10px",
        },
        contenedor:{
          margin:"10px auto",
          paddingBottom: "15px",
          paddingTop: "15px",
        },
        button:{
          paddingTop: "10px",
        },
        text:{
          username:{
            fontSize: "24px",
          },
          name:{
            fontSize: "14px",
          },
          age:{
            fontSize: "14px",
          }
        },


      }

    return(
    <div align="center" className="col" style={styles.contenedor}>
      <img alt="Avatar" src={avatar} style={styles.avatar} />
        <h3 id="delBottom" style={styles.text.username} className="comfortaa">@{this.state.username}</h3>
        <h3 id="delBottom" style={styles.text.name} className="comfortaa">{this.state.name}</h3>
        <h3 id="delBottom" style={styles.text.age} className="comfortaa">{this.state.age} Años</h3>      
    </div>
    );
  }
}

export default AjustesUsuario;
