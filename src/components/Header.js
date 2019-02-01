import React, { Component } from 'react';
import $ from 'jquery';
import { NavLink } from "react-router-dom";
import Mailto from 'react-protected-mailto';

import { translate, Trans } from 'react-i18next';

class Header extends Component {

	openMenu(){
		$('.menu-mobile').toggleClass('open');
		$('.navbar-toggle').toggleClass('open');
	}

	render () {
		const { t, i18n } = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };
		return (
			<header className="header">
		      	<div className="container-fluid" id="header_main">
					<div className="row">
						<div className="col-md-12 relative" id="menu1">

							<nav className="main">
								<span>
									<Mailto
      								email='atencionaclientes@damsa.com.mx'
      								headers={
        								{subject:'Contacto desde la página web',cc:'hdelatorre@damsa.com.mx'}
      								}/>
								</span>
								<span>
									<Mailto tel='01-800-7013959' />
								</span>
								<span>en</span>
								<div className="border-none"><span className="icon-facebook" ></span></div>
			          			<div className="border-none" ><span className="icon-twitter" ></span></div>
			          			<div className="border-none" ><span className="icon-linkedin" ></span></div>
							</nav>
						</div>

						<div className="col-md-12">

  								<div className="container-fluid">
					        			<button type="button" className="navbar-toggle" onClick={this.openMenu}>
        									<span className="icon-bar"></span>
        									<span className="icon-bar"></span>
        									<span className="icon-bar"></span>
      									</button>

      									<NavLink to="/" onClick={()=> {window.scrollTo(0, 0);}}><img className="logodam" src="../images/damsa.png" alt="Damsa" /></NavLink>


      									<nav id="menu-complete" className="main">
								          <NavLink to="/nosotros" onClick={()=> {window.scrollTo(0, 0);}}><span>{t("menu.nosotros")}</span></NavLink>
								          <NavLink to="/servicios" onClick={()=> {window.scrollTo(0, 0);}}><span>{t("menu.servicios")}</span></NavLink>
								          <a href="https://bolsa.damsa.com.mx/" target="_blank" rel="noopener noreferrer"><span>{t("menu.talento")}</span></a>
								          <NavLink to="/esr" onClick={()=> {window.scrollTo(0, 0);}}><span>{t("menu.esr")}</span></NavLink>
								          <NavLink to="/galeria" onClick={()=> {window.scrollTo(0, 0);}}><span>{t("menu.galeria")}</span></NavLink>
								          <a href="https://www.damsa.com.mx/club/listadoDC.aspx" target="_blank" rel="noopener noreferrer"><span>{t("menu.club")}</span></a>
								          <a href="https://damsablog.com/" target="_blank" rel="noopener noreferrer"><span>{t("menu.blog")}</span></a>
								          <NavLink to="/contacto" onClick={()=> {window.scrollTo(0, 0);}}><span>{t("menu.contacto")}</span></NavLink>
								          <span className="icon-user" data-toggle="modal" data-target="#modal" ></span>
								        </nav>

								        <div className="menu-mobile">
								          <NavLink to="/nosotros" onClick={()=> {window.scrollTo(0, 0);}}><span>{t("menu.nosotros")}</span></NavLink>
								          <NavLink to="/servicios" onClick={()=> {window.scrollTo(0, 0);}}><span>{t("menu.servicios")}</span></NavLink>
								          <a href="https://bolsa.damsa.com.mx/"><span>{t("menu.talento")}</span></a>
								          <NavLink to="/esr" onClick={()=> {window.scrollTo(0, 0);}}><span>{t("menu.esr")}</span></NavLink>
								          <NavLink to="/galeria" onClick={()=> {window.scrollTo(0, 0);}}><span>{t("menu.galeria")}</span></NavLink>
								          <a href="https://www.damsa.com.mx/club/listadoDC.aspx"><span>{t("menu.club")}</span></a>
								          <a href="https://damsablog.com/"><span>{t("menu.blog")}</span></a>
								          <NavLink to="/contacto" onClick={()=> {window.scrollTo(0, 0);}}><span>{t("menu.contacto")}</span></NavLink>
								          <span className="icon-user"  data-toggle="modal" data-target="#modal" ></span>
					        			</div>

					        			

    							</div>

					    </div>
					</div>
		    	</div>
		    </header>


		);
	}
}
export default translate('common')(Header);