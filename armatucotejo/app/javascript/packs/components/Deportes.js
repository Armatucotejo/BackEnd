import React, { Component } from 'react';

import voley from '../../../assets/images/voley.jpg';
import futbol from '../../../assets/images/futbol.jpg';
import futsal from '../../../assets/images/futsal.jpg';
import basket from '../../../assets/images/basket.jpg';
import marco from '../../../assets/images/marco.png';

class Deportes extends React.Component{
  render(){

    const selector = (
        <div>

          <div>
            <h1 id="titleselector" className="permanent center fivec"> ¿Que deporte deseas jugar? </h1>
          </div>

          <div className="container">
            <div className="row justify-content-center">

              <div className="col-4 divcol">
                  <div className="divselector">
                  <img className="card-img" src={futbol} alt="Futbol"/>
                  <img className="card-img flotante" src={marco} alt="marco"/>
                  <div class="card-title thirdbc"><a className="btn thirdbc comfortaa fivec bold">Futbol</a></div>
                  </div>
              </div>

              <div className="col-4 divcol">
                  <div className="divselector">
                  <img className="card-img" src={futsal} alt="Futsal"/>
                  <img className="card-img flotante" src={marco} alt="marco"/>
                  <div class="card-title thirdbc"><a className="btn thirdbc comfortaa fivec">Futsal</a></div>
                  </div>
              </div>

              <div className="w-100 separador"></div>

              <div className="col-4 divcol">
                  <div className="divselector">
                  <img className="card-img" src={basket} alt="Basket"/>
                  <img className="card-img flotante" src={marco} alt="marco"/>
                  <div class="card-title thirdbc"><a className="btn thirdbc comfortaa fivec">Basketball</a></div>
                  </div>
              </div>

              <div className="col-4 divcol">
                  <div className="divselector">
                  <img className="card-img" src={voley} alt="Voley"/>
                  <img className="card-img flotante" src={marco} alt="marco"/>
                  <div class="card-title thirdbc"><a className="btn thirdbc comfortaa fivec">Voleyball</a></div>
                  </div>
              </div>

            </div>
          </div>
        </div>
    );

    return(
      <div>
        {selector}
      </div>
		)
	}
}

export default Deportes
