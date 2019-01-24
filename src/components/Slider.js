import React, { Component } from 'react';

class Slider extends Component {
  render() {
    return (
      <div className="SliderI">
        <div className="SliderI-header">
          <div className="demo carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="slider" src="../images/bg-index1.png" alt="Gente que trabaja para la gente" />
                
                <div className="carousel-caption  d-md-block" >
                  <p className="sliderP">EN DAMSA SOMOS </p>
                  <h1  className="sliderh1">GENTE   </h1>
                  <h1 className="sliderh1" >QUE TRABAJA </h1>
                  <p className="sliderP2">PARA LA GENTE</p>
                  <div className="row justify-content-center">
                    <div className="col-sm-12" >
                       <h4 className="texto texto_redes tuto" > Envianos tu CV</h4>
                    </div>
                  </div>
                </div>
                
              </div>
            
              <div className="carousel-item">
                <img className="slider" src="../images/bg-index1.png" alt="Gente que trabaja para la gente" />
                <div className="carousel-caption  d-md-block" >
                  <p className="sliderP">EN DAMSA SOMOS </p>
                  <h1  className="sliderh1">GENTE   </h1>
                  <h1 className="sliderh1" >QUE TRABAJA </h1>
                  <p className="sliderP2">PARA GENTE</p>
                  <div className="row justify-content-center">
                    <div className="col-sm-12" >
                       <h4 className="texto texto_redes tuto" > Envianos tu CV</h4> 
                    </div>
                  </div>
                </div>

              </div>
          </div>


          <a className="carousel-control-prev" href=".demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href=".demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>

        </div>
      </div>
    );
  }
}


export default Slider;
