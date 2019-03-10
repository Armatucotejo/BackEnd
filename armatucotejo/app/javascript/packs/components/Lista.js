import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

class Lista extends React.Component{

  constructor(props) {
  super(props);
  this.state = {sport: '', lugar:''};
  this.handleChange = this.handleChange.bind(this);
  this.handleChangeL = this.handleChangeL.bind(this);
  }

  handleChange(event) {
    this.setState({sport: event.target.value});
  }
  handleChangeL(event) {
    this.setState({lugar: event.target.value});
  }


  render(){
    const styleS={
      contenedor:{
        margin:"10px auto",
        paddingBottom: "15px",
        paddingTop: "15px",
        display: "flex",
        fontFamily: "comfortaa",
      },
      button:{
        paddingTop: "10px",
      },

    }
    const selectSports =(
      <div className="DivInfoS">
      <TextField
         select
         label=""
         value={this.state.sport}
         style={styleS}
         onChange={this.handleChange}
       >
         {ranges.map(option => (
           <MenuItem key={option.value} value={option.value}>
             {option.label}
           </MenuItem>
         ))}
       </TextField>
       </div>
    );

    return(
    <div className="container">
      <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

  <div className="ui card thirdbc">
    <div className="card-header" role="tab" id="headingOne1">
      <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
        aria-controls="collapseOne1">
        <h5 className="mb-0 fivec">
          Futbol <i className="fas fa-angle-down rotate-icon"><span className="badge badge-primary badge-pill fourbc">14</span></i>
        </h5>
      </a>
    </div>

    <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
      <div className="card-body fourc">
        Pumarejo
      </div>
    </div>
  </div>
  <div className="ui card thirdbc">
    <div className="card-header" role="tab" id="headingOne2">
      <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne2" aria-expanded="true"
        aria-controls="collapseOne2">
        <h5 className="mb-0 fivec">
          Futsal <i className="fas fa-angle-down rotate-icon"><span className="badge badge-primary badge-pill fourbc">14</span></i>
        </h5>
      </a>
    </div>

    <div id="collapseOne2" className="collapse show" role="tabpanel" aria-labelledby="headingOne2" data-parent="#accordionEx">
      <div className="card-body fourc">
        Cancha 15
      </div>
    </div>
  </div>
  <div className="ui card thirdbc">
    <div className="card-header" role="tab" id="headingOne3">
      <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne3" aria-expanded="true"
        aria-controls="collapseOne3">
        <h5 className="mb-0 fivec">
          Voleyball <i className="fas fa-angle-down rotate-icon"><span className="badge badge-primary badge-pill fourbc">1</span></i>
        </h5>
      </a>
    </div>

    <div id="collapseOne3" className="collapse show" role="tabpanel" aria-labelledby="headingOne3" data-parent="#accordionEx">
      <div className="card-body fourc">
        La Arenosa
      </div>
    </div>
  </div>
  <div className="ui card thirdbc">
    <div className="card-header" role="tab" id="headingOne4">
      <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne4" aria-expanded="true"
        aria-controls="collapseOne4">
        <h5 className="mb-0 fivec">
          Basketball <i className="fas fa-angle-down rotate-icon"><span className="badge badge-primary badge-pill fourbc">1</span></i>
        </h5>
      </a>
    </div>

    <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne4" data-parent="#accordionEx">
      <div className="card-body fourc">
        Encoya
      </div>
    </div>
  </div>

</div>

    </div>
    )
  }
}

export default Lista;
