import React from "react";

const Contacto = () =>  {
	return (
		<div className="Contact">
			<div className="SliderI">
				<div className="SliderI-header">
					<div id="" className="demo carousel slide" data-ride="carousel">
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img className="imgNosotros" src="../images/bg-contacto.png" alt="Búzon Damsa" />
								<div className="carousel-caption  d-md-block" >
									<h1  className="sliderh1">Buzón  </h1>
									<p className="sliderP2">Damsa</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="seccion6">
				<div className="container-btns-contact">
					<h1>queremos escucharte</h1>
					<p>Te presentamos el buzón DAMSA, un canal de comunicación para escuchar y atender todas tus dudas, sugerencias y recomendaciones para mejorar la calidad de nuestros servicios
					</p>
					<p>¡Contáctanos! </p>
				</div>
			</div>

			<div className="seccion1">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="circle-number">1</div>
							Tu información
						</div>
					</div>
				</div>
			</div>

			<div className="seccion2 container">
				<div className="row">
					<div className="col-md-4">
						<input type="text" name="nombre"  placeholder="Nombre(s)" className="form-control" required="" />
					</div>
					<div className="col-md-4">
						<input type="text" name="apellidos"  placeholder="Apellidos(s)" className="form-control" required=""></input>
					</div>
					<div className="col-md-4">
						<input type="text" name="email"  placeholder="Email" className="form-control" required="" ></input>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<input type="text" name="telefono"  placeholder="Teléfono" className="form-control" required="" ></input>
					</div>
					<div className="col-md-4">
						<input type="text" name="empresa"  placeholder="Empresa" className="form-control" required=""></input>
					</div>
					<div className="col-md-4">
						<input type="text" name="puesto"  placeholder="Puesto" className="form-control" required="" ></input>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="subtitle-contact">TIPO DE USUARIO</div>
					</div>
					<div className="col-md-3">
						<input type="radio" name="radio" /><label>Cliente</label>
					</div>
					<div className="col-md-3">
						<input type="radio" name="radio" /><label>Trabajador</label>
					</div>
					<div className="col-md-3">
						<input type="radio" name="radio" /><label>Candidato</label>
					</div>
					<div className="col-md-3">
						<input type="radio" name="radio" /><label>Proveedor</label>
					</div>				
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="subtitle-contact">tema</div>
					</div>
					
					<div className="col-md-3">
						<input type="radio" name="radio" /><label>Ventas</label>
					</div>
					<div className="col-md-3">
						<input type="radio" name="radio" /><label>Atención al cliente</label>
					</div>
					<div className="col-md-3">
						<input type="radio" name="radio" /><label>Reclutamiento y selección</label>
					</div>
					<div className="col-md-3">
						<input type="radio" name="radio" /><label>Ventana de atención</label>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="subtitle-contact">sucursal</div>
					</div>
					
					<div className="col-md-3">
						<input type="radio" name="radio" /><label>Guadalajara</label>
					</div>
					<div className="col-md-3">
						<input type="radio" name="radio" /><label>México</label>
					</div>
					<div className="col-md-3">
						<input type="radio" name="radio" /><label>Monterrey</label>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<textarea name="mensaje" placeholder="Ingresa tus comentarios" className="areatext form-control3 w-100" required="" ></textarea>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<button id="boton" type="submit" className="btn btn-default btn-contacto"  >Enviar</button>
					</div>
				</div>
			</div>
		</div>
		);
	}

	export default Contacto;
