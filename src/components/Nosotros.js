import React, {Component} from "react";
import scrollToComponent from 'react-scroll-to-component';

import { translate } from 'react-i18next';
//const Nosotros = () =>  {
class Nosotros extends Component {
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
			default:
				scrollToComponent(this.nosotros, { offset: -116, align: 'top', duration: 500, ease:'inCirc'});
				break;
		}
    	
  	}
	render () {
		const { t } = this.props;

		
		return (
			<div ref={(section) => { this.nosotros = section; }} className="Nosotros">
				<div className="SliderI">
					<div className="SliderI-header">
						<div className="demo carousel slide" data-ride="carousel">
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img className="imgNosotros" src="./images/bg-nosotros.png" alt="Nosotros" />

									<div className="carousel-caption  d-md-block" >

										<h1  className="sliderh1">{t("nosotros.title")} </h1>
										<p className="sliderP2">{t("nosotros.subtitle1")}</p>
										<p className="sliderP2">{t("nosotros.subtitle2")}</p>

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
							<h3 > {t("nosotros-section1.title1")}</h3>
							<div className="contenedor1">
								<p className="cont1" >{t("nosotros-section1.text1")}</p>
							</div>
						</div>

						<div className="valoresh col-xs-12 col-sm-8 col-md-6 col-lg-4">
							<div className="border-none"><span className="icon-vision" ></span></div>
							<h3 > {t("nosotros-section1.title2")}</h3>
							<div className="contenedor1">
								<p className="cont1"> {t("nosotros-section1.text2")} </p>
							</div>
						</div>

						<div className="valoresh col-xs-12 col-sm-8 col-md-6 col-lg-4">
							<div className="border-none"><span className="icon-valores" ></span></div>
							<h3> {t("nosotros-section1.title3")} </h3>
							<div className="contenedor1">
								<ul className="cont1">
									<li>{t("nosotros-section1.list1")}</li>
									<li>{t("nosotros-section1.list2")}</li>
									<li>{t("nosotros-section1.list3")}</li>
									<li>{t("nosotros-section1.list4")}</li>
									<li>{t("nosotros-section1.list5")}</li>
									<li>{t("nosotros-section1.list6")}</li>
									<li>{t("nosotros-section1.list7")}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div ref={(section) => { this.semblanza = section; }}  className="seccion2" >
					<div className="row">
						<div  className="sembla col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<div className="title yellow">{t("nosotros-section2.title")}</div>
							<p className="subtitle"> {t("nosotros-section2.slogan")} </p>
							<div className="dark"></div>
						</div>
					</div>

					<div className="row justify-content-center">
						<div className="sembla col-xs-12 col-sm-10 col-md-6 col-lg-6">
							<img className="semblaIcon" src="./images/semblanza1.png" alt="200,000 Empleados"/>
							<div className="cont-semblanza d-inline-block text-left">
								<h1 > 200,000</h1>
								<h3 > {t("nosotros-section2.subtitle1")}</h3>
								<div className="contenedor1">
									<p className="cont1"> {t("nosotros-section2.text1")} </p>
								</div>
							</div>
						</div>

						<div className="sembla col-xs-12 col-sm-10 col-md-6 col-lg-6">
							<img className="semblaIcon" src="./images/semblanza2.png" alt={t("nosotros-section2.subtitle2")} />
							<div className="cont-semblanza d-inline-block text-left">
								<h1> +500</h1>
								<h3>{t("nosotros-section2.subtitle2")}</h3>
								<div className="contenedor1">
									<p className="cont1"> {t("nosotros-section2.text2")}</p>
								</div>
							</div>
						</div>

						<div className="sembla2 col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<div className="contenedor2">
								<p className="cont2"> {t("nosotros-section2.text3")}</p>

								<p className="cont2"> {t("nosotros-section2.text4")} </p>

							</div>
						</div>
					</div>
				</div>

				<div ref={(section) => { this.politicas = section; }}  className="seccion3" >
					<div className="row justify-content-center">
						<div  className="sembla text-left col-xs-12 col-sm-10 col-md-6 col-lg-4">
							<h1 className="title">{t("nosotros-section3.title")}</h1>
							<div className="dark left"></div>
					
							<div className="decoration-none">  <h4 className="texto ers2 tuto" > {t("nosotros-section3.btn")}</h4> </div>
						</div>
			

						<div className="sembla col-xs-12 col-sm-10 col-md-6 col-lg-4">
							<h3 > {t("nosotros-section3.politica1")}</h3>
							<div className="contenedor1">
								<p className="cont1"> {t("nosotros-section3.text1")} </p>
							</div>
						</div>

						<div className="sembla col-xs-12 col-sm-10 col-md-6 col-lg-4">
							<h3>{t("nosotros-section3.politica2")}</h3>
							<div className="contenedor1">
								<p className="cont1"> {t("nosotros-section3.text2")}</p>
								<p className="cont1"> {t("nosotros-section3.text2b")}
								</p>
								<ul className="cont1">
									<li>{t("nosotros-section3.compromiso1")}</li>
									<li>{t("nosotros-section3.compromiso2")}</li>
									<li>{t("nosotros-section3.compromiso3")}</li>
									<li>{t("nosotros-section3.compromiso4")}</li>
								</ul>
							</div>
						</div>

						<div className="sembla col-xs-12 col-sm-10 col-md-6 col-lg-4">
							<h3>{t("nosotros-section3.politica3")}</h3>
							<div className="contenedor1">
								<p className="cont1"> {t("nosotros-section3.text3")}</p>
							</div>
						</div>

						<div className="sembla col-xs-12 col-sm-10 col-md-6 col-lg-4">
							<h3>{t("nosotros-section3.politica4")}</h3>
							<div className="contenedor1">
								<p className="cont1"> {t("nosotros-section3.text4")}</p>
							</div>
						</div>

						<div className="sembla col-xs-12 col-sm-10 col-md-6 col-lg-4">
							<h3>{t("nosotros-section3.politica5")}</h3>
							<div className="contenedor1">
								<p className="cont1">{t("nosotros-section3.text5")}</p>
							</div>
						</div>

						<div className="sembla col-xs-12 col-sm-10 col-md-6 col-lg-4">
							<h3>{t("nosotros-section3.politica6")}</h3>
							<div className="contenedor1">
								<p className="cont1">{t("nosotros-section3.text6")}</p>
							</div>
						</div>

						<div className="sembla col-xs-12 col-sm-10 col-md-6 col-lg-4">
							<h3>{t("nosotros-section3.politica7")}</h3>
							<div className="contenedor1">
								<p className="cont1">{t("nosotros-section3.text7")}</p>
							</div>
						</div>

						<div className="sembla col-xs-12 col-sm-10 col-md-6 col-lg-4">
							<h3>{t("nosotros-section3.politica8")}</h3>
							<div className="contenedor1">
								<p className="cont1">{t("nosotros-section3.text8")}
								</p>
			
								<p className="cont1">{t("nosotros-section3.text8b")}
								</p>
							</div>
						</div>
					</div>
				</div>

				<div ref={(section) => { this.esr = section; }}  className="seccion4" >
					<div className="container-fluid">
						<div className="row">
							<div  className="sembla col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<h1 className="title" >{t("nosotros-esr.title")}</h1>
								<p className="subtitle"> {t("nosotros-esr.subtitle")} </p>
								<div className="dark"></div>
							</div>
						</div>

						<div className="row justify-content-center">
							<div className="sembla col-xs-12 col-sm-6 col-md-5 col-lg-3">
								<img className="logoesr" src="./images/logoesr.png" alt={t("nosotros-esr.alt")} />
							</div>
							<div className="sembla col-xs-12 col-sm-10 col-md-7 col-lg-9">
								<div className="contenedor1">
									<p className="cont1"> {t("nosotros-esr.text1")}
									</p>
									<p className="cont1"> {t("nosotros-esr.text2")}</p>
									<p className="cont1"> {t("nosotros-esr.text3")}</p>
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
									<img className="logosr" src="./images/logoiso.png" alt="ISO 9001:2015" />
								</div>
								<div className="contenedor1">
									<p className="cont1"> <p className="cont1"> {t("nosotros-esr.certificacion1")}</p></p>
								</div>
							</div>

							<div className="sembla col-xs-12 col-sm-6 col-md-6 col-lg-6">
								<div className="logo-certificacion">
									<img className="logosr" src="./images/logoctpat.png" alt="C-TPAT" />
								</div>
								<div className="contenedor1">
									<p className="cont1"> {t("nosotros-esr.certificacion2")}</p>
								</div>
							</div>
						</div>

						<div className="row justify-content-md-center">
							<div className="sembla col-lg-6 col-offset-3">
								<div className="logo-certificacion">
									<img width={341} className="logosr" src="./images/logo-topcompanies.png" alt="TOP COMPANIES" />
								</div>
								<div className="contenedor1">
									<p className="cont1"> {t("nosotros-esr.certificacion3")}</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="seccion6" >
					<div className="container">
						<div className="row">
							<div className="sembla col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<p className="cont1"> {t("nosotros-esr.text4")}
								</p>
								<p className="cont1"> {t("nosotros-esr.text5")}
								</p>
								<p className="cont1"> {t("nosotros-esr.text6")} </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default translate('common')(Nosotros);
