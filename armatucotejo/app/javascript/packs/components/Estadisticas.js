import React,{Componente} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Circular from './CircularEst';
import { Link } from 'react-router-dom';

class Estadisticas extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        valor1: 9.2,
        valor2: 8.5,
        valor3: 7.8,
        name: "Andres Felipe Cardenas",
        age: 24,
    };
  }

  render(){

      const porcentaje = (this.state.valor1*100)/10;

      const estadistica = (
        <div className="row">
          <div className="col">
          <Circular porcentaje={porcentaje} valor={this.state.valor1}/>
          <p className="comfortaa">Técnica</p>
          </div>
          <div className="col">
          <Circular porcentaje={porcentaje} valor={this.state.valor2}/>
          <p className="comfortaa">Juego Limpio</p>
          </div>
          <div className="col">
          <Circular porcentaje={porcentaje} valor={this.state.valor3}/>
          <p className="comfortaa">Puntualidad</p>
          </div>

        </div>
      );
      const intereses = (
        <div className="col-8">
          Ya puedes empezar en un cotejo!
        </div>
      );

      const styles={
        contenedor:{
          margin:"10px auto",
          paddingBottom: "15px",
          paddingTop: "15px",
        },
        button:{
          paddingTop: "10px",
        },
      }

    return(
    <div align="center" className="col" style={styles.contenedor}>
      {estadistica}
      {intereses}
      <div style={styles.button} className="row">
      <div className="col">
      </div>
      <div className="col-5 divEst">
      <Link to="/unirse"><Button variant="contained" color="primary" className="buttonEstadisticas" >
        Unirse
      </Button></Link>
      </div>
      <div className="col-5 divEst">
      <Link to="/eventos"><Button variant="contained" color="primary" className="buttonEstadisticas" >
        Crear
      </Button></Link>
      </div>
      <div className="col">
      </div>
      </div>
    </div>
    );
  }
}

export default Estadisticas;
