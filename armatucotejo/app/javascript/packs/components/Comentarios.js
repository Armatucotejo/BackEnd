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
        username:"PepitoPrepa13",
        name: "Pepito Preparatoria",
        age: 20,
    };
  }

  render(){
      const styles={
        avatar:{
          width:"150px",
          height:"150px",
          borderRadius: "150px",
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
    <div className="col col-lg-3">
      <img alt="Avatar" src={avatar} style={styles.avatar} />
        <h3 id="delBottom" style={styles.text.username} className="comfortaa">@{this.state.username}</h3>

      <div style={styles.button}>
      <Link to="/"> <Button variant="contained" color="primary"  >Califica tu cotejo</Button></Link>
    </div>
       

    </div>
     <input type="name"   placeholder="Nombre"></input>
     <input type="name"   placeholder="Nombre"></input>
     <input type="name"   placeholder="Nombre"></input>
       <textarea  rows="3" placeholder="Descripción"></textarea>
  

</div>
</div>



  
    
    );
  }
}

export default Comentarios;
