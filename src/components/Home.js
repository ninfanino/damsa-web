
import Slider from "./Slider";
import React, { Component } from 'react';
import $ from 'jquery';
import { NavLink } from "react-router-dom";
import { translate } from 'react-i18next';

$(document).ready(
	function()
	{
		$("div.box").hide();
		$("#dropdown").change(
			function()
			{
				var selectedValue = $(this).val();
				if(selectedValue !== "0")
				{
					$("div.box").hide();
					$("#div" + selectedValue).show();
				}
			}
		);
	}
);

class Home extends Component {

	openMenu(index){
		$('.menu-map').removeClass('open');
		$('.navb').addClass('open');

		$('.'+index).addClass('open');
	}
	closeMenu(){
		$('.menu-map').removeClass('open');
		$('.navb').removeClass('open');
	}
	render () {
		const { t, i18n } = this.props;

	    const changeLanguage = lng => {
	      i18n.changeLanguage(lng);
	    };
	return (
		<div>
			<Slider/>
  
			<div>
		        <div className="Home-header container-fluid">
		          <div className="row homed2" >
		            <div className="col-12 text-center">
		              <h3 className="title"><b> {t("home-about.title")}</b></h3>
		              <p className="subtitle"> {t("home-about.slogan")} </p>
		              <div className="dark"></div>
		            </div>

		            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center">
		              <div className="icono-home"> <span className="icon-mision" ></span></div>
		              <div className="service-title" > {t("home-about.mision")}</div>
		              <NavLink to="/sobre-nosotros/valores"><p className="service-p"> {t("home-about.more-mision")} </p></NavLink>
		            </div>

		            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center">
		              <div className="icono-home"> <span className="icon-vision" ></span></div>
		              <div className="service-title" >{t("home-about.vision")}</div>
		              <NavLink to="/sobre-nosotros/valores"><p className="service-p"> {t("home-about.more-vision")} </p></NavLink>
		            </div>

		            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center">
		              <div className="icono-home"> <span className="icon-valores" ></span></div>
		              <div className="service-title" > {t("home-about.valores")}</div>
		              <NavLink to="/sobre-nosotros/valores"><p className="service-p">{t("home-about.more-valores")}</p></NavLink>
		            </div>

		            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center">
		              <div className="icono-home"> <span className="icon-responsabilidad" ></span></div>
		              <div className="service-title" >{t("home-about.responsabilidad")}</div>
		              <NavLink to="/sobre-nosotros/esr"><p className="service-p"> {t("home-about.more-responsabilidad")} </p></NavLink>
		            </div>

		            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center">
		              <div className="icono-home"> <span className="icon-politicas" ></span></div>
		              <div className="service-title" > {t("home-about.politicas")}</div>
		              <NavLink to="/sobre-nosotros/politicas"><p className="service-p"> {t("home-about.more-politicas")} </p></NavLink>
		            </div>

		            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center">
		              <div className="icono-home"> <span className="icon-semblanza" ></span></div>
		              <div className="service-title" > {t("home-about.semblanza")} </div>
		              <NavLink to="/sobre-nosotros/semblanza"><p className="service-p">{t("home-about.more-semblanza")}</p></NavLink>
		            </div>
		          </div>
		        </div>
		  	</div>

  			<div className="homed2 container-fluid" >
  				<div className="row">
					<div className="serviciosh1 hidden-sm-down col-md-5 col-lg-6"></div>

					<div className="serviciosh col-xs-12 col-sm-12 col-md-7 col-lg-6 text-left">
						<h3 className="title yellow" ><b>{t("home-servicios.title")}</b></h3>
	  					<p className="subtitle white" > {t("home-servicios.slogan")} </p>
	  					<div className="dark left"></div>

	  					<div className="ds carousel slide hidden-xs-down" data-ride="carousel">
					  		<ol className="carousel-indicators indicads">
					          <li data-target=".ds" data-slide-to="0" className="active"></li>
					          <li data-target=".ds" data-slide-to="1"></li>
					        </ol>

						    <div className="carousel-inner row">
						      	<div className="carousel-item active">
							      	<div className="sliserv col-xs-12 col-sm-4 col-md-4 col-lg-4">
							      		<p className="sliderP"><span className="icon-administracion-personal" ></span></p>
							        	<p className="sliderP3">{t("home-servicios.servicio1")}</p>
							      	</div>

							      	<div  className="sliserv col-xs-12 col-sm-4 col-md-4 col-lg-4">
							      		<p className="sliderP"><span className="icon-busqueda-talento" ></span></p>
							        	<p className="sliderP3">{t("home-servicios.servicio2")}</p>
							      	</div>

							      	<div  className="sliserv col-xs-12 col-sm-4 col-md-4 col-lg-4">
							      		<p className="sliderP"><span className="icon-pruebas-confianza" ></span></p>
							        	<p className="sliderP3">{t("home-servicios.servicio3")}</p>
							      	</div>
					      	  	</div>

		      					<div className="carousel-item">
		      						<div  className="sliserv col-xs-12 col-sm-4 col-md-4 col-lg-4">
		      							<p className="sliderP"><span className="icon-investigaciones" ></span></p>
		        						<p className="sliderP3">{t("home-servicios.servicio4")}</p>
		      						</div>

								    <div  className="sliserv col-xs-12 col-sm-4 col-md-4 col-lg-4">
								      	<p className="sliderP"><span className="icon-programas-capacitacion" ></span></p>
								        <p className="sliderP3">{t("home-servicios.servicio5")}</p>
								    </div>

		      						<div  className="sliserv col-xs-12 col-sm-4 col-md-4 col-lg-4">
		      							<p className="sliderP"><span className="icon-asesoria-capital" ></span></p>
		        						<p className="sliderP3">{t("home-servicios.servicio6")}</p>
		      						</div>
		      					</div>
	    					</div>
	    				</div>

	    				<div className="hidden-sm-up">
	    							<div className="col-xs-12 serviciosmovil">
							      		<p className="sliderP"><span className="icon-administracion-personal" ></span></p>
							        	<p className="sliderP3">{t("home-servicios.servicio1")}</p>
							      	</div>

							      	<div className="col-xs-12 serviciosmovil">
							      		<p className="sliderP"><span className="icon-busqueda-talento" ></span></p>
							        	<p className="sliderP3">{t("home-servicios.servicio2")}</p>
							      	</div>

							      	<div className="col-xs-12 serviciosmovil">
							      		<p className="sliderP"><span className="icon-pruebas-confianza" ></span></p>
							        	<p className="sliderP3">{t("home-servicios.servicio3")}</p>
							      	</div>

							      	<div className="col-xs-12 serviciosmovil">
		      							<p className="sliderP"><span className="icon-investigaciones" ></span></p>
		        						<p className="sliderP3">{t("home-servicios.servicio4")}</p>
		      						</div>

								    <div className="col-xs-12 serviciosmovil">
								      	<p className="sliderP"><span className="icon-programas-capacitacion" ></span></p>
								        <p className="sliderP3">{t("home-servicios.servicio5")}</p>
								    </div>

		      						<div className="col-xs-12 serviciosmovil">
		      							<p className="sliderP"><span className="icon-asesoria-capital" ></span></p>
		        						<p className="sliderP3">{t("home-servicios.servicio6")}</p>
		      						</div>
	    				</div>

	    				<NavLink to="/servicios" onClick={()=> {window.scrollTo(0, 0);}}><p className="service-link"> {t("home-servicios.more")} </p></NavLink>
	  				</div>
	  			</div>
			</div>

			<div className="porque-trabajar container-fluid" >
				<div className="valign">
					<div className="row justify-content-center text-center" >
						<div className="col-sm-12">
      						<h1  className="sliderVacanteh1">{t("home-vacantes.title1")} </h1>
        					<h2 className="sliderVacanteh2" >{t("home-vacantes.title2")} </h2>

                			<a href="https://bolsa.damsa.com.mx/" target="_blank" rel="noopener noreferrer"><div className="tuto" >  <h4 className="texto texto_vacantes" > {t("home-vacantes.btn")}</h4> </div></a>
            			</div>
            		</div>
        		</div>
      		</div>

			<div className="mejoracontinua">
				<h3 className="title"><b>{t("home-mejora.title")}</b></h3>
  				<p className="subtitle"> {t("home-mejora.subtitle")} </p>
  				<div className="dark"></div>
			</div>

			<div className="container-fluid">
			<div className="row">
			<div className="mejoracuadros1 col-xs-12 col-sm-6 col-md-3 col-lg-3">
				<div className="num-mejora">1</div>
				<div className="valign">
  					<h3 > {t("home-certificaciones.title1")}</h3>
    				<h2 >{t("home-certificaciones.subtitle1")}</h2>
    			</div>
			</div>

			<div className="mejoracuadros2 col-xs-12 col-sm-6 col-md-3 col-lg-3">
				<div className="num-mejora">2</div>
				<div className="valign">
  					<h3 > {t("home-certificaciones.title2")}</h3>
    				<h2 > {t("home-certificaciones.subtitle2")}</h2>
    			</div>
			</div>

			<div className="mejoracuadros1 second col-xs-12 col-sm-6 col-md-3 col-lg-3">
				<div className="num-mejora">3</div>
				<div className="valign">
  					<h3 > {t("home-certificaciones.title3")}</h3>
    				<h2>{t("home-certificaciones.subtitle3")}</h2>
    			</div>
			</div>

			<div className="mejoracuadros2 second col-xs-12 col-sm-6 col-md-3 col-lg-3">
				<div className="num-mejora">4</div>
				<div className="valign">
  					<h3 >{t("home-certificaciones.title4")}</h3>
    				<h2> {t("home-certificaciones.subtitle4")}</h2>
    			</div>
			</div>
			</div>
			</div>



  <div className="damsa-escucha">
		<div className="valign">
      		<div className="container" >
      			<h1  className="sliderVacanteh3">{t("home-buzon.title")} </h1>
        		<h1 className="sliderVacanteh4" >{t("home-buzon.subtitle")}</h1>

        		<div className="row justify-content-center">
            		<div className="col-sm-12" >
              			<NavLink to="/contacto" onClick={()=> {window.scrollTo(0, 0);}}><div className="tuto" >  <h4 className="texto texto_redes" > {t("home-buzon.btn")}</h4> </div></NavLink>
            		</div>
        		</div>

      		</div>
    	</div>


  </div>



 <div className="mejoracontinua">
 <div className="title">{t("home-esr.title")}</div>

   <div className="subtitle" > {t("home-esr.subtitle")} </div>
   <div className="dark">
   <div>

   </div>
   </div>



 </div>





  <div className="container-fluid demo1" >
  <div className="row">

	<div id="carouselExampleControls2" class="carousel slide" data-ride="carousel">
		<div class="carousel-inner">
		<div className="carousel-item active">
			<img className="slider" src="../images/bg-index4.png" alt="¿Que es ESR?" />
			<div className="carousel-caption  d-md-block textoEncima"  >
		<h1  className="sliderVacanteh1">
			<img className="img-slider" src="../images/damsa-esr.png" alt="Empresa socialmente responsable" />
		</h1>
					<div className="row justify-content-center">
						<div className="col-sm-12" >
							<div className="tuto" >  <h4 className="texto texto_vacantes" > {t("home-esr.btn")}</h4> </div>
						</div>
					</div>

			</div>
		</div>
		<div className="carousel-item">
			<img className="slider" src="../images/bg-index4.png" alt="Empresa socialmente responsable"/>
			<div className="carousel-caption  d-md-block textoEncima"  >
				<h1  className="sliderVacanteh1">
			<img className="img-slider" src="../images/damsa-esr.png" alt="Empresa socialmente responsable"/>
		</h1>

				<div className="row justify-content-center">
						<div className="col-sm-12" >
							<div className="tuto" >  <h4 className="texto texto_vacantes" > {t("home-esr.btn")}</h4> </div>
						</div>
				</div>

			</div>

		</div>
		</div>
		<a class="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="sr-only">Previous</span>
		</a>
		<a class="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="sr-only">Next</span>
		</a>
	</div>

    <div className="mejoracontinua">
    	<div className="title">{t("home-sucursales.title")}</div>

      <div className="subtitle" > {t("home-sucursales.subtitle")} </div>
      <div className="dark">
      <div>

      </div>
      </div>
      <br></br>
    </div>

    <div id="" className="mapa container">
		<div className="col-md-12">

					<div className="container-fluid">

								<div className="menu-map menu-map1">
										<span>CD JUÁREZ </span>
											<br></br>
												<p> Av. Paseo Triunfo de la República #2408 Int 7A Col. Partido Escobedo</p>
												<p> 65) 6639 - 1144</p>
													<button type="button" className="navb" onClick={this.closeMenu}>
														<div className="icon-close-button"></div>
													</button>
								</div>
								<div className="menu-map menu-map2">
										<span>MONTERREY </span>
											<br></br>
												<p> Av. Vasconcelos #209 ote Local 2, Col. San Agustín, San Pedro García NL.</p>
												<p> (81) 8335 - 0172 ext 73</p>
													<button type="button" className="navb" onClick={this.closeMenu}>
														<div className="icon-close-button"></div>
													</button>
								</div>
								<div className="menu-map menu-map3">
										<span>GUADALAJARA </span>
											<br></br>
												<p>Av. Terranova ·#295 Int. 300 Fracc. Terranova Guadalajara, Jalisco</p>
												<p> (33) 1202 - 1000</p>
													<button type="button" className="navb" onClick={this.closeMenu}>
														<div className="icon-close-button"></div>
													</button>
								</div>
								<div className="menu-map menu-map4">
										<span>MÉXICO </span>
											<br></br>
												<p>Av. Ejército Nacional #425 Int 7A. Col. Granada del Miguel Hidalgo</p>
												<p> (55) 5531 1831</p>
													<button type="button" className="navb" onClick={this.closeMenu}>
														<div className="icon-close-button"></div>
													</button>
								</div>
								<div className="menu-map menu-map5">
										<span>QUERÉTARO </span>
											<br></br>
												<p>Av. Universidad #50bis Local 22. Col. Centro Plaza Rivera</p>
												<p> (44) 2214 - 0613</p>
													<button type="button" className="navb" onClick={this.closeMenu}>
														<div className="icon-close-button"></div>
													</button>
								</div>

					</div>

		</div>

  		<iframe title="mapa" src="../images/mexicoHigh.svg" width="100%" height="680"></iframe>

		<span id="sucursal1" className="icon-pointer" onClick={this.openMenu.bind(this, 'menu-map1')}></span>
		<span id="sucursal2" className="icon-pointer" onClick={this.openMenu.bind(this, 'menu-map2')}></span>
		<span id="sucursal3" className="icon-pointer" onClick={this.openMenu.bind(this, 'menu-map3')}></span>
		<span id="sucursal4" className="icon-pointer" onClick={this.openMenu.bind(this, 'menu-map4')}></span>
		<span id="sucursal5" className="icon-pointer" onClick={this.openMenu.bind(this, 'menu-map5')}></span>
    </div>


	<div className="mapa2 container">
		<div className="col-md-12">
			<div className="select-location">
                <div className="styled-select slate">
                    <select id="dropdown" name="dropdown" className="select-map">
						<option value="0">Sucursales</option>
                        <optgroup label="Chihuahua">
							<option className="icon-pointer" value="area1">CD Juárez</option>
                        </optgroup>
                        <optgroup label="Ciudad de México">
                            <option value="area2">México</option>
                        </optgroup>
                        <optgroup label="Jalisco">
						<option value="area4">Minerva</option>
                            <option value="area5">8 de Julio</option>
                            <option value="area3">Terranova</option>
                            <option value="area6">Juárez</option>
                            <option value="area7">La Cima</option>
                        </optgroup>
                        <optgroup label="México">
                            <option value="area8">Cuautitlán</option>
                        </optgroup>
                        <optgroup label="Nuevo León">
                            <option value="area9">Monterrey</option>
                            <option value="area10">Apodaca</option>
                        </optgroup>
                        <optgroup label="Querétaro">
                            <option value="area11">Querétaro</option>
                        </optgroup>
                    </select>
                </div>
			</div>
		</div>

	    <div  className="col-md-12">
					<div className="container-fluid box"  id="divarea1">
							<div className="mov-map">
								<span>CD JUÁREZ </span>
									<br></br>
									<p> Av. Paseo Triunfo de la República #2408 Int 7A Col. Partido Escobedo</p>
									<p> 65) 6639 - 1144</p>
							</div>
				 </div>
     </div>
		 <div  className="col-md-12">
				 <div className="container-fluid box"  id="divarea9" >
						 <div className="mov-map">
						 <span>MONTERREY </span>
							 <br></br>
								 <p> Av. Vasconcelos #209 ote Local 2, Col. San Agustín, San Pedro García NL.</p>
								 <p> (81) 8335 - 0172 ext 73</p>
						 </div>
				</div>
		</div>
		<div  className="col-md-12">
				<div className="container-fluid box"  id="divarea10">
						<div className="mov-map">
						<span>APODACA </span>
							<br></br>
								<p>  Carlos Salinas de Gortari (#101) Centro </p>
								<p> (81)1442-0170</p>
						</div>
			 </div>
	 </div>
		<div   className="col-md-12">
				<div className="container-fluid box"  id="divarea3" >
						<div className="mov-map">
						<span>TERRANOVA </span>
							<br></br>
								<p>Av. Terranova ·#295 Int. 300 Fracc. Terranova Guadalajara, Jalisco</p>
								<p> (33) 1202 - 1000</p>
						</div>
			 </div>
	 </div>
	 <div   className="col-md-12">
			 <div className="container-fluid box"  id="divarea4" >
					 <div className="mov-map">
					 <span>MINERVA </span>
						 <br></br>
							 <p>Av. Vallarta ·#2828 Int. 4 Fracc. Vallarta Nte, Guadalajara, Jalisco</p>
							 <p> (33) 2303 8773 </p>
					 </div>
			</div>
	</div>
	<div   className="col-md-12">
			<div className="container-fluid box"  id="divarea5">
					<div className="mov-map">
					<span>8 DE JULIO </span>
						<br></br>
							<p>Av. 8 de Julio (#509) Mexicaltzingo, Guadalajara, Jalisco</p>
							<p> (33)3942-8570 </p>
					</div>
		 </div>
 </div>
 <div   className="col-md-12">
		 <div className="container-fluid box"  id="divarea6">
				 <div className="mov-map">
				 <span>JUÁREZ </span>
					 <br></br>
						 <p> Av. Juárez (#660) Centro,  Guadalajara, Jalisco</p>
						 <p> (33)3345-6052 </p>
				 </div>
		</div>
 </div>
 <div   className="col-md-12">
		<div className="container-fluid box"  id="divarea7" >
				<div className="mov-map">
				<span>LA CIMA </span>
					<br></br>
						<p> Av. Juan Gil Preciado (#1600) La Cima,   Guadalajara, Jalisco</p>
						<p> (33)3834-3912 </p>
				</div>
	 </div>
 </div>
 <div   className="col-md-12">
		<div className="container-fluid box"  id="divarea8">
				<div className="mov-map">
				<span>CAUTITLÁN </span>
					<br></br>
						<p> Las Jacarandas (#23) Arcos del Alba</p>
						<p> (55)2611-0955 </p>
				</div>
	 </div>
 </div>
	 <div className="col-md-12">
			 <div className="container-fluid box" id="divarea2">
					 <div className="mov-map">
					 <span>MÉXICO </span>
							<br></br>
								<p>Av. Ejército Nacional #425 Int 7A. Col. Granada del Miguel Hidalgo</p>
								<p> (55) 5531 1831</p>
					 </div>
			</div>
	</div>
	<div className="col-md-12">
			<div className="container-fluid box" id="divarea11" >
					<div className="mov-map">
					<span>QUERÉTARO </span>
						<br></br>
							<p>Av. Universidad (#50) Local 22. Col. Centro Plaza Rivera</p>
							<p> (44) 2214 - 0613</p>
					</div>
		 </div>
 </div>

	</div>

  <div id="contacto" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
  <br></br>
  <br></br>
  <h3 className="title yellow" ><b>{t("home-contact.title")}</b></h3>

    <p className="subtitle yellow" > {t("home-contact.subtitle")} </p>
    <div className="dark">
    <div>

    </div>
    </div>


    <form id="formul" action="/qualtra/contacto/enviar" method="POST" acceptCharset="utf-8" >
		<div className="container">
			<div className="row">
				<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
	                <div className="form-group" >
	                    <input type="text" name="nombre" placeholder={t("home-contact.name")} className="form-control" required="" />
	                </div>
				</div>
	            <div  className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
	                <div className="form-group" >
	                  	<input type="text" name="empresa" placeholder={t("home-contact.company")} className="form-control" required=""/>
	                </div>
	            </div>
	        </div>
	        <div className="row">
				<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
					<div className="form-group" >
						<input type="text" name="telefono"  placeholder={t("home-contact.phone")} className="form-control" required="" />
					</div>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
    				<div className="form-group" >
      					<input type="text" name="correo"  placeholder={t("home-contact.mail")} className="form-control" required="" />
    				</div>
				</div>
			</div>
			<div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
	                <div className="form-group" >
	                  <input type="text" name="area" placeholder={t("home-contact.area")} className="form-control" required=""/>
	                </div>
	            </div>
              	<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
	              <div className="form-group" >
	                <input type="text" name="ciudad"  placeholder={t("home-contact.city")} className="form-control" required=""/>
	              </div>
	            </div>
	        </div>
	        <div className="row">
				<div id="linearoja"  className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group">
                      <textarea id="areatext" name="mensaje" placeholder={t("home-contact.message")} className="form-control3 w-100" required="" ></textarea>
                    </div>
				</div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group" id="btncontact" >
                      <button id="boton" type="submit" className="btn btn-default"  >{t("home-contact.enviar")}</button>
                    </div>
                </div>
            </div>
        </div>
    </form>


  </div>
  </div>
  </div>












        </div>





					);



}

}
export default translate('common')(Home);
