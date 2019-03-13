/*global fetch*/
/*global Headers*/
/*global Request*/
import React, { Component } from 'react';
import Navgbar from './Navgbar';
import {Button,Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import Login from './Login';
import Checkbox from '@material-ui/core/Checkbox';
import Pickers from './Pickers';
import logonav from '../../../assets/images/logo-nav.png';
import InfoPartida from './InfoPartida';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';

class Eventos extends React.Component{


  constructor(props) {
  super(props);
  this.state = {sport: '', lugar:'Ninguno', data: [], datauser:[], lugares:[], lat:[], lon:[], idLugar:'', username:'', fecha:"", hora:""};
  this.handleChange = this.handleChange.bind(this);
  this.handleChangeL = this.handleChangeL.bind(this);
  this.dateChange = this.dateChange.bind(this);
  this.timeChange = this.timeChange.bind(this);

  axios.get('../parks')
  .then(response => {
    this.setState({data: response.data});
    console.log(this.state.data[2])
    let lugares = this.state.lugares;
    let lat = this.state.lat;
    let lon = this.state.lon;
    for (var i = 0; i <this.state.data.length ; i++) {
      lugares.push(this.state.data[i].name)
      lat.push(this.state.data[i].googleMapsX)
      lon.push(this.state.data[i].googleMapsY)
      this.setState({lugares: lugares, lat: lat, lon:lon})
  }
    console.log(this.state.lugares)
    console.log(this.state.lat)
    console.log(this.state.lon)
  });
  axios.get('../users')
  .then(response => {
    this.setState({datauser: response.data});
    let username = this.state.datauser[this.state.datauser.length-1].username;
    this.setState({username: username})
  });
}

  getGoogleMaps() {
    // If we haven't already defined the promise, define it
    if (!this.googleMapsPromise) {
      this.googleMapsPromise = new Promise((resolve) => {
        // Add a global handler for when the API finishes loading
        window.resolveGoogleMapsPromise = () => {
          // Resolve the promise
          resolve(google);

          // Tidy up
          delete window.resolveGoogleMapsPromise;
        };

        // Load the Google Maps API
        const script = document.createElement("script");
        const API = 'AIzaSyCC4lO1PjOC9xzRaOK86FJoht6VBFYcsB8';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&callback=resolveGoogleMapsPromise`;
        script.async = true;
        document.body.appendChild(script);
      });
    }

    // Return a promise for the Google Maps API
    return this.googleMapsPromise;
  }
  componentWillMount() {
    // Start Google Maps API loading since we know we'll soon need it
    this.getGoogleMaps();
  }
  componentDidMount() {
    // Once the Google Maps API has finished loading, initialize the map
    this.getGoogleMaps().then((google) => {
      const bogota = {lat: 4.639530, lng: -74.085363};
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: bogota
      });

      for (var i = 0; i < this.state.data.length; i++) {
              const marker = new google.maps.Marker({
                    position: new google.maps.LatLng(this.state.lat[i], this.state.lon[i]),
                    map: map,
                });
              marker.setMap(map);
        }
    });
  }

  handleChange(event) {
    this.setState({sport: event.target.value });
  }

  handleChangeL(event) {
    this.setState({lugar: event.target.value});s
  }
  dateChange(event) {
    this.setState({fecha: event.target.value });
  }
  timeChange(event) {
    this.setState({hora: event.target.value });
  }

  render(){
    const deportes = [
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

    const logo = (
      <div id="LogoEvento" className="col-4">
        <div className="col-8 mAuto marginAuto">
          <img id="imgEvento" src={logonav} alt="logohome"/>
        </div>
      </div>
    );

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
           {deportes.map(option => (
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
          onChange={this.dateChange}
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
          onChange={this.timeChange}
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
           onChange={this.handleChangeL.bind(this)}
         >
           {this.state.lugares.map(option => (
             <MenuItem value={option}>
               {option}
             </MenuItem>
           ))}
         </TextField>
         </div>
      );

      const button = (
        <div>
            <Link to="/eventoOn"><button onClick={()=>this.validateSingup()} className="btn comfortaa buttonCrear fivebc firstc">Crear Cotejo</button></Link>
        </div>
      );

    return(
      <div>
      <Navgbar/>
      {logo}
      <div id="containerEven" className="container">

        <div className="row">
          <div className="col">
          </div>

          <div className="fivebc EventoDivUp col-6 justify-content-center">
              <div className="EventoDiv" id="map">
              </div>
          </div>

          <div className="fivebc EventoDivUp col-3 justify-content-center">
              <div id="Pickers" className="firstbc" style={{paddingLeft: "15px", paddingRight: "15px"}}>
              {selectSport}
              {datePicker}
              {timePicker}
              {lugar}
              {comentarios}
              {button}
              </div>
          </div>

          <div className="col">
          </div>
        </div>

      </div>
      </div>
		)
}


validateSingup(){

var locationId = ""

  for(var j = 0; j < this.state.data.length; j++){
    if(this.state.data[j].name == this.state.lugar){
      locationId = this.state.data[j].id
    }
}


const data = {
username: this.state.username,
sport: this.state.sport,
locationId: locationId,
fecha: this.state.fecha,
hora: this.state.hora,

}

console.log(data);
const headers = new Headers();
headers.append('Content-Type','application/json');
const options = {
method: 'POST',
headers,
body: JSON.stringify(data)
}


const request = new Request('../create_event ',options);
fetch(request)
.then(response => response.json())
.then(
data => console.log(data)
);
console.log(this.state);

}

}

export default Eventos
