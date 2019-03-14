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
  this.state = {desc:"",date: [], time:[], idlugar:[], idsport: [], idevento:"", organizer:[], sport: '', lugar:'Ninguno', data: [], datauser:[], lugares:[], matches:[], lat:[], lon:[], idLugar:'', username:'', fecha:"", hora:""};
  this.handleChange = this.handleChange.bind(this);
  this.mostrarInfo = this.mostrarInfo.bind(this);
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
  axios.get('../matchesJson')
  .then(response => {
    this.setState({matches: response.data});
    let idsport = this.state.idsport
    let organizer = this.state.organizer
    let date = this.state.date
    let time = this.state.time
    let desc = this.state.desc
    let idlugar = this.state.idlugar
    for (var i = 0; i <this.state.matches.length ; i++) {
      idsport.push(this.state.matches[i].sport_id)
      date.push(this.state.matches[i].date)
      time.push(this.state.matches[i].time)
      desc.push(this.state.matches[i].desc)
      idlugar.push(this.state.matches[i].location_id)
      this.setState({idsport: idsport, date:date,time:time, idlugar: idlugar, desc:desc})
      for (var j = 0; j <this.state.datauser.length ; j++) {
        if( this.state.matches[i].organizer_id == this.state.datauser[j].id){
          organizer.push(this.state.datauser[j].username)
          this.setState({organizer: organizer})
        }
      }
    }


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
  mostrarInfo(id) {
    console.log(id)

      for( var i =0; i< this.state.matches.length; i++){
        if(id  == this.state.matches[i].id){
          console.log(this.state.matches[i].date)
          console.log(this.state.matches[i].time)
          this.setState({fecha:this.state.matches[i].date, hora:this.state.matches[i].time , desc: this.state.matches[i].description, idevento:id})
          for( var j =0; j< this.state.data.length; j++){
            if(this.state.matches[i].location_id == this.state.data[j].id){
              this.setState({lugar:this.state.data[j].name })
          }
        }
        }

      }
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

      for (var i=0; i < this.state.matches.length; i++) {
        var aux = this.state.matches[i].id
        if(this.state.idsport[i] == 1 && this.state.sport=="Futbol"){
          matches.push(<Matches click={()=>this.mostrarInfo(aux)} username={this.state.organizer[i]} numplayers= "0" numMax={numMax}/>);
        } //Futbol
        if(this.state.idsport[i] == 2 && this.state.sport=="Futsal"){
          matches.push(<Matches click={()=>this.mostrarInfo(aux)} username= {this.state.organizer[i]}  numplayers= "0" numMax={numMax}/>);
        } //Futsal
        if(this.state.idsport[i] == 3 && this.state.sport=="Voleyball"){
          matches.push(<Matches click={()=>this.mostrarInfo(aux)} username={this.state.organizer[i]}  numplayers= "0" numMax={numMax}/>);
        } //Voleyball
        if(this.state.idsport[i]== 4 && this.state.sport=="Basketball"){
          matches.push(<Matches  click={()=>this.mostrarInfo(aux)} username={this.state.organizer[i]}  numplayers= "0" numMax={numMax}/>);
        } //Basketball
      }

      const players=(
        <div  style={{justifyContent: "center", border: "2px solid #183152", marginLeft: "0px", marginRight: "2px", overflowY:"scroll", height:"202px"}}>
        {lis}
        </div>
      );
      const matchesD=(
        <div  style={{justifyContent: "center", border: "2px solid #183152", marginLeft: "0px", marginRight: "2px", overflowY:"scroll", height:"202px"}}>
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
              rows="2"
              value={this.state.lugar}
              style={styles.textFieldL}
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="standard-read-only-input"
              label="Fecha"
              value={this.state.fecha}
              style={styles.textField}
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="standard-read-only-input"
              label="Hora"
              value={this.state.hora}
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
              value={this.state.desc}
              style={styles.textFieldC}
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
            />
            <Link to="/eventoOn">
            <MuiThemeProvider theme={theme}><Button onClick={()=>this.validateSingup()} style={{width: "183px", marginTop: "20px", marginLeft: "29px"}} variant="contained" color="primary" className="buttonAjustes" >
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
      <div id="containerEven" className="container" style={{marginBottom:"25px"}}>

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

          <div className="fivebc EventoDivUp col-3 justify-content-center" style={{height:"611px"}}>
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



validateSingup(){

const data = {
username: this.state.username,
event_id: this.state.idevento,

}

console.log(data);
const headers = new Headers();
headers.append('Content-Type','application/json');
const options = {
method: 'POST',
headers,
body: JSON.stringify(data)
}


const request = new Request('../join_event ',options);
fetch(request)
.then(response => response.json())
.then(
data => console.log(data)
);
console.log(this.state);

}

}
export default Unirse
