import React,{Componente} from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class Circular extends React.Component{

  render(){
    return(
    <div style={{ width: "100px" }}>
    <CircularProgressbar
      percentage={this.props.porcentaje}
      text={this.props.valor}
      background
      backgroundPadding={6}
      styles={{
        background: {
          fill: '#3e98c7',
        },
        text: {
          fill: '#fff',
          fontSize: "30px"
        },
        path: {
          stroke: '#fff',
          strokeLinecap: 'butt',
          transition: 'stroke-dashoffset 0.5s ease 0s',
        },
        trail: { stroke: 'transparent' },
      }}
    />
    </div>
    );
  }
}

export default Circular;
