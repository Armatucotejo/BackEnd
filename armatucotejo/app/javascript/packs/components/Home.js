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
      <Comentarios/>

      </div>
		)
	}
}

export default Home
