import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';











class SliderI extends Component {
  render() {
    return (
      <div className="SliderI">





        <header className="SliderI-header">
        <div id="demo" className="carousel slide" data-ride="carousel">


          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>


          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="slider" src="../images/bg-index1.png" />
              <div class="carousel-caption  d-md-block" >
              <p className="sliderP">EN DAMSA SOMOS </p>
              <h1  className="sliderh1">GENTE   </h1>
                <h1 className="sliderh1" >QUE TRABAJA </h1>
              <p className="sliderP2">PARA GENTE</p>


              <section class="container">
                <div class="row justify-content-center">
                    <div className="col-sm-12" >
                      <br/><br/>
                        <a  href="#" >  <h4 className="texto texto_redes" id="tuto" > Envianos tu CV</h4> </a>
                    </div>
                </div>
            </section>
              </div>
            </div>
            <div className="carousel-item">
              <img className="slider" src="../images/bg-index1.png" />
              <div class="carousel-caption  d-md-block" >
              <p className="sliderP">EN DAMSA SOMOS </p>
              <h1  className="sliderh1">GENTE   </h1>
                <h1 className="sliderh1" >QUE TRABAJA </h1>
              <p className="sliderP2">PARA GENTE</p>
              <section class="container">
                <div class="row justify-content-center">
                    <div className="col-sm-12" >
                      <br/><br/>
                        <a  href="#" >  <h4 className="texto texto_redes" id="tuto" > Envianos tu CV</h4> </a>
                    </div>
                </div>
            </section>
              </div>

            </div>
            <div className="carousel-item">
              <img className="slider" src="../images/bg-index1.png" />
              <div class="carousel-caption  d-md-block" >
              <p className="sliderP">EN DAMSA SOMOS </p>
              <h1  className="sliderh1">GENTE   </h1>
                <h1 className="sliderh1" >QUE TRABAJA </h1>
              <p className="sliderP2">PARA GENTE</p>
              <section class="container">
                <div class="row justify-content-center">
                    <div className="col-sm-12" >
                      <br/><br/>
                        <a  href="#" >  <h4 className="texto texto_redes" id="tuto" > Envianos tu CV</h4> </a>
                    </div>
                </div>
            </section>
              </div>
            </div>
          </div>


          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
          
        </header>
      </div>
    );
  }
}


export default SliderI;
