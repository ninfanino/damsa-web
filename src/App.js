import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import './icomoon/style.css';


//import Home from "./Home";
import Footer from "./Footer";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Nosotros from "./components/Nosotros";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/nosotros" component={Nosotros} />
          </Switch>

          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
