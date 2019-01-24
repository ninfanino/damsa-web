import React from "react";
import { NavLink } from "react-router-dom";

const Servicios = () =>  {
    return (
        
        <div className="Galeri">
            <div className="slide hidden">
            <a className="carousel-control-prev" href=".demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href=".demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a></div>
            <div className="seccion6" >
            <br/><br/><br/>
                <div className="row">
                    <div className="gale col-xs-12 col-sm-12 col-md-12 col-lg-4">
                        <NavLink to="/reforestacion_2018">
                            <div className="contenedorGaleria">
                                <img className="logoesr" src="../images/reforestacion1.png" alt="Reforestación 2018" />
                                <div className="filtro"></div>
                                <div className="texto">
                                   <div className="line1"></div>
                                   <h3>Reforestación</h3>
                                   <h2>2018</h2>
                                   <label> <i className="fa fa-plus" aria-hidden="true"></i></label>
                                    <div className="line1"></div>
                               </div>
                            </div>
                        </NavLink>
                    </div>

                    <div className="gale col-xs-12 col-sm-12 col-md-12 col-lg-4">
                        <NavLink to="/dia_del_padre_2018">
                        <div className="contenedorGaleria">
                            <img className="logoesr" src="../images/diapadre1.png" alt="Dia del padre 2018" />
                            <div className="filtro"></div>
                            <div className="texto">
                               <h3>Día del padre 2018</h3>
                               <label> <i className="fa fa-plus" aria-hidden="true"></i></label>
                           </div>
                        </div>
                        </NavLink>
                    </div>

                    <div className="gale col-xs-12 col-sm-12 col-md-12 col-lg-4">
                    <NavLink to="/dia_del_abuelo_2018">
                        <div className="contenedorGaleria">
                            <img className="logoesr" src="../images/diaabuelo1.png" alt="Dia del abuelo 2018" />
                            <div className="filtro"></div>
                            <div className="texto">
                               <h3>Día del abuelo 2018</h3>
                               <label> <i className="fa fa-plus" aria-hidden="true"></i></label>
                           </div>
                        </div>
                            </NavLink>
                    </div>

                    <div className="gale col-xs-12 col-sm-12 col-md-12 col-lg-4">
                        <NavLink to="/paseo_anual_2018">
                        <div className="contenedorGaleria">
                            <img className="logoesr" src="../images/paseoanual2018/17.jpg" alt="Paseo Anual 2018" />
                            <div className="filtro"></div>
                            <div className="texto">
                                <h3>Paseo anual 2018</h3>
                                <label> <i className="fa fa-plus" aria-hidden="true"></i></label>
                            </div>
                        </div>
                        </NavLink>
                    </div>

                    <div className="gale col-xs-12 col-sm-12 col-md-12 col-lg-4">
                        <NavLink to="/fiesta_fin_de_año_2018">
                        <div className="contenedorGaleria">
                            <img className="logoesr" src="../images/posada2018/3.jpg" alt="Fiesta de fin de año 2018" />
                            <div className="filtro"></div>
                            <div className="texto">
                                <h3>Fiesta fin de año 2018</h3>
                                <label> <i className="fa fa-plus" aria-hidden="true"></i></label>
                            </div>
                        </div>
                            </NavLink>
                    </div>

                    <div className="gale col-xs-12 col-sm-12 col-md-12 col-lg-4">
                        <NavLink to="/dia_de_muertos_2018">
                        <div className="contenedorGaleria">
                            <img className="logoesr" src="../images/diademuertos2018/8.png" alt="Día de muertos 2018" />
                            <div className="filtro"></div>
                            <div className="texto">
                                <h3>Día de muertos</h3>
                                <label> <i className="fa fa-plus" aria-hidden="true"></i></label>
                            </div>
                        </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Servicios;