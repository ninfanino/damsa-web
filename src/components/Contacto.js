import React from "react";
import { NavLink } from "react-router-dom";
const Contacto = () =>  {
	return (
		<div className="Contact">



		<div className="SliderI">
			<div className="SliderI-header">
				<div id="demo" className="carousel slide" data-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
									<img className="imgNosotros" src="../images/bg-contacto.png" />

										<div className="carousel-caption  d-md-block" >

												<h1  className="sliderh1">DAMSA  </h1>
												<p className="sliderP2">TE ESCUCHA</p>


										</div>

						</div>
				  </div>
			  </div>
    	</div>
		</div>





						<div className="seccion6" >

						<br></br>	<br></br>	<br></br>

						<div className="row">




										<div id="sembla"  className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
										<h1 ><b>TIPO DE QUEJA</b></h1>

											<p > te vas a querer quedar con nosotros </p>
											<div className="franjaServ1">
											<div>

											</div>
											</div>

											</div>

											<div id="btngaleria" className="col-xs-12 col-sm-12 col-md-6 col-lg-6">


														<div className="row justify-content-center">
																	<div className="col-sm-12" >
												<a  href="#" className="decoration-none">  <h4 className=" panelboton" id="tuto" > QUEJAS/ SUGERENCIAS</h4> </a>
																	</div>
														</div>
											</div>
											<div id="btngaleria" className="col-xs-12 col-sm-12 col-md-6 col-lg-6">


														<div className="row justify-content-center">
																	<div className="col-sm-12" >
																			<a  href="#" className="decoration-none">  <h4 className=" panelboton" id="tuto" >DENUNCIA DE CONDUCTAS</h4> </a>
																	</div>
														</div>
											</div>






											<div id="sembla"  className="col-xs-12 col-sm-12 col-md-12 col-lg-12">





												<form id="formul" action="/qualtra/contacto/enviar" method="POST" accept-charset="utf-8" role="form" >
																			<div id="linearoja" className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
																			<div className="form-group" >
																				<input type="text" name="nombre"  placeholder="Nombre(s)" className="form-control" required="" />
																			</div>
																		</div>
																		<div id="linearoja"  className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
																		<div className="form-group" >
																			<input type="text" name="apellidos"  placeholder="Apellidos(s)" className="form-control" required=""></input>
																		</div>
																	</div>
																		<div id="linearoja" className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
																		<div className="form-group" >
																			<input type="text" name="email"  placeholder="Email" className="form-control" required="" ></input>
																		</div>
																	</div>
																		<div id="linearoja"  className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
																			<div className="form-group" >
																				<input type="text" name="telefono"  placeholder="Teléfono" className="form-control" required="" ></input>
																			</div>
																		</div>
																		<div id="linearoja"  className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
																			<div className="form-group" >
																				<input type="text" name="empresa"  placeholder="Empresa" className="form-control" required=""></input>
																			</div>
																		</div>
																		<div id="linearoja"  className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
																			<div className="form-group" >
																				<input type="text" name="puesto"  placeholder="Puesto" className="form-control" required="" ></input>
																			</div>
																		</div>
																		<div id="sembla"  className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
																		<h1 ><b>TIPO DE USUARIO</b></h1>
																	 </div>

																		<div id="linearoja"  className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
																			<div className="form-group" >
																			<div class="btnradios">
																			<input type="radio" name="radio" id="radio2" checked=""/><label for="radio2">CANDIDATO</label>
																			</div>
																			</div>
																		</div>

																		<div id="linearoja"  className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
																			<div className="form-group" >
																			<div class="btnradios">
																			<input type="radio" name="radio" id="radio2" checked=""/><label for="radio2">TRABAJADOR TEMPORAL</label>
																			</div>
																			</div>
																		</div>

																		<div id="linearoja"  className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
																			<div className="form-group" >
																			<div class="btnradios">
																			<input type="radio" name="radio" id="radio2" checked=""/><label for="radio2">CLIENTE</label>
																			</div>
																			</div>
																		</div>

																		<div id="linearoja"  className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
																			<div className="form-group" >
																			<div class="btnradios">
																			<input type="radio" name="radio" id="radio2" checked=""/><label for="radio2">PROVEEDOR</label>
																			</div>
																			</div>
																		</div>





																		<div id="sembla"  className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
																		<h1 ><b>TEMA DE LA QUEJA/ SUGERENCIA</b></h1>
																	 </div>

																		<div id="linearoja"  className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
																			<div className="form-group" >
																			<div class="btnradios">
																			<input type="radio" name="radio" id="radio2" checked=""/><label for="radio2">RECLUTAMIENTO Y SELECCIÓN</label>
																			</div>
																			</div>
																		</div>

																		<div id="linearoja"  className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
																			<div className="form-group" >
																			<div class="btnradios">
																			<input type="radio" name="radio" id="radio2" checked=""/><label for="radio2">PAGO DE NÓMINAS O FINIQUITOS</label>
																			</div>
																			</div>
																		</div>

																		<div id="linearoja"  className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
																			<div className="form-group" >
																			<div class="btnradios">
																			<input type="radio" name="radio" id="radio2" checked=""/><label for="radio2">COTIZACIONES Y PROPUESTAS</label>
																			</div>
																			</div>
																		</div>

																		<div id="linearoja"  className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
																			<div className="form-group" >
																			<div class="btnradios">
																			<input type="radio" name="radio" id="radio2" checked=""/><label for="radio2">SERVICIO EN CORPORATIVO</label>
																			</div>
																			</div>
																		</div>








																		<div id="linearoja"  className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
																			<div className="form-group">
																				<textarea id="areatext" name="mensaje" placeholder="QUEJA O COMENTARIO" className="form-control3 w-100" required="" ></textarea>
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

























	</div>
	);
}

export default Contacto;
