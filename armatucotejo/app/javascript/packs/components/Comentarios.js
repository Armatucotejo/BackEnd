import React,{Componente} from 'react';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../../../assets/images/avatarP.png';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

class Comentarios extends React.Component{


  constructor(props){
    super(props);
    this.state = {
        username:"UsuarioNuevo1",
        name: "Pepito Preparatoria",
        age: 20,
    };
  }
  onkeyup(){
    alert("tecla");
  };

  render(){
      const styles={
        avatar:{
          width:"120px",
          height:"120px",
          borderRadius: "120px",
          paddingBottom: "10px",
        },
        contenedor:{
          margin:"10px auto",
          paddingBottom: "15px",
          paddingTop: "15px",
        },
        button:{
          paddingTop: "10px",
        },
        text:{
          username:{
            fontSize: "24px",
          },
          name:{
            fontSize: "14px",
          },
          age:{
            fontSize: "14px",
          }
        },
        

      
        
      }
     

    return(
    <div className="container secondbc">
  <div className="row">
    <div className="col-md-3">
      <img alt="Avatar" src={avatar} style={styles.avatar} />
        <h3 id="delBottom" style={styles.text.username} className="comfortaa">@{this.state.username}</h3>

      <div style={styles.button}>
      <Link to="/"> <Button variant="contained" color="primary">Califica tu cotejo</Button></Link>
    </div>
       

    </div>
      <div className="row">
        <div className="bloque">
          <h5 className="comfortaa">Tecnica</h5>
          <input id = "juego" className="dato" type="number" placeholder="" width="50px" height="50px" min="1" max ="10"></input>
        </div>
        <div className="bloque">
          <h5 className="comfortaa">Juego Limpio</h5>
          <input className="dato" type="number" placeholder="" width="50px" height="50px" min="1" max ="10"></input>        
        </div>
        <div className="bloque">
          <h5 className="comfortaa">Puntualidad</h5>
          <input  className="dato" type="number" placeholder="" width="50px" height="50px" min="1" max ="10"></input>
        </div>
        <div className="bloque">
            <textarea   rows="1" placeholder="Comentarios adicionales"></textarea>
        </div>
        
       
      </div>
     
      
  

</div>
</div>



  
    
    );
  }
}

export default Comentarios;
