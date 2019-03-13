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

class EventoOn extends React.Component{


  constructor(props) {
  super(props);
  this.state = {sport: '', lugar:'Ninguno', data: []};
  axios.get('../create_event')
  .then(response => {
    this.setState({data: response.data});
    console.log(this.state.data[2])
    let lugar = this.state.lugar;
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


  render(){

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

    const styles ={
        display: this.props.dp,
        titulo:{
          fontSize: "20px",
          marginTop: "12px",
          marginLeft: "11px"

        },
        text:{
          fontSize: "16px",
          marginTop: "6px",
          marginLeft: "4px",
          color: "#757d85",
          height: "28px",
          backgroundColor: "white",
          paddingTop: "4px",
          paddingLeft: "8px",
        }
      }


      const button = (
        <div>
            <button className="btn comfortaa buttonCrear fivebc firstc">Cancelar</button>
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
              <div>
              <h1 style={styles.titulo} className="comfortaa fivec" aling="center">Cotejo Activo</h1>
              <h1 style={styles.text} className="comfortaa">Deporte</h1>
              <h1 style={styles.text} className="comfortaa">Lugar</h1>
              <h1 style={styles.text} className="comfortaa">Fecha</h1>
              <h1 style={styles.text} className="comfortaa">Hora</h1>
              {button}
              </div>
              </div>
          </div>

          <div className="col">
          </div>
        </div>

      </div>
      </div>
		)
}

}

export default EventoOn
