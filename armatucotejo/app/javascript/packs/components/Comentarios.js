import React,{Componente} from 'react';
import avatar from '../../../assets/images/avatarP.png';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class Comentarios extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        username:"PepitoPrepa13",
        tecnica: "",
        juego: " ",
        puntualidad: "",
    };
  };




  render(){
      const styles={
        avatar:{
          width:"30px",
          height:"30px",
          borderRadius: "20px",
          paddingBottom: "1px",
        },
        button:{
          paddingTop: "1px",
        },
        label:{
          fontSize: "9px",
          marginBottom: "0",
          marginTop: "5px",
        },
        input:{
          width: "39px",
          height: "30px",
          fontSize: "16px",
        },
        divavatar:{
          marginTop: "9px",
          marginLeft: "5px",
          marginRight: "5px"
        },

      }

    return(
    <div className="container secondbc">
      <div className="row">
        <div className="" style={styles.divavatar}>
          <img alt="Avatar" src={avatar} style={styles.avatar} />
        </div>
        <div className="" align="center" style={{marginRight:"15px"}}>
        <h5 className="comfortaa" style={styles.label}>Tecníca</h5>
            <input  style={styles.input}  className="dato" type="number" placeholder="0"  min="1" max ="10"></input>
        </div>
        <div className="" align="center" style={{marginRight:"5px"}}>
        <h5 className="comfortaa"  style={styles.label}>Fairplay</h5>
            <input  style={styles.input} className="dato" type="number" placeholder="0"  min="1" max ="10"></input>
        </div>
        <div className="" align="center">
        <h5 className="comfortaa"  style={styles.label}>Puntualidad</h5>
          <input  style={styles.input} className="dato" type="number" placeholder="0" min="1" max ="10"></input>
        </div>
</div>
</div>





    );
  }
}

export default Comentarios;
