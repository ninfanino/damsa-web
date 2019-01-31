import React, {Component} from "react";
import scrollToComponent from 'react-scroll-to-component';


//const Nosotros = () =>  {
export default class Nosotros extends Component {
	componentDidMount() {
		var topic = this.props.match.params.topic;
		switch(topic) {
			case 'valores':
				scrollToComponent(this.valores, { offset: -116, align: 'top', duration: 500, ease:'inCirc'});
				break;
			case 'semblanza':
				scrollToComponent(this.semblanza, { offset: -116, align: 'top', duration: 500, ease:'inCirc'});
				break;
			case 'esr':
				scrollToComponent(this.esr, { offset: -116, align: 'top', duration: 500, ease:'inCirc'});
				break;
			case 'politicas':
				scrollToComponent(this.politicas, { offset: -116, align: 'top', duration: 500, ease:'inCirc'});
				break;
		}
    	
  	}
	render () {
		
		
		return (
			<div className="Nosotros">
				<div className="SliderI">
					<div className="SliderI-header">
						<div className="demo carousel slide" data-ride="carousel">
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img className="imgNosotros" src="../images/bg-nosotros.png" alt="Nosotros" />

									<div className="carousel-caption  d-md-block" >

										<h1  className="sliderh1">CONÓCENOS  </h1>
										<p className="sliderP2">TE VAS A QUERER QUEDAR</p>
										<p className="sliderP2">CON  NOSOTROS</p>

									</div>

								</div>
							</div>
						</div>
					</div>
				</div>

				<div ref={(section) => { this.valores = section; }} className="seccion1" >
					<div className="row justify-content-center">
						<div  className="valoresh col-xs-12 col-sm-8 col-md-6 col-lg-4">
							<div className="border-none"><span className="icon-mision" ></span></div>
							<h3 > MISIÓN</h3>
							<div className="contenedor1">
								<p className="cont1" >Ofrecer soluciones integrales de tercerización de recursos humanos adaptadas a las necesidades de nuestros
								clientes, estableciendo relaciones de confianza  duraderas, trabajando siempre con los más altos estandares
								éticos y con criterios de calidad total, generando beneficios para nuestros socios comerciales, rentabilidad para los accionistas,
								mejor calidad de vida para el persinal que colabora y un impacto positivo a los demas grupos de interés </p>
							</div>
						</div>

						<div className="valoresh col-xs-12 col-sm-8 col-md-6 col-lg-4">
							<div className="border-none"><span className="icon-vision" ></span></div>
							<h3 > VISIÓN</h3>
							<div className="contenedor1">
								<p className="cont1"> Ser reconocidos por nuestros socios comerciales como los mejores por la flexibbilidad y calidad
								de nuestras soluciones en gestión de talento con base a relaciones a largo plazo con clientes estratégicos. </p>
							</div>
						</div>

						<div className="valoresh col-xs-12 col-sm-8 col-md-6 col-lg-4">
							<div className="border-none"><span className="icon-valores" ></span></div>
							<h3> VALORES</h3>
							<div className="contenedor1">
								<ul className="cont1">
									<li>Lealtad</li>
									<li>Integridad</li>
									<li>Honestidad</li>
									<li>Profecionalismo</li>
									<li>Desarrollo humano</li>
									<li>Respeto al individuo</li>
									<li>Búsqueda de la ecelencia</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div ref={(section) => { this.semblanza = section; }}  className="seccion2" >
					<div className="row">
						<div  className="sembla col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<div className="title yellow">SEMBLANZA</div>
							<p className="subtitle"> te vas a querer quedar con nosotros </p>
							<div className="dark"></div>
						</div>
					</div>

					<div className="row justify-content-center">
						<div className="sembla col-xs-12 col-sm-10 col-md-6 col-lg-6">
							<img className="semblaIcon" src="../images/semblanza1.png" alt="200,000 Empleados"/>
							<div className="cont-semblanza d-inline-block text-left">
								<h1 > 200,000</h1>
								<h3 > EMPLEADOS</h3>
								<div className="contenedor1">
									<p className="cont1"> Desde nuestro origen en 1996, hemos prodesado alrededor de 50 millones de nóminas, para cerca de
									200,000 empleados, asignando a más de 500 clientes satisfechos, que hansido atendidos por más de 300 especialistas
									distribuidos en el territorio nacional. </p>
								</div>
							</div>
						</div>

						<div className="sembla col-xs-12 col-sm-10 col-md-6 col-lg-6">
							<img className="semblaIcon" src="../images/semblanza2.png" alt="Más de 500 clientes satisfechos" />
							<div className="cont-semblanza d-inline-block text-left">
								<h1> +500</h1>
								<h3>CLIENTES SATISFECHOS</h3>
								<div className="contenedor1">
									<p className="cont1"> Somos socios comerciales de todo tipo de empresas, desde Pequeñas y Medianas Empresas hasta grandes
									consorcios globales y en muy diversos ramos, tales como extracción, tiendas de autoservicios, electrónica, almacenaje,
									manufactura, agroindustria y alimentos, entre otros.</p>
								</div>
							</div>
						</div>

						<div className="sembla2 col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<div className="contenedor2">
								<p className="cont2"> Cada proyecteo es evaluado por nuestro equipo de trabajo, conformando por expertos en diferentes
								áreas como Atención a Clientes, Compensaciones, Operaciones, Jurídico y Fiscal.</p>

								<p className="cont2"> Gracias a nuestra flexibilidad y a un enfoque interdisciplinario, cada solución en especifico para cada uno de nuestros clientes
							representa la conbinación exacta de metodologías, procesos, herramientas tecnológicas y procedimientos. </p>

							</div>
						</div>
					</div>
				</div>

				<div ref={(section) => { this.politicas = section; }}  className="seccion3" >
					<div className="row justify-content-center">
						<div  className="sembla text-left col-xs-12 col-sm-10 col-md-6 col-lg-4">
							<h1 className="title">NUESTRAS<br/>POLÍTICAS</h1>
							<div className="dark left"></div>
					
							<div className="decoration-none">  <h4 className="texto ers2 tuto" > Reporte anual de responsabilidad social</h4> </div>
						</div>
			

						<div className="sembla col-xs-12 col-sm-10 col-md-6 col-lg-4">
							<h3 > Política de Responsabilidad Social</h3>
							<div className="contenedor1">
								<p className="cont1"> Es el compromiso que busca la sustentabilidad de la empresa y delas partes interesadas, por lo tanto,
								integra la organización con las expectativas de los grupos de interés con las que se relaciona, buscando lograr la mejora
								continua en la gestión de la responsabilidad social empresarial, espor esto que reconocemos a nuestra estrategia de negocio
								y sistemas de planeación, los intereses de accionistas, clientes, colaboradores/as proveedores así como el ciudado del planeta. </p>
							</div>
						</div>

						<div className="sembla col-xs-12 col-sm-10 col-md-6 col-lg-4">
							<h3>Política de Calidad</h3>
							<div className="contenedor1">
								<p className="cont1"> DAMSA está dedicada a ofrecer soluciones integrales de tercerización de recursos humanos flexibles y adaptables a las necesidades de nuestros clientes y partes interesadas.</p>
								<p className="cont1"> Lo anterior mediante el cumplimiento de los siguientes compromisos:
								</p>
								<ul className="cont1">
									<li>Manteniendo estándares éticos.</li>
									<li>Mejorando la calidad de vida para el personal staff.</li>
									<li>Logrando la rentabilidad de nuestra operación.</li>
									<li>Comprometidos con la mejora continua de la eficacia del sistema de gestión.</li>
								</ul>
							</div>
						</div>

						<div className="sembla col-xs-12 col-sm-10 col-md-6 col-lg-4">
							<h3>Política de Salud y Seguridad</h3>
							<div className="contenedor1">
								<p className="cont1"> En DAMSA controlamos la exposición de nuestros trabajadores a peligros potenciales preparándolos para las emergencias y previniendo en todo momento lesiones y enfermedades ocupacionales en un marco de higiene industrial, capacitación y plenitud humana, minimizando el trabajo físico exigente, protegiendo a los trabajadores, máquinas y partes interesadas apoyados en una comunicación eficaz.</p>
							</div>
						</div>

						<div className="sembla col-xs-12 col-sm-10 col-md-6 col-lg-4">
							<h3>Política de Condiciones Laborales</h3>
							<div className="contenedor1">
								<p className="cont1"> En DAMSA estamos comprometidos con la libre elección del empleo respetando las leyes que corresponden al empleo de personas jóvenes, los horarios de trabajo así como los sueldos y beneficios, siempre procurando el mejor tratamiento humano, el respeto a cada trabajador sin ningún tipo de discriminación y respetando la libertad de asociación.</p>
							</div>
						</div>

						<div className="sembla col-xs-12 col-sm-10 col-md-6 col-lg-4">
							<h3>Política de Medio Ambiente</h3>
							<div className="contenedor1">
								<p className="cont1">En DAMSA estamos comprometidos con el medio ambiente, impulsamos una cultura de uso racional y máximo aprovechamiento de los recursos naturales, cumpliendo siempre las leyes que nos aplican y minimizando impactos negativos contra la comunidad y/o el entorno en el que operamos. Mediante la prevención de la contaminación, el manejo correcto de sustancias peligrosas, controlando los desechos tanto líquidos como sólidos así como las emisiones de contaminación al aire.</p>
							</div>
						</div>

						<div className="sembla col-xs-12 col-sm-10 col-md-6 col-lg-4">
							<h3>Política de Ética</h3>
							<div className="contenedor1">
								<p className="cont1">DAMSA institucionalmente cumple todas las leyes y normatividades que le aplican por su giro empresarial, mantiene canales de comunicación para denuncias, evitando represalias, y además promueve y vigila permanentemente una conducta ética y anticorrupción entre sus colaboradores y partes interesadas, en todos los aspectos, evitando ventajas inapropiadas, respetando la propiedad intelectual, la privacidad y veracidad de la información como parte de su actual cotidiano.</p>
							</div>
						</div>

						<div className="sembla col-xs-12 col-sm-10 col-md-6 col-lg-4">
							<h3>Política de Comunicación</h3>
							<div className="contenedor1">
								<p className="cont1">En DAMSA valoramos la opinión de nuestros colaboradores y partes interesadas por eso mantenemos canales de comunicación efectivos, seguros y confidenciales para emitir y recibir información que facilite el logro de metas y objetivos institucionales en todas nuestras áreas y proyectos.</p>
							</div>
						</div>

						<div className="sembla col-xs-12 col-sm-10 col-md-6 col-lg-4">
							<h3>Política de Sistema de Gestión</h3>
							<div className="contenedor1">
								<p className="cont1">En DAMSA es responsabilidad de la dirección y un compromiso institucional el logro de las metas y objetivos por medio de una capacitación constante, comunicación efectiva, cumpliendo requisitos legales y de los clientes, evaluando los riesgos y buscando siempre la mejora continua.
								</p>
			
								<p className="cont1">
								Confiamos en la contribución de los trabajadores y en una adecuada documentación del Sistema de Gestión Integral y sus riesgos para establecer nuestras actividades a todos los niveles y cuando sea necesario implementar medidas correctivas, aplicando auditorías y evaluaciones periódicas no solo internas si no también a nuestros proveedores en beneficio a todas las partes interesadas.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div ref={(section) => { this.esr = section; }}  className="seccion4" >
					<div className="container-fluid">
						<div className="row">
							<div  className="sembla col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<h1 className="title" >MEJORA CONTINUA</h1>
								<p className="subtitle"> te vas a querer quedar con nosotros </p>
								<div className="dark"></div>
							</div>
						</div>

						<div className="row justify-content-center">
							<div className="sembla col-xs-12 col-sm-6 col-md-5 col-lg-3">
								<img className="logoesr" src="../images/logoesr.png" alt="Empresa socialmente responsable" />
							</div>
							<div className="sembla col-xs-12 col-sm-10 col-md-7 col-lg-9">
								<div className="contenedor1">
									<p className="cont1"> En DAMSA tenemos una visión de negocios en la que integramos la estrategia de la empresa con las expectativas de la comunidad con la que nos relacionamos. Buscamos maximizar el impacto social y ambiental de nuestras acciones, es por esto que reconocemos en nuestras estrategias y sistemas de planeación, los intereses de nuestros clientes, colaboradores y proveedores, así como el cuidado del planeta. Este vínculo se fundamenta en nuestros valores y se plasma en nuestras políticas.</p>
									<p className="cont1"> Nuestra continua búsqueda por la excelencia nos ha llevado a cumplir con certificaciones y obtener reconocimientos que respaldan nuestro compromiso con nuestros clientes y la calidad y seguridad de sus procesos, sus objetivos y la calidad de vida del personal que administramos.
									</p>
									<p className="cont1"> Por estas acciones, DAMSA ha sido distinguida por el Centro Mexicano para la Filantropía - CEMEFI - como una empresa socialmente responsable.</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="seccion5" >
					<div className="container-fluid">
						<div className="row">
							<div className="sembla col-xs-12 col-sm-6 col-md-6 col-lg-6">
								<div className="logo-certificacion">
									<img className="logosr" src="../images/logoiso.png" alt="Certificacion ISO 9001:2015" />
								</div>
								<div className="contenedor1">
									<p className="cont1"> Estamos certificados en ISO 9001:2015, fortaleciendo así nuestros procesos para cumplir y satisfacer las necesidades de nuestros clientes.</p>
								</div>
							</div>

							<div className="sembla col-xs-12 col-sm-6 col-md-6 col-lg-6">
								<div className="logo-certificacion">
									<img className="logosr" src="../images/logoctpat.png" alt="Certificacion C-TPAT" />
								</div>
								<div className="contenedor1">
									<p className="cont1"> Estamos alineados a los estándares de C-TPAT con la finalidad de dar seguridad dentro de la cadena de valor.</p>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="sembla col-xs-12 col-sm-6 col-md-6 col-lg-6">
								<div className="logo-certificacion">
									<img className="logosr" src="../images/logocadelec.png" alt="Certificacion CADELEC" />
								</div>
								<div className="contenedor1">
									<p className="cont1"> Somos el primer proveedor de recursos humanos certificado por la Cadena Productiva de la Electrónica (por sus siglas CADELEC) como proveedor de clase mundial; nuestros procesos operativos, contables y de Responsabilidad Social son auditados por esta institución.</p>
								</div>
							</div>
							<div className="sembla col-xs-12 col-sm-6 col-md-6 col-lg-6">
								<div className="logo-certificacion">
									<img className="logosr" src="../images/logoinm.png" alt="Certificacion en Equidad de genero" />
								</div>
								<div className="contenedor1">
									<p className="cont1"> El Instituto Nacional de las Mujeres nos certificó por la implementación del Modelo de Equidad de Género. Con esto manifestamos nuestro compromiso hacia una sociedad con igualdad de oportunidades laborales, sin distinciones por edad, género, estado civil, creencias religiosas o por alguna discapacidad.</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="seccion6" >
					<div className="container">
						<div className="row">
							<div className="sembla col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<p className="cont1"> Es nuestro compromiso mantener y mejorar las prácticas que nos han llevado a estas distinciones y que nos ayudan a impulsar nuestro desarrollo, el de nuestros socios comerciales, proveedores y colaboradores.
								</p>
								<p className="cont1"> Hoy por hoy la responsabilidad social debiera ser inherente a las operaciones de todas las empresas, y ante tanta competencia, el diferenciador será que aunado a la conciencia del consumidor, el proveedor ofrezca soluciones alineadas a prácticas de sostenibilidad que le permita ofrecer un servicio de calidad, justo y con beneficios para todos los que se relacionan con ella.
								</p>
								<p className="cont1"> Seguiremos fomentando acciones que ayuden a satisfacer las necesidades del presente sin comprometer las necesidades futuras de nuestro entorno, practicando un comercio justo, promoviendo una sociedad más fuerte y un planeta más sustentable.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

//export default Nosotros;
