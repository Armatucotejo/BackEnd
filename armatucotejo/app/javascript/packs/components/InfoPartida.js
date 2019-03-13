import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';

class InfoPartida extends React.Component{

  constructor(props) {
  super(props);
  this.state = {sport: '', lugar:'', data: []};
  this.handleChange = this.handleChange.bind(this);
  this.handleChangeL = this.handleChangeL.bind(this);
  this.loadData = this.loadData.bind(this);
}

  handleChange(event) {
    this.setState({sport: event.target.value});
  }
  handleChangeL(event) {
    this.setState({lugar: event.target.value});
  }

  render(){

    const ranges = [
      {
        value: 'Futbol',
        label: 'Futbol',
      },
      {
        value: 'Futsal',
        label: 'Futsal',
      },
      {
        value: 'Voleyball',
        label: 'Voleyball',
      },
      {
        value: 'Basketball',
        label: 'Basketball',
      },
    ];


    const parques = [
      {
        value: 'Atahualpa',
        label: 'Atahualpa',
      },
      {
        value: 'Simon Bolivar',
        label: 'Simon Bolivar',
      },
      {
        value: 'Olaya',
        label: 'Olaya',
      },
      {
        value: 'Salitre',
        label: 'Salitre',
      },
    ];

    const styleS = {
      display: "flex",
      fontFamily: "comfortaa",
    }
    const styleDP = {
      display: "flex",
      fontFamily: "comfortaa",
    }


    const selectSport =(
      <div className="DivInfoS">
      <TextField
         select
         label="Deporte"
         value={this.state.sport}
         style={styleS}
         onChange={this.handleChange}
       >
         {ranges.map(option => (
           <MenuItem key={option.value} value={option.value}>
             {option.label}
           </MenuItem>
         ))}
       </TextField>
       </div>
    );

    const datePicker = (
      <form noValidate className="DivInfo">
      <TextField
        id="date"
        label="Fecha de Juego"
        type="date"
        defaultValue="2019-01-31"
        style={styleDP}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );

    const timePicker=(
      <form noValidate className="DivInfo">
      <TextField
        id="time"
        label="Hora de Juego"
        type="time"
        defaultValue="07:00"
        style={styleDP}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
    );

    const comentarios = (
      <div className="input-group">
        <textarea className="descForm form-control comfortaa" id="exampleFormControlTextarea1" rows="3" placeholder="Descripción"></textarea>
      </div>
    );

    const lugar =(
      <div className="DivInfoS">
      <TextField
         select
         label="Lugar de Juego"
         value={this.state.lugar}
         style={styleS}
         onChange={this.handleChangeL}
       >
         {parques.map(option => (
           <MenuItem key={option.value} value={option.value}>
             {option.label}
           </MenuItem>
         ))}
       </TextField>
       </div>
    );

    const button = (
      <div>
          <button onClick={()=>this.loadData()} className="btn comfortaa buttonCrear fivebc firstc">Crear Cotejo</button>
      </div>
    );

    return(
        <div className="container">
          {selectSport}
          {datePicker}
          {timePicker}
          {lugar}
          {comentarios}
          {button}
        </div>
    )
  }

  loadData() {
    console.log("response.data");
    axios.get('http://127.0.0.1:3000/parks')
    .then(response => {
      this.setState({data: response.data});
      console.log(response.data)
      console.log(this.state.data)
    });
}

}

export default InfoPartida;
