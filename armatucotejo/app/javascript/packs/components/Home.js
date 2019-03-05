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
  console.log("Felipe");
          axios.get('https://armatucotejo2-pipemax85.c9users.io/users').then(response => 
            {
                console.log(response.data);
            }
        );
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
