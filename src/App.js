import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import './icomoon/style.css';
import Gallery from 'react-grid-gallery';

import './icomoon/style2.css';



//import Home from "./Home";
import Footer from "./Footer";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Nosotros from "./components/Nosotros";
import Servicios from "./components/Servicios";
import Esr from "./components/Esr";
import Galeria from "./components/Galeria";
import Galeria1 from "./components/Galeria1";
import Contacto from "./components/Contacto";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/nosotros" component={Nosotros} />
            <Route path="/servicios" component={Servicios} />
            <Route path="/esr" component={Esr} />
            <Route path="/galeria" component={Galeria} />
            <Route path="/galeria1" component={Galeria1} />
            <Route path="/contacto" component={Contacto} />

          </Switch>

          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
