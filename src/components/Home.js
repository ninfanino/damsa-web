

import Slider from "./Slider";
import React, { Component } from 'react';
import $ from 'jquery';
import { NavLink } from "react-router-dom";


$(document).ready
(
	function()
	{
		$("div.box").hide();
		$("#dropdown").change
		(
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
export default class Home extends Component {



	openMenu(){
		$('.menu-map').toggleClass('open');

		$('.navb').toggleClass('open');
	}
	openMenu2(){
			$('.menu-map2').toggleClass('open');

		$('.navb').toggleClass('open');
	}
	openMenu3(){
			$('.menu-map3').toggleClass('open');

		$('.navb').toggleClass('open');
	}
	openMenu4(){
			$('.menu-map4').toggleClass('open');

		$('.navb').toggleClass('open');
	}
	openMenu5(){
			$('.menu-map5').toggleClass('open');

		$('.navb').toggleClass('open');
	}
	render () {
	return (
		<div>
			<Slider/>

			<div>
		        <div className="Home-header container-fluid">
		          <div className="row homed2" >
		            <div className="col-12 text-center">
		              <h3 className="title"><b> CONÓCENOS</b></h3>
		              <p className="subtitle"> te vas a querer quedar con nosotros </p>
		              <div className="dark"></div>
		            </div>

		            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 text-center">
		              <div className="icono-home"> <span className="icon-mision" ></span></div>
		              <div className="service-title" > MISIÓN</div>
		              <p className="service-p"> Conoce nuestra Misión </p>
		            </div>

		            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 text-center">
		              <div className="icono-home"> <span className="icon-vision" ></span></div>
		              <div className="service-title" >VISIÓN</div>
		              <p className="service-p"> Conoce nuestra Visión </p>
		            </div>

		            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 text-center">
		              <div className="icono-home"> <span className="icon-valores" ></span></div>
		              <div className="service-title" > VALORES</div>
		              <p className="service-p">Conoces nuestros Valores</p>
		            </div>

		            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 text-center">
		              <div className="icono-home"> <span className="icon-responsabilidad" ></span></div>
		              <div className="service-title" >RESPONSABILIDAD SOCIAL</div>
		              <p className="service-p"> Conoce nuestro compromiso con la Resposabilidad Social </p>
		            </div>

		            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 text-center">
		              <div className="icono-home"> <span className="icon-politicas" ></span></div>
		              <div className="service-title" > POLÍTICAS INSTITUCIONALES</div>
		              <p className="service-p"> Resposabbilidad social, calidad, código de conducta de la industria electrónica </p>
		            </div>

		            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 text-center">
		              <div className="icono-home"> <span className="icon-semblanza" ></span></div>
		              <div className="service-title" > SEMBLANZA</div>
		              <p className="service-p">conoces nuestra Semblanza</p>
		            </div>
		          </div>
		        </div>
		  	</div>

  			<div className="homed2 container-fluid" >
  				<div className="row">
					<div id="serviciosh1"  className="col-xs-12 col-sm-12 col-md-12 col-lg-6"></div>

					<div id="serviciosh" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-left">
						<h3 className="title yellow" ><b>SERVICIOS</b></h3>
	  					<p className="subtitle white" > te vas a querer quedar con nosotros </p>
	  					<div className="dark left"></div>

	  					<div id="ds" className="carousel slide" data-ride="carousel">
					  		<ol className="carousel-indicators" id="indicads">
					          <li data-target="#ds" data-slide-to="0" className="active"></li>
					          <li data-target="#ds" data-slide-to="1"></li>
					        </ol>

						    <div className="carousel-inner row">
						      	<div className="carousel-item active">
							      	<div id="sliserv"  className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
							      		<p className="sliderP"><span className="icon-administracion-personal" ></span></p>
							        	<p className="sliderP3">Administración integral de personal</p>
							      	</div>

							      	<div id="sliserv"  className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
							      		<p className="sliderP"><span className="icon-busqueda-talento" ></span></p>
							        	<p className="sliderP3">Búsqueda de talento ejecutivo</p>
							      	</div>

							      	<div id="sliserv"  className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
							      		<p className="sliderP"><span className="icon-pruebas-confianza" ></span></p>
							        	<p className="sliderP3">Aplicación e implementación, prueba de confianza</p>
							      	</div>
					      	  	</div>

		      					<div className="carousel-item">
		      						<div id="sliserv"  className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
		      							<p className="sliderP"><span className="icon-investigaciones" ></span></p>
		        						<p className="sliderP3">Investigaciones socioeconómico laborales</p>
		      						</div>

								    <div id="sliserv"  className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
								      	<p className="sliderP"><span className="icon-programas-capacitacion" ></span></p>
								        <p className="sliderP3">Programas de capacitación</p>
								    </div>

		      						<div id="sliserv"  className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
		      							<p className="sliderP"><span className="icon-asesoria-capital" ></span></p>
		        						<p className="sliderP3">Asesoría en capital humano</p>
		      						</div>
		      					</div>
	    					</div>
	    				</div>
	  				</div>
	  			</div>
			</div>

			<div className="porque-trabajar container-fluid" >
				<div className="valign">
					<div className="row justify-content-center text-center" >
						<div className="col-sm-12">
      						<h1  className="sliderVacanteh1">¿POR QUE TRABAJAR </h1>
        					<h2 className="sliderVacanteh2" >CON NOSOTROS? </h2>

                			<a  href="#" className="tuto" >  <h4 className="texto texto_vacantes" > Vacantes</h4> </a>
            			</div>
            		</div>
        		</div>
      		</div>

			<div id="mejoracontinua" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<h3 className="title"><b>MEJORA CONTINUA</b></h3>
  				<p className="subtitle"> te vas a querer quedar con nosotros </p>
  				<div className="dark"></div>
			</div>

			<div className="mejoracuadros1 col-xs-12 col-sm-12 col-md-12 col-lg-3">
				<div className="num-mejora">1</div>
				<div className="valign">
  					<h3 > ISO</h3>
    				<h2 >CERTIFICACIÓN</h2>
    			</div>
			</div>

			<div className="mejoracuadros2 col-xs-12 col-sm-12 col-md-12 col-lg-3">
				<div className="num-mejora">2</div>
				<div className="valign">
  					<h3 > C-TPAT</h3>
    				<h2 > ALINEADOS A SUS ESTÁNDARES</h2>
    			</div>
			</div>

			<div className="mejoracuadros1 col-xs-12 col-sm-12 col-md-12 col-lg-3">
				<div className="num-mejora">3</div>
				<div className="valign">
  					<h3 > ESR</h3>
    				<h2>DISTINTIVO</h2>
    			</div>
			</div>

			<div className="mejoracuadros2 col-xs-12 col-sm-12 col-md-12 col-lg-3">
				<div className="num-mejora">4</div>
				<div className="valign">
  					<h3 >CADELEC</h3>
    				<h2> CERTIFICACIÓN</h2>
    			</div>
			</div>


<div id="demo" className="carousel slide" data-ride="carousel">





  <div className="carousel-inner">

    <div className="carousel-item active">
  <div className="filtroimg">
      <img className="sliderVacante" src="../images/bg-contacto.png" />

      <div className="carousel-caption  d-md-block" id="textoEncima1" >

      <h1  className="sliderVacanteh1">DAMSA </h1>
        <h1 className="sliderVacanteh1" >TE ESCUCHA </h1>




        <div className="row justify-content-center">
            <div className="col-sm-12" >
              <br/><br/>
                <a  href="#" className="tuto" >  <h4 className="texto texto_redes" > Contàctanos</h4> </a>
            </div>
        </div>

      </div>
    </div>


  </div>


</div>
 </div>

 <div id="mejoracontinua" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
 <h3 ><b>EMPRESA SOCIALMENTE RESPONSABLE</b></h3>

   <p > te vas a querer quedar con nosotros </p>
   <div className="franjaServ1">
   <div>

   </div>
   </div>



 </div>





  <div id="demo1" >
  <div id="demo2" className="carousel slide" data-ride="carousel">





    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="slider" src="../images/bg-index4.png" />
        <div className="carousel-caption  d-md-block" id="textoEncima" >

         <h1  className="sliderVacanteh1">DAMSA </h1>





          <div className="row justify-content-center">
              <div className="col-sm-12" >
                <br/><br/>
                 <a  href="#" className="tuto" >  <h4 className="texto texto_vacantes" > Conoce què es ESR</h4> </a>
              </div>
          </div>

        </div>
      </div>
      <div className="carousel-item">
        <img className="slider" src="../images/bg-index4.png" />
        <div className="carousel-caption  d-md-block" id="textoEncima" >
          <h1  className="sliderVacanteh1">DAMSA </h1>

          <div className="row justify-content-center">
              <div className="col-sm-12" >
                <br/><br/>
                   <a  href="#" className="tuto" >  <h4 className="texto texto_vacantes" > Conoce què es ESR</h4> </a>
              </div>
          </div>

        </div>

      </div>
      <div className="carousel-item">
        <img className="slider" src="../images/bg-index4.png" />
        <div className="carousel-caption  d-md-block" id="textoEncima" >
       <h1  className="sliderVacanteh1">DAMSA </h1>

          <div className="row justify-content-center">
              <div className="col-sm-12" >
                <br/><br/>
                 <a  href="#" className="tuto" >  <h4 className="texto texto_vacantes"  > Conoce què es ESR</h4> </a>
              </div>
          </div>

        </div>
      </div>
    </div>


    <a className="carousel-control-prev" href="#demo2" data-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </a>
    <a className="carousel-control-next" href="#demo2" data-slide="next">
      <span className="carousel-control-next-icon"></span>
    </a>

    <div id="mejoracontinua" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <h3 ><b>SUCURSALES</b></h3>

      <p > te vas a querer quedar con nosotros </p>
      <div className="franjaServ1">
      <div>

      </div>
      </div>
      <br></br>



    </div>

    <div id="mapa" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">


		<div className="col-md-12">

					<div class="container-fluid">

								<div className="menu-map">
										<span>CD JUÁREZ </span>
											<br></br>
												<p> Av. Paseo Triunfo de la República #2408 Int 7A Col. Partido Escobedo</p>
												<p> 65) 6639 - 1144</p>
													<button type="button" className="navb" onClick={this.openMenu}>
														<span class="icon-administracion-personal"></span>
													</button>
								</div>
								<div className="menu-map2">
										<span>MONTERREY </span>
											<br></br>
												<p> Av. Vasconcelos #209 ote Local 2, Col. San Agustín, San Pedro García NL.</p>
												<p> (81) 8335 - 0172 ext 73</p>
													<button type="button" className="navb" onClick={this.openMenu2}>
														<span class="icon-administracion-personal"></span>
													</button>
								</div>
								<div className="menu-map3">
										<span>GUADALAJARA </span>
											<br></br>
												<p>Av. Terranova ·#295 Int. 300 Fracc. Terranova Guadalajara, Jalisco</p>
												<p> (33) 1202 - 1000</p>
													<button type="button" className="navb" onClick={this.openMenu3}>
														<span class="icon-administracion-personal"></span>
													</button>
								</div>
								<div className="menu-map4">
										<span>MÉXICO </span>
											<br></br>
												<p>Av. Ejército Nacional #425 Int 7A. Col. Granada del Miguel Hidalgo</p>
												<p> (55) 5531 1831</p>
													<button type="button" className="navb" onClick={this.openMenu4}>
														<span class="icon-administracion-personal"></span>
													</button>
								</div>
								<div className="menu-map5">
										<span>QUERÉTARO </span>
											<br></br>
												<p>Av. Universidad #50bis Local 22. Col. Centro Plaza Rivera</p>
												<p> (44) 2214 - 0613</p>
													<button type="button" className="navb" onClick={this.openMenu5}>
														<span class="icon-administracion-personal"></span>
													</button>
								</div>

					</div>

			</div>



  <iframe src="../images/mexicoHigh.svg" width="100%" height="680"></iframe>

<span id="sucursal1" className="icon-busqueda-talento" onClick={this.openMenu}></span>
<span id="sucursal2" className="icon-busqueda-talento" onClick={this.openMenu2}></span>
<span id="sucursal3" className="icon-busqueda-talento" onClick={this.openMenu3}></span>
<span id="sucursal4" className="icon-busqueda-talento" onClick={this.openMenu4}></span>
<span id="sucursal5" className="icon-busqueda-talento" onClick={this.openMenu5}></span>


    </div>
  </div>

	<div id="mapa2" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">


	<div className="col-md-12">


	<div class="select-location">
                        <div class="styled-select slate">
                            <select id="dropdown" name="dropdown" class="select-map">
																				<option value="0">Sucursales</option>
                                        <optgroup label="Chihuahua">

                                              <option className="icon-busqueda-talento" value="area1">CD Juárez</option>

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
					<div class="container-fluid"  id="divarea1" class="box">
							<div className="mov-map">
								<span>CD JUÁREZ </span>
									<br></br>
									<p> Av. Paseo Triunfo de la República #2408 Int 7A Col. Partido Escobedo</p>
									<p> 65) 6639 - 1144</p>
							</div>
				 </div>
     </div>
		 <div  className="col-md-12">
				 <div class="container-fluid"  id="divarea9" class="box">
						 <div className="mov-map">
						 <span>MONTERREY </span>
							 <br></br>
								 <p> Av. Vasconcelos #209 ote Local 2, Col. San Agustín, San Pedro García NL.</p>
								 <p> (81) 8335 - 0172 ext 73</p>
						 </div>
				</div>
		</div>
		<div  className="col-md-12">
				<div class="container-fluid"  id="divarea10" class="box">
						<div className="mov-map">
						<span>APODACA </span>
							<br></br>
								<p>  Carlos Salinas de Gortari (#101) Centro </p>
								<p> (81)1442-0170</p>
						</div>
			 </div>
	 </div>
		<div   className="col-md-12">
				<div class="container-fluid"  id="divarea3" class="box">
						<div className="mov-map">
						<span>TERRANOVA </span>
							<br></br>
								<p>Av. Terranova ·#295 Int. 300 Fracc. Terranova Guadalajara, Jalisco</p>
								<p> (33) 1202 - 1000</p>
						</div>
			 </div>
	 </div>
	 <div   className="col-md-12">
			 <div class="container-fluid"  id="divarea4" class="box">
					 <div className="mov-map">
					 <span>MINERVA </span>
						 <br></br>
							 <p>Av. Vallarta ·#2828 Int. 4 Fracc. Vallarta Nte, Guadalajara, Jalisco</p>
							 <p> (33) 2303 8773 </p>
					 </div>
			</div>
	</div>
	<div   className="col-md-12">
			<div class="container-fluid"  id="divarea5" class="box">
					<div className="mov-map">
					<span>8 DE JULIO </span>
						<br></br>
							<p>Av. 8 de Julio (#509) Mexicaltzingo, Guadalajara, Jalisco</p>
							<p> (33)3942-8570 </p>
					</div>
		 </div>
 </div>
 <div   className="col-md-12">
		 <div class="container-fluid"  id="divarea6" class="box">
				 <div className="mov-map">
				 <span>JUÁREZ </span>
					 <br></br>
						 <p> Av. Juárez (#660) Centro,  Guadalajara, Jalisco</p>
						 <p> (33)3345-6052 </p>
				 </div>
		</div>
 </div>
 <div   className="col-md-12">
		<div class="container-fluid"  id="divarea7" class="box">
				<div className="mov-map">
				<span>LA CIMA </span>
					<br></br>
						<p> Av. Juan Gil Preciado (#1600) La Cima,   Guadalajara, Jalisco</p>
						<p> (33)3834-3912 </p>
				</div>
	 </div>
 </div>
 <div   className="col-md-12">
		<div class="container-fluid"  id="divarea8" class="box">
				<div className="mov-map">
				<span>CAUTITLÁN </span>
					<br></br>
						<p> Las Jacarandas (#23) Arcos del Alba</p>
						<p> (55)2611-0955 </p>
				</div>
	 </div>
 </div>
	 <div className="col-md-12">
			 <div class="container-fluid" id="divarea2" class="box">
					 <div className="mov-map">
					 <span>MÉXICO </span>
							<br></br>
								<p>Av. Ejército Nacional #425 Int 7A. Col. Granada del Miguel Hidalgo</p>
								<p> (55) 5531 1831</p>
					 </div>
			</div>
	</div>
	<div className="col-md-12">
			<div class="container-fluid" id="divarea11" class="box">
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
  <h3 ><b>CONTACTO</b></h3>

    <p > te vas a querer quedar con nosotros </p>
    <div className="franjaServ1">
    <div>

    </div>
    </div>


    <form id="formul" action="/qualtra/contacto/enviar" method="POST" accept-charset="utf-8" role="form" >
										<div id="linearoja" className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group" >
                      <input type="text" name="nombre" placeholder="Nombre" className="form-control" required="" />
                    </div>
									</div>
                  <div id="linearoja"  className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group" >
                    <input type="text" name="empresa" placeholder="Empresa" className="form-control" required=""/>
                  </div>
                </div>
									<div id="linearoja" className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
									<div className="form-group" >
										<input type="text" name="telefono"  placeholder="Teléfono" className="form-control" required="" />
									</div>
								</div>
									<div id="linearoja"  className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group" >
                      <input type="text" name="correo"  placeholder="Email" className="form-control" required="" />
                    </div>
									</div>

                <div id="linearoja"  className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="form-group" >
                  <input type="text" name="area" placeholder="Area" className="form-control" required=""/>
                </div>
              </div>
              <div id="linearoja"  className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="form-group" >
                <input type="text" name="ciudad"  placeholder="Ciudad" className="form-control" required=""/>
              </div>
            </div>
									<div id="linearoja"  className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group">
                      <textarea id="areatext" name="mensaje" placeholder="Mensaje" className="form-control3 w-100" required="" ></textarea>
                    </div>
									</div>

                  <div id="linearoja"  className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group" id="btncontact" >

                      <button id="boton" type="submit" className="btn btn-default" onclick="" >Enviar</button>
                    </div>
                    </div>
                  </form>


  </div>
  </div>












        </div>





					);



}

}
