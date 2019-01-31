import React, { Component } from 'react';
import {Route, Switch, HashRouter } from 'react-router-dom';

import './App.css';
import './selector.js';

import './icomoon/style.css';
//import Gallery from 'react-grid-gallery';



//import Home from "./Home";
import Footer from "./Footer";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Nosotros from "./components/Nosotros";
import Servicios from "./components/Servicios";
import Esr from "./components/Esr";
import Galeria from "./components/Galeria";
import Galeria1 from "./components/Galeria1";
import Galeria1b from "./components/Galeria1b";
import Reforestacion_2018 from "./components/Reforestacion_2018";
import Diadelpadre2018 from "./components/Diadelpadre2018";
import Diadelabuelo2018 from "./components/Diadelabuelo2018";
import Diademuertos2018 from "./components/Diademuertos2018";
import Paseoanual2018 from "./components/Paseoanual2018";
import Contacto from "./components/Contacto";


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Navigation />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/nosotros/" component={Nosotros} />
            <Route path="/sobre-nosotros/:topic" component={Nosotros} />
            <Route path="/servicios" component={Servicios} />
            <Route path="/esr" component={Esr} />
            <Route path="/galeria" component={Galeria} />
            <Route path="/galerias/:name/:photos" component={Galeria1b} />
            <Route path="/fiesta_fin_de_año_2018" component={Galeria1} />
            <Route path="/reforestacion_2018" component={Reforestacion_2018} />
            <Route path="/dia_del_padre_2018" component={Diadelpadre2018} />
            <Route path="/dia_del_abuelo_2018" component={Diadelabuelo2018} />
            <Route path="/dia_de_muertos_2018" component={Diademuertos2018} />
            <Route path="/paseo_anual_2018" component={Paseoanual2018} />
            <Route path="/contacto" component={Contacto} />

          </Switch>

          <Footer/>

          <div id="modal" className="modal" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Bienvenido</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span><svg viewBox="0 0 512 512">
    <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4 L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1 c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1 c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"></path>
  </svg></span>
                  </button>
                </div>
                
                <div className="text-center">
                  <a className="btn-login" href="https://www.damsa.com.mx/NewSite/Login/Index.aspx">
                    <img className="semblaIcon" src="../images/semblanza2.png" alt="Clientes"/>
                    <span>Clientes</span>
                  </a>
                  <a className="btn-login" href="https://www.damsa.com.mx/NewSite/Login/Index.aspx" >
                    <img className="semblaIcon" src="../images/semblanza1.png" alt="Empleados"/>
                    <span>Empleados</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}



export default App;
