import React, { Component } from 'react';

import './App.css';











class Footer extends Component {
  render() {
    return (
      <div className="Footer">


      <div className="container-fluid" id="footer_main">
      <div className="row">
      <div className="col-md-12 relative" id="menu1">
        <img className="logodam" src="../images/damsa.png" alt="Damsa" />
        <nav id="main">
          <div className="border-none"><span className="icon-call-center" ></span></div>
          <div ><span>01 800 7013959</span></div>

          <div className="border-none"><span className="icon-facebook" ></span></div>
                <div className="border-none" ><span className="icon-twitter" ></span></div>
                <div className="border-none" ><span className="icon-linkedin" ></span></div>
        </nav>
      </div>

          <div className="col-md-12 relative" id="menu">

            <nav id="main">
            <span> Damsa 2018. Todos los derechos reservados.</span>
            <span> Aviso de Privacidad.</span>
            </nav>
          </div>
      </div>
      </div>
      </div>
    );
  }
}


export default Footer;
