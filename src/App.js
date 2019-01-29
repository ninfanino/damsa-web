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
            <Route path="/nosotros" component={Nosotros} />
            <Route path="/servicios" component={Servicios} />
            <Route path="/esr" component={Esr} />
            <Route path="/galeria" component={Galeria} />
            <Route path="/galeria/:fiesta-anual-2018/:31" component={Galeria1b} />
            <Route path="/fiesta_fin_de_año_2018" component={Galeria1} />
            <Route path="/reforestacion_2018" component={Reforestacion_2018} />
            <Route path="/dia_del_padre_2018" component={Diadelpadre2018} />
            <Route path="/dia_del_abuelo_2018" component={Diadelabuelo2018} />
            <Route path="/dia_de_muertos_2018" component={Diademuertos2018} />
            <Route path="/paseo_anual_2018" component={Paseoanual2018} />
            <Route path="/contacto" component={Contacto} />

          </Switch>

          <Footer/>
        </div>
      </HashRouter>
    );
  }
}



export default App;
