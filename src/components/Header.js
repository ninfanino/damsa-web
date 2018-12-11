import React, { Component } from 'react';
import $ from 'jquery';
import { NavLink } from "react-router-dom";



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
								<a ><span>atencionaclientes@damsa.com.mx</span></a>
								<a ><span>01 800 7013959</span></a>
								<a ><span>EN</span></a>
								<a className="border-none"><span className="icon-facebook" ></span></a>
			          			<a className="border-none" ><span className="icon-twitter" ></span></a>
			          			<a className="border-none" ><span className="icon-aedin" ></span></a>
							</nav>
						</div>

						<div className="col-md-12">

  								<div class="container-fluid">
					        			<button type="button" className="navbar-toggle" onClick={this.openMenu}>
        									<span class="icon-bar"></span>
        									<span class="icon-bar"></span>
        									<span class="icon-bar"></span>
      									</button>

      									<NavLink to="/"><img className="logodam" src="../images/damsa.png"  /></NavLink>


      									<nav id="menu-complete" className="main">
								          <NavLink to="/nosotros"><span>NOSOTROS</span></NavLink>
								          <NavLink to="/servicios"><span>SERVICIOS</span></NavLink>
								          <NavLink to="/"><span>TALENTO</span></NavLink>
								          <NavLink to="/esr"><span>ESR</span></NavLink>
								          <NavLink to="/galeria"><span>GALERIA</span></NavLink>
								          <NavLink to="/"><span>DAMSACLUB</span></NavLink>
								          <NavLink to="/"><span>BLOG</span></NavLink>
								          <NavLink to="/contacto"><span>CONTACTO</span></NavLink>
								          <NavLink to="/"><span className="icon-user" ></span></NavLink>
								        </nav>

								        <div className="menu-mobile">
								          <NavLink to="/nosotros"><span>NOSOTROS</span></NavLink>
								          <NavLink to="/servicios"><span>SERVICIOS</span></NavLink>
								          <NavLink to="/"><span>TALENTO</span></NavLink>
								          <NavLink to="/esr"><span>ESR</span></NavLink>
								          <NavLink to="/galeria"><span>GALERIA</span></NavLink>
								          <NavLink to="/"><span>DAMSACLUB</span></NavLink>
								          <NavLink to="/"><span>BLOG</span></NavLink>
								          <NavLink to="/"><span>CONTACTO</span></NavLink>
								          <NavLink to="/contacto"><span className="icon-user" ></span></NavLink>
					        			</div>

    							</div>

					    </div>
					</div>
		    	</div>
		    </header>
		);
	}
}
