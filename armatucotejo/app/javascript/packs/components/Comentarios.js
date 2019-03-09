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
        open: false,
        openJ: false,
        openP: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleChangeJ = this.handleChangeJ.bind(this);
    this.handleCloseJ = this.handleCloseJ.bind(this);
    this.handleOpenJ = this.handleOpenJ.bind(this);
    this.handleChangeP = this.handleChangeP.bind(this);
    this.handleCloseP = this.handleCloseP.bind(this);
    this.handleOpenP = this.handleOpenP.bind(this);
  };

  handleChange(event){
    this.setState({ tecnica: event.target.value });
  };

  handleClose(){
    this.setState({ open: false });
  };

  handleOpen(){
    this.setState({ open: true });
  };

  handleChangeJ(event){
    this.setState({ juego: event.target.value });
  };

  handleCloseJ(){
    this.setState({ openJ: false });
  };

  handleOpenJ(){
    this.setState({ openJ: true });
  };
  handleChangeP(event){
    this.setState({ puntualidad: event.target.value });
  };

  handleCloseP(){
    this.setState({ openP: false });
  };

  handleOpenP(){
    this.setState({ openP: true });
  };



  render(){
      const styles={
        avatar:{
          width:"20px",
          height:"20px",
          borderRadius: "20px",
          paddingBottom: "1px",
        },
        button:{
          paddingTop: "1px",
        },

      }

    return(
    <div className="container secondbc">
      <div className="row">
        <div className="">
          <img alt="Avatar" src={avatar} style={styles.avatar} />
        </div>
        <div className="">
        <form autoComplete="off">
        <FormControl>
          <InputLabel htmlFor="demo-controlled-open-select">Tecníca</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.tecnica}
            onChange={this.handleChange}
            inputProps={{
              name: 'tecnica',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </form>
        </div>
        <div className="">
        <form autoComplete="off">
        <FormControl>
          <InputLabel htmlFor="demo-controlled-open-select">Juego Limpio</InputLabel>
          <Select
            open={this.state.openJ}
            onClose={this.handleCloseJ}
            onOpen={this.handleOpenJ}
            value={this.state.juego}
            onChange={this.handleChangeJ}
            inputProps={{
              name: 'juego',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </form>
        </div>
        <div className="">
        <form autoComplete="off">
        <FormControl>
          <InputLabel htmlFor="demo-controlled-open-select">Puntualidad</InputLabel>
          <Select
            open={this.state.openP}
            onClose={this.handleCloseP}
            onOpen={this.handleOpenP}
            value={this.state.puntualidad}
            onChange={this.handleChangeP}
            inputProps={{
              name: 'puntualidad',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </form>
        </div>


</div>
</div>





    );
  }
}

export default Comentarios;
