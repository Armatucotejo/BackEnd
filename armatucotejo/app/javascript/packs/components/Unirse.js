/*global fetch*/
/*global Headers*/
/*global Request*/
import React, { Component } from 'react';
import Navgbar from './Navgbar';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Login from './Login';
import Checkbox from '@material-ui/core/Checkbox';
import Pickers from './Pickers';
import logonav from '../../../assets/images/logo-nav.png';
import InfoPartida from './InfoPartida';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios';

import Players from './Players';
import Matches from './Matches';
class Unirse extends React.Component{


  constructor(props) {
  super(props);
  this.state = {sport: 'Futsal', lugar:'Ninguno', data: [], datauser:[], lugares:[], lat:[], lon:[], idLugar:'', username:'', fecha:"", hora:""};
  this.handleChange = this.handleChange.bind(this);
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
        zoom: 11,
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

      var lis = [];
      for (var i=0; i<6; i++) {
      lis.push(<Players name="Felipe" username="FelipeTK"/>);
      }


      var numMax = "";
      if(this.state.sport == "Basketball"){
        numMax = "10";
      }
      if(this.state.sport == "Futbol"){
        numMax = "24";
      }
      if(this.state.sport == "Futsal"){
        numMax = "12";
      }
      if(this.state.sport == "Voleyball"){
        numMax = "12";
      }

      var matches = [];
      for (var i=0; i<6; i++) {
      matches.push(<Matches name="Felipe" username="FelipeTK" numplayers= "0" numMax={numMax}/>);
      }

      const players=(
        <div  style={{justifyContent: "center", border: "2px solid #183152", marginLeft: "0px", marginRight: "2px", overflowY:"scroll", height:"254px"}}>
        {lis}
        </div>
      );
      const matchesD=(
        <div  style={{justifyContent: "center", border: "2px solid #183152", marginLeft: "0px", marginRight: "2px", overflowY:"scroll", height:"254px"}}>
        {matches}
        </div>
      );

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
          textField:{
            width: "110px",
            marginRight: "10px",
            marginTop: "5px"
          },
          textFieldL:{
            width: "290px",
            marginRight:"10px",
            marginTop: "5px"
          },
          textFieldC:{
            width: "290px",
            marginRight:"10px",
            marginTop: "5px"
          },
          divInfo:{
            justifyContent: "center",
            border: "2px solid #183152",
            borderRadius: "10px",
            marginLeft: "4px",
            paddingLeft: "5px",
            marginRight: "4px",
          }
}


      const button = (
        <div>
            <Link to="/eventoOn"><button onClick={()=>this.validateSingup()} className="btn comfortaa buttonCrear fivebc firstc">Crear Cotejo</button></Link>
        </div>
      );

      const theme = createMuiTheme({
        palette: {
          primary: {
            main: '#183152',
          },
        },
      });
      const info=(
        <div className="firstbc" style={{margin:"0.4em", paddingBottom:"5px"}}>
            <h1 className="comfortaa fivec" style={{textAlign:"center", fontSize:"20px", paddingTop:"10px"}}>Información de partida</h1>
            <div style={styles.divInfo}>
            <TextField
              id="standard-read-only-input"
              label="Lugar"
              defaultValue=""
              style={styles.textFieldL}
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="standard-read-only-input"
              label="Fecha"
              defaultValue=""
              style={styles.textField}
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="standard-read-only-input"
              label="Hora"
              defaultValue=""
              style={styles.textField}
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="standard-multiline-static"
              label="Comentarios"
              multiline
              rows="2"
              defaultValue=""
              style={styles.textFieldC}
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
            />
            <Link to="/ajustes">
            <MuiThemeProvider theme={theme}><Button style={{width: "183px", marginTop: "20px", marginLeft: "29px"}} variant="contained" color="primary" className="buttonAjustes" >
              Unirse
              <i style={{marginLeft:"5px"}} className="material-icons">settings</i>
            </Button></MuiThemeProvider>
            </Link>
            </div>
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
              <div className="InfoDiv">
              {info}
              </div>
          </div>

          <div className="fivebc EventoDivUp col-3 justify-content-center" style={{height:"412px"}}>
              <div id="Pickers" className="firstbc" style={{paddingLeft: "10px", paddingRight: "10px"}}>
              <h1 className="comfortaa fivec" style={{textAlign:"center", fontSize:"20px", marginTop:"11px"}}>Unete a un Cotejo</h1>
              {selectSport}
              <h1 className="comfortaa fivec" style={{textAlign:"center", fontSize:"20px", marginTop:"11px"}}>Cotejos</h1>
              {matchesD}
              <h1 className="comfortaa fivec" style={{textAlign:"center", fontSize:"20px", marginTop:"11px"}}>Jugadores</h1>
              {players}
              </div>
          </div>

          <div className="col">
          </div>
        </div>

      </div>
      </div>
		)
}


/*

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

}*/

}
export default Unirse
