import React, { Component } from 'react';
import Navgbar from './Navgbar';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Comentarios from './Comentarios';
class Home extends React.Component{

  constructor(props) {
  super(props);
  this.state = {login: 'block', reg:'none'};
  this.ChangeDiv = this.ChangeDiv.bind(this);
}

  ChangeDiv(){
      this.setState({ login: 'none', reg:'block'});
  }


  render(){

    const titleHome = (
      <h1 className="titlehome fivec carter" ></h1>
    );

    return(
      <div>
      <Navgbar/>
      {titleHome}
      <div className="container">
        <div className="row">
          <div className="col-4 justify-content-center">
          </div>
          <div className="col-4 justify-content-center">
          <Login dp={this.state.login} onClick={this.ChangeDiv}/>
          <Register dp={this.state.reg}/>
          </div>
          <div className="col-4 justify-content-center">
          </div>
        </div>
      </div>

      </div>
		)
	}
}

export default Home
