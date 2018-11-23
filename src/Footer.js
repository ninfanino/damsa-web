import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';











class Footer extends Component {
  render() {
    return (
      <div className="Footer">


      <div className="container-fluid" id="footer_main">
      <div className="row">
      <div className="col-md-12 relative" id="menu1">
        <img className="logodam" src="../images/damsa.png"  />
        <nav id="main">
          <a className="border-none"><span className="icon-user" ></span></a>
          <a ><span>01 800 7013959</span></a>

          <a className="border-none"><span className="icon-facebook" ></span></a>
                <a className="border-none" ><span className="icon-twitter" ></span></a>
                <a className="border-none" ><span className="icon-linkedin" ></span></a>
        </nav>
      </div>

          <div className="col-md-12 relative" id="menu">

            <nav id="main">
            <span> Damsa 2018, Todos los derechos reservadors.</span>
            <span> Aviso Privcidad.</span>
            </nav>
          </div>
      </div>
      </div>
      </div>
    );
  }
}


export default Footer;
