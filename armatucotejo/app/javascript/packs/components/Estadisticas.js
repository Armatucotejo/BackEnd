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
        valor1: 7.5,
        valor2: 8.5,
        valor3: 9.5,
        age: 24,
    };
  }

  render(){
    const styles={
      contenedor:{
        margin:"0px auto",
        paddingBottom: "10px",
        paddingTop: "18px",
      },
      button:{
        paddingTop: "10px",
      },
      interes:{
        justifyContent: "center",
        border: "2px solid #183152",
        borderRadius: "10px",
        marginLeft: "11px",
        marginBottom: "4px"
      },
      califica:{
        margin: "auto",
        padding: "5px",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid #183152",
        borderRadius: "10px",
        marginLeft: "25px",
        marginBottom: "4px",
      },
      div:{
        marginTop: "5px",
        marginBottom: "5px",
      },
      circular:{
        justifyContent: "center",
        border: "2px solid #183152",
        borderRadius: "10px",
        marginBottom: "4px",
        marginLeft: "-3px",
        marginRight: "1px",
        paddingTop: "16px",
      },
    }

    const theme = createMuiTheme({
          palette: {
          primary: {
          main: '#183152',
        },
      },
  });

      const porcentaje1 = (this.state.valor1*100)/10;
      const porcentaje2 = (this.state.valor2*100)/10;
      const porcentaje3 = (this.state.valor3*100)/10;

      const estadistica = (
        <div className="row" style={styles.circular}>
          <div className="col">
          <Circular porcentaje={porcentaje1} valor={this.state.valor1}/>
          <p className="comfortaa fivec textPuntaje">Técnica</p>
          </div>
          <div className="col">
          <Circular porcentaje={porcentaje2} valor={this.state.valor2}/>
          <p className="comfortaa fivec textPuntaje">Juego Limpio</p>
          </div>
          <div className="col">
          <Circular porcentaje={porcentaje3} valor={this.state.valor3}/>
          <p className="comfortaa fivec textPuntaje">Puntualidad</p>
          </div>

        </div>
      );


      const intereses = (
        <div className="row" style={styles.div}>
          <div align="center" className="row col-7" style={styles.interes}>
              <div className="row" style={{height:"0", marginTop:"19px", justifyContent:"center"}}>
                <h1 style={{fontSize: "20px", marginBottom:"3px"}} className="comfortaa fivec">Historial de Cotejos</h1>
                <hr style={{height: "2px" ,backgroundColor: "#183152", width:"210px", margin: "0"}}/>
              </div>
              <div className="row">
              <Interes/>
              <Interes/>
              <Interes/>
              <Interes/>
              </div>
          </div>
          <div className="col-4" style={styles.califica}>
          <div onClick={this.props.onClick}>
          <MuiThemeProvider theme={theme}><Button variant="contained" color="primary" className="comfortaa buttonAjustes" >
            Calificar
            <i style={{marginLeft:"5px"}} className="material-icons">check_circle</i>
          </Button></MuiThemeProvider>
          </div>
          <Link to="/eventos"><MuiThemeProvider theme={theme}><Button variant="contained" color="primary" className=" comfortaa buttonAjustes" >
            Crear
            <i style={{marginLeft:"5px"}} className="material-icons">input</i>
          </Button></MuiThemeProvider></Link>
          <Link to="/unirse"><MuiThemeProvider theme={theme}><Button variant="contained" color="primary" className="comfortaa buttonAjustes" >
            Unirse
            <i style={{marginLeft:"5px"}} className="material-icons">search</i>
          </Button></MuiThemeProvider></Link>

          </div>

        </div>
      );



    return(
    <div align="center" className="col" style={styles.contenedor}>
      {estadistica}
      {intereses}
    </div>
    );
  }
}

export default Estadisticas;
