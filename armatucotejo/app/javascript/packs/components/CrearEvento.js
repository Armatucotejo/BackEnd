import React, { Component } from 'react';
import Navegbar from './Navgbar'
import {Button,Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class CrearEvento extends React.Component{
  render(){

    const titulo = (
      <div>
        <h1 id="titleselector" className="permanent center fivec"> ARMA TU COTEJO </h1>
      </div>
    );

    const mapa = (
        <div>
          <div className="container">
            <div id="interfaz" className="row justify-content-center">
              <div className="col-6">
              <div id="map"></div>
              </div>
              <div className="fivebc col-3">
            <h2 class="formulario">Crear Evento</h2>
              <div className="col">
              <select id="inputState" class="form-control">
                <option selected>Deportes</option>
                <option>Futbol</option>
                <option>Futsal</option>
                <option>Basketball</option>
                <option>Voleyball</option>
              </select>
              </div>
              <h6> </h6>
              <div class="formulario">
                <div class="formulario">
                  Lugar
                  <input type="text" name="" value="Lugar"></input>
                </div>
                <form name="formulario2">
                  <div class="formulario2">
                    Selecciona la fecha deseada:
                    <input type="date" name="fecha" min="2019-03-25"
                                                    max="2019-05-25" step="2"></input>
                  </div>
                  <div class="formulario2">
                    Selecciona la hora deseada:
                    <input type="time" name="hora" min="18:00"
                    max="21:00" step="3600"></input>
                    <h6> </h6>
                  </div>

                </form>
                <div class="formulario2">
                  <div className="col">
                  <select id="inputState" class="form-control">
                    <option selected>Jugadores</option>
                    <option>Jugador1</option>
                    <option>Jugador2</option>
                    <option>Jugador3</option>
                    <option>Jugador4</option>
                  </select>
                  <h6> </h6>
                  </div>
                </div>
                <div class="formulario">
                  <input type="text" name="" value="Description"></input>
                </div>
              </div>
              <div class="center divbutton"><a class="link nav-link" href="/crearevento"><button class="btn buttonhome btn-lg thirdbc ">Crear</button></a><h6 class="comfortaa firstc regbutton"></h6></div>
              </div>
            </div>
          </div>
        </div>
    );

    return(
      <div>
        <Navegbar/>
        {titulo}
        {mapa}
      </div>
		)
	}
}

export default CrearEvento
