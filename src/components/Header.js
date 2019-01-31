import React, { Component } from 'react';
import $ from 'jquery';
import { NavLink } from "react-router-dom";
import Mailto from 'react-protected-mailto';



export default class Header extends Component {

	openMenu(){
		$('.menu-mobile').toggleClass('open');
		$('.navbar-toggle').toggleClass('open');
	}

	render () {
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
								<span>EN</span>
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
								          <NavLink to="/nosotros" onClick={()=> {window.scrollTo(0, 0);}}><span>NOSOTROS</span></NavLink>
								          <NavLink to="/servicios" onClick={()=> {window.scrollTo(0, 0);}}><span>SERVICIOS</span></NavLink>
								          <a href="https://bolsa.damsa.com.mx/" target="_blank" rel="noopener noreferrer"><span>TALENTO</span></a>
								          <NavLink to="/esr" onClick={()=> {window.scrollTo(0, 0);}}><span>ESR</span></NavLink>
								          <NavLink to="/galeria" onClick={()=> {window.scrollTo(0, 0);}}><span>GALERIA</span></NavLink>
								          <a href="https://www.damsa.com.mx/club/listadoDC.aspx" target="_blank" rel="noopener noreferrer"><span>DAMSACLUB</span></a>
								          <a href="https://damsablog.com/" target="_blank" rel="noopener noreferrer"><span>BLOG</span></a>
								          <NavLink to="/contacto" onClick={()=> {window.scrollTo(0, 0);}}><span>CONTACTO</span></NavLink>
								          <span className="icon-user" data-toggle="modal" data-target="#modal" ></span>
								        </nav>

								        <div className="menu-mobile">
								          <NavLink to="/nosotros" onClick={()=> {window.scrollTo(0, 0);}}><span>NOSOTROS</span></NavLink>
								          <NavLink to="/servicios" onClick={()=> {window.scrollTo(0, 0);}}><span>SERVICIOS</span></NavLink>
								          <NavLink to="https://bolsa.damsa.com.mx/"><span>TALENTO</span></NavLink>
								          <NavLink to="/esr" onClick={()=> {window.scrollTo(0, 0);}}><span>ESR</span></NavLink>
								          <NavLink to="/galeria" onClick={()=> {window.scrollTo(0, 0);}}><span>GALERIA</span></NavLink>
								          <NavLink to="https://www.damsa.com.mx/club/listadoDC.aspx"><span>DAMSACLUB</span></NavLink>
								          <NavLink to="https://damsablog.com/"><span>BLOG</span></NavLink>
								          <NavLink to="/contacto" onClick={()=> {window.scrollTo(0, 0);}}><span>CONTACTO</span></NavLink>
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
