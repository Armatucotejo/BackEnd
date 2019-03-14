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

class Players extends React.Component{

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
          fontSize: "11px",
          marginBottom: "0",
          marginTop: "11px",
        },
        puntaje:{
          fontSize: "14px",
          marginBottom: "0",
          marginTop: "16px",
          marginRight: "5px"
        },
        name:{
          fontSize: "9px",
          marginBottom: "0",
          marginTop: "2px",
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
        <div className="" align="" style={{marginRight:"10px", width:"111px", marginLeft:"7px"}}>
        <h5 className="comfortaa" style={styles.label}>{this.props.username}</h5>
        <h5 className="comfortaa"  style={styles.name}>{this.props.name}</h5>
        </div>
        <div className="row" align="center" style={{marginRight:"5px"}}>
        <div>
        <h5 className="comfortaa" style={styles.puntaje}>0.0</h5>
        </div>
        <div>
        <h5 className="comfortaa" style={styles.puntaje}>0.0</h5>
        </div>
        <div>
        <h5 className="comfortaa" style={styles.puntaje}>0.0</h5>
        </div>
        </div>

</div>
</div>





    );
  }
}

export default Players;