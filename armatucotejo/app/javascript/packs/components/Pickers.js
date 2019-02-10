import React from 'react';
import ReactDOM from 'react-dom';


class Pickers extends React.Component{

  render(){

    return(
        <div className="container">
          <div className="row">
            <select className="createForm custom-select" id="inlineFormCustomSelect" placeholder="No.Jugadores">
              <option value="1">6</option>
              <option value="2">7</option>
              <option value="3">8</option>
              <option value="4">9</option>
              <option value="4">10</option>
              <option value="4">11</option>
              <option value="4">12</option>
            </select>

            <textarea className="descForm form-control" id="exampleFormControlTextarea1" rows="1"  placeholder="Lugar"></textarea>

            <textarea className="descForm form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Descripción"></textarea>
          </div>
          <div>
            <a className="btn comfortaa buttonReg secondbc fivec">Crear Cotejo</a>
          </div>
        </div>
    )
  }
}

export default Pickers;
