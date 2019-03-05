import React,{Componente} from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Circular from './CircularEst';
import Interes from './Interes';
import { Link } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
    const styles={
      contenedor:{
        margin:"10px auto",
        paddingBottom: "15px",
        paddingTop: "15px",
      },
      button:{
        paddingTop: "10px",
      },
      interes:{
        justifyContent: "center",
      },
      califica:{
        margin: "auto",
        padding: "5px",
        alignItems: "center"
      },
      div:{
        marginTop: "5px",
        marginBottom: "5px",
      },
    }

    const theme = createMuiTheme({
          palette: {
          primary: {
          main: '#183152',
        },
      },
  });

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
        <div className="row" style={styles.div}>
          <div align="center" className="row col-8" style={styles.interes}>
              <div className="row">
                <h1 style={{fontSize: "20px"}} className="comfortaa">Historial de Cotejos</h1>
              </div>
              <div className="row">
              <Interes/>
              <Interes/>
              <Interes/>
              <Interes/>
              </div>
          </div>
          <div className="col-4" style={styles.califica}>
          <Link to="/eventos"><MuiThemeProvider theme={theme}><Button variant="contained" color="primary" className="buttonAjustes" >
            Calificar
          </Button></MuiThemeProvider></Link>
          </div>

        </div>
      );



    return(
    <div align="center" className="col" style={styles.contenedor}>
      {estadistica}
      {intereses}
      <div style={styles.button} className="row">
      <div className="col">
      </div>
      <div className="col-5 divEst">
      <Link to="/unirse"><MuiThemeProvider theme={theme}><Button variant="contained" color="primary" className="comfortaa buttonEstadisticas" >
        Unirse
      </Button></MuiThemeProvider></Link>
      </div>
      <div className="col-5 divEst">
      <Link to="/eventos"><MuiThemeProvider theme={theme}><Button variant="contained" color="primary" className=" comfortaa buttonEstadisticas" >
        Crear
      </Button></MuiThemeProvider></Link>
      </div>
      <div className="col">
      </div>
      </div>
    </div>
    );
  }
}

export default Estadisticas;
