import React, { Component } from 'react';
import Mailto from 'react-protected-mailto';
import './App.css';
import { translate } from 'react-i18next';


class Footer extends Component {
  render() {
      const { t } = this.props;

    return (
      <div className="Footer">


      <div className="container-fluid" id="footer_main">
      <div className="row">
      <div className="col-md-12 relative" id="menu1">
        <img className="logodam" src="./images/damsa.png" alt="Damsa" />
        <nav id="main">
          <div className="border-none"><span className="icon-call-center" ></span></div>
          <div ><span><Mailto tel='01-800-7013959' /></span></div>

            <a href="https://www.facebook.com/DAMSA.RH" target="_blank" rel="noopener noreferrer"><div className="border-none"><span className="icon-facebook" ></span></div></a>
            <a href="https://twitter.com/DAMSA_oficial" target="_blank" rel="noopener noreferrer"><div className="border-none" ><span className="icon-twitter" ></span></div></a>
            <a href="https://www.linkedin.com/company/corporativo-damsa/" target="_blank" rel="noopener noreferrer"><div className="border-none" ><span className="icon-linkedin" ></span></div></a>
        </nav>
      </div>

          <div className="col-md-12 relative" id="menu">

            <nav id="main">
            <span> {t("footer.derechos")}.</span>
            <span> {t("footer.privacidad")}.</span>
            </nav>
          </div>
      </div>
      </div>
      </div>
    );
  }
}


export default translate('common')(Footer);