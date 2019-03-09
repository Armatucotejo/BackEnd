import React, { Component } from 'react';
import Navgbar from './Navgbar';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import axios from 'axios';

class Home extends React.Component{

  constructor(props) {
  super(props);
  this.state = {login: 'block', reg:'none'};
  this.ChangeDiv = this.ChangeDiv.bind(this);
  this.ChangeDivL = this.ChangeDivL.bind(this);}

  ChangeDiv(){
      this.setState({ login: 'none', reg:'block'});
  }
  ChangeDivL(){
      this.setState({ login: 'block', reg:'none'});
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
          <Register dp={this.state.reg} onClick={this.ChangeDivL}/>
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
