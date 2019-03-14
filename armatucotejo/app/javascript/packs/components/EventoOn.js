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


import Players from './Players';

class EventoOn extends React.Component{


  constructor(props) {
  super(props);
  this.state = {lugar:'Ninguno', data: [], matches:[],lugares: "", lat: "", lon:"", sport:"", description:"", date:"", time:"", latM: "", lonM:""};
  axios.get('../parks')
  .then(response => {
    this.setState({data: response.data});
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
  axios.get('../matchesJson')
  .then(response => {
    this.setState({matches: response.data});
    let lugar = this.state.matches[this.state.matches.length-1].location_id
    let sport = this.state.matches[this.state.matches.length-1].sport_id
    let date = this.state.matches[this.state.matches.length-1].date
    let time = this.state.matches[this.state.matches.length-1].time
    let description = this.state.matches[this.state.matches.length-1].description

    var location = ""
    var deporte = ""
    var lat = ""
    var lon = ""
      for(var j = 0; j < this.state.data.length; j++){
        if(this.state.data[j].id == lugar){
          location = this.state.data[j].name
          lat = this.state.data[j].googleMapsX
          lon = this.state.data[j].googleMapsY
        }
    }
    if(sport == 1){
      deporte = "Futbol"
    }
    if(sport == 2){
      deporte = "Futsal"
    }
    if(sport == 3){
      deporte = "Voleyball"
    }if(sport == 4){
      deporte = "Basketball"
    }

    this.setState({lugar: location, description: description, sport: deporte, time: time, date: date, latM: lat, lonM: lon})
    console.log(this.state.matches)
    console.log(this.state.latM)
    console.log(this.state.lonM)

    this.getGoogleMaps().then((google) => {
      console.log(this.state.latM)
      console.log(this.state.lonM)
      const bogota = new google.maps.LatLng(this.state.latM,this.state.lonM);
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: bogota
      });

      const marker = new google.maps.Marker({
          position: new google.maps.LatLng(this.state.latM, this.state.lonM),
          map: map,
          });
          marker.setMap(map);
        });
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
}/*
componentDidMount() {
  // Once the Google Maps API has finished loading, initialize the map
  this.getGoogleMaps().then((google) => {
    console.log(this.state.latM)
    console.log(this.state.lonM)
    const bogota = new google.maps.LatLng(this.state.latM,this.state.lonM);
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: bogota
    });

    const marker = new google.maps.Marker({
        position: new google.maps.LatLng(this.state.latM, this.state.lonM),
        map: map,
        });
        marker.setMap(map);
      });
}*/


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
        },
        text2:{
          fontSize: "16px",
          marginTop: "6px",
          marginLeft: "4px",
          color: "#757d85",
          height: "44px",
          backgroundColor: "white",
          paddingTop: "4px",
          paddingLeft: "8px",
        }
      }


      const button = (
        <div>
            <Link to="/perfilf"><button className="btn comfortaa buttonCrear fivebc firstc">Cancelar</button></Link>
        </div>
      );

      var lis = [];
      for (var i=0; i<6; i++) {
      lis.push(<Players name="Felipe" username="FelipeTK"/>);
      }

      const players=(
        <div  style={{justifyContent: "center", border: "2px solid #183152", marginLeft: "0px", marginRight: "2px", marginBottom:"5px"}}>
        {lis}
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

          <div className="fivebc EventoDivUp col-6 justify-content-center" style={{height:"413px"}}>
              <div className="EventoDiv" id="map">
              </div>
          </div>

          <div className="fivebc EventoDivUp col-3 justify-content-center">
              <div id="Pickers" className="firstbc" style={{paddingLeft: "15px", paddingRight: "15px"}}>
              <div>
              <h1 style={styles.titulo} className="comfortaa fivec" align="center">Cotejo Activo</h1>
              <h1 style={styles.text} className="comfortaa">{this.state.sport}</h1>
              <h1 style={styles.text2} className="comfortaa">{this.state.lugar}</h1>
              <h1 style={styles.text} className="comfortaa">{this.state.date}</h1>
              <h1 style={styles.text} className="comfortaa">{this.state.time}</h1>
              <h1 className="comfortaa fivec" style={{textAlign:"center", fontSize:"20px", marginTop:"11px"}}>Jugadores</h1>
              {players}
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
