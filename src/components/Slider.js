import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { NavLink } from "react-router-dom";

class Slider extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="SliderI">
      




                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="slider" src="../images/slidder.png" alt="Gente que trabaja para la gente"/>
                      <div className="carousel-caption  d-md-block" >
                        <p className="sliderP">{t("slider.somos")} </p>
                        <h1  className="sliderh1">{t("slider.gente")}   </h1>
                        <h1 className="sliderh1" >{t("slider.trabaja")} </h1>
                        <p className="sliderP2">{t("slider.para")}</p>
                        <div className="row justify-content-center">
                          <div className="col-sm-12" >
                             <a href="https://bolsa.damsa.com.mx/" target="_blank" rel="noopener noreferrer"><h4 className="texto texto_redes tuto" > {t("slider.btn")}</h4></a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <img className="slider" src="../images/slidder1.png" alt="Más de 20 años de experiencia nos respaldan"/>
                      <div className="carousel-caption  d-md-block" >
                        <p className="sliderP2">{t("slider.mas")} </p>
                        <h1  className="sliderh1">{t("slider.veinte")}   </h1>
                        <p className="sliderP2">{t("slider.experiencia")}</p>
                        <p className="sliderP">{t("slider.respaldan")}</p>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <img className="slider" src="../images/slidder2.png" alt="Trabajamos bajo los estándares más altos de calidad"/>
                      <div className="carousel-caption  d-md-block" >
                        <p className="sliderP">{t("slider.trabajamos")} </p>
                        <h1  className="sliderh1">{t("slider.estandares")}   </h1>
                        <h1 className="sliderh1" >{t("slider.altos")} </h1>
                        <p className="sliderP2">{t("slider.calidad")}</p>
                        <div className="row justify-content-center">
                          <div className="col-sm-12" >
                             <NavLink to="/nosotros" onClick={()=> {window.scrollTo(0, 0);}} ><h4 className="texto texto_redes tuto" > {t("slider.btn2")}</h4></NavLink>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <img className="slider" src="../images/slidder3.png" alt="Somos líderes en Innovación  de servicios"/>
                      <div className="carousel-caption  d-md-block" >
                        <p className="sliderP2">{t("slider.lideres")} </p>
                        <h1  className="sliderh1">{t("slider.innovacion")}   </h1>
                        <p className="sliderP2" >{t("slider.servicios")} </p>
                        
                      </div>
                    </div>

                    <div className="carousel-item">
                      <img className="slider" src="../images/slidder4.png" alt="Te escuchamos, entendemos y nos adaptamos a ti "/>
                      <div className="carousel-caption  d-md-block" >
                        <p className="sliderP">{t("slider.escuchamos")} </p>
                        <h1  className="sliderh1">{t("slider.entendemos")}   </h1>
                        <p className="sliderP2">{t("slider.adaptamos")}</p>
                        <div className="row justify-content-center">
                          <div className="col-sm-12" >
                             <NavLink to="/servicios" onClick={()=> {window.scrollTo(0, 0);}}><h4 className="texto texto_redes tuto" > {t("slider.btn3")}</h4></NavLink>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <img className="slider" src="../images/slidder5.png" alt="Tenemos socios comerciales nacionales e internacionales "/>
                      <div className="carousel-caption  d-md-block" >
                        <p className="sliderP">{t("slider.socios")} </p>
                        <h1  className="sliderh1">{t("slider.nacionales")}   </h1>
                        <p className="sliderP2">{t("slider.internacionales")}</p>
                        <div className="row justify-content-center">
                          <div className="col-sm-12" >
                             <NavLink to="/shelter" onClick={()=> {window.scrollTo(0, 0);}}><h4 className="texto texto_redes tuto" > {t("slider.btn4")}</h4></NavLink>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>



      </div>
    );
  }
}


export default translate('common')(Slider);
