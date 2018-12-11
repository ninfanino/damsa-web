import React, { Component } from 'react';
import $ from 'jquery';

import {Link} from 'react-router-dom' ;



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
			          			<a className="border-none" ><span className="icon-linkedin" ></span></a>
							</nav>
						</div>

						<div className="col-md-12">

  								<div class="container-fluid">
					        			<button type="button" className="navbar-toggle" onClick={this.openMenu}>
        									<span class="icon-bar"></span>
        									<span class="icon-bar"></span>
        									<span class="icon-bar"></span>
      									</button>

      									<img className="logodam" src="../images/damsa.png"  />

      									<nav id="menu-complete" className="main">

								          <a href="nosotros.html" ><span>NOSOTROS</span></a>
								          <a ><span>SERVICIOS</span></a>
								          <a ><span>TALENTO</span></a>
								          <a ><span>ESR</span></a>
								          <a ><span>GALERIA</span></a>
								          <a ><span>DAMSACLUB</span></a>
								          <a ><span>BLOG</span></a>
								          <a ><span>CONTACTO</span></a>
								          <a ><span className="icon-user" ></span></a>
								        </nav>

								        <div className="menu-mobile">
								          <a ><span>NOSOTROS</span></a>
								          <a ><span>SERVICIOS</span></a>
								          <a ><span>TALENTO</span></a>
								          <a ><span>ESR</span></a>
								          <a ><span>GALERIA</span></a>
								          <a ><span>DAMSACLUB</span></a>
								          <a ><span>BLOG</span></a>
								          <a ><span>CONTACTO</span></a>
								          <a ><span className="icon-user" ></span></a>
					        			</div>

    							</div>

					    </div>
					</div>
		    	</div>
		    </header>
		);
	}
}
