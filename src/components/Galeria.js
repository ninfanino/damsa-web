import React from "react";
import { NavLink } from "react-router-dom";

const Servicios = () =>  {
	return (
		<div className="Galeri">
			<div className="seccion6" >
				<div className="row">
					<div id="gale" className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
						<NavLink to="/galeria1">	
							<div id="contenedorGaleria">
								<img className="logoesr" src="../images/reforestacion1.png"  />
								<div class="filtro"></div>
								<div class="texto">
                                	<h3>Reforestación 2018</h3>
                                	<label> <i class="fa fa-plus" aria-hidden="true"></i></label>
                            	</div>
							</div>
						</NavLink>
					</div>

					<div id="gale" className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
						<div id="contenedorGaleria">
							<img className="logoesr" src="../images/diapadre1.png"  />
							<div class="filtro"></div>
							<div class="texto">
                                <h3>Día del padre 2018</h3>
                                <label> <i class="fa fa-plus" aria-hidden="true"></i></label>
                            </div>
						</div>
					</div>
					
					<div id="gale" className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
						<div id="contenedorGaleria">
							<img className="logoesr" src="../images/diaabuelo1.png"  />
							<div class="filtro"></div>
							<div class="texto">
                                <h3>Día del abuelo 2018</h3>
                                <label> <i class="fa fa-plus" aria-hidden="true"></i></label>
                            </div>
						</div>
					</div>

					<div id="gale" className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
						<div id="contenedorGaleria">
							<img className="logoesr" src="../images/5-Expo.png"  />
							<div class="filtro"></div>
							<div class="texto">
								<h3>Expo 2018</h3>
								<label> <i class="fa fa-plus" aria-hidden="true"></i></label>
							</div>
						</div>
					</div>

					<div id="gale" className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
						<div id="contenedorGaleria">
							<img className="logoesr" src="../images/4-Posada.png"  />
							<div class="filtro"></div>
							<div class="texto">
								<h3>Posada 2017</h3>
								<label> <i class="fa fa-plus" aria-hidden="true"></i></label>
							</div>
						</div>
					</div>
										
					<div id="gale" className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
						<div id="contenedorGaleria">
							<img className="logoesr" src="../images/6-Cumbre.png"  />
							<div class="filtro"></div>
							<div class="texto">
								<h3>Cumbre 2018</h3>
								<label> <i class="fa fa-plus" aria-hidden="true"></i></label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Servicios;
