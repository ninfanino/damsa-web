import React, { Component } from "react";
import { translate } from 'react-i18next';


class Servicios extends Component {
	render () {
		const { t, i18n } = this.props;

	    const changeLanguage = lng => {
	      i18n.changeLanguage(lng);
	    };
		return (
			<div className="Servicios">
				<div className="SliderI">
					<div className="SliderI-header">
						<div className="demo carousel slide" data-ride="carousel">
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img className="imgNosotros" src="../images/bg-servicios.png" alt="Servicios y Soluciones" />
									<div className="carousel-caption  d-md-block" >
										<h1  className="sliderh1">{t("servicios.title")}  </h1>
										<p className="sliderP2">{t("servicios.subtitle")}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="seccion1" >
					<div className="row">
						<div  className="valoresh col-xs-12 col-sm-12 col-md-6 col-lg-4">
							<div className="border-none"><span className="icon-administracionpersonal" ></span></div>
							<h3 >{t("servicios.title1")}</h3>
							<div className="contenedor1">
							<p className="cont1" >{t("servicios.text1")} </p>
							</div>
						</div>

						<div className="valoresh col-xs-12 col-sm-12 col-md-6 col-lg-4">
							<div className="border-none"><span className="icon-talento" ></span></div>
							<h3 >{t("servicios.title2")}</h3>
							<div className="contenedor1">
								<p className="cont1">{t("servicios.text2")}</p>
							</div>
						</div>

						<div className="valoresh col-xs-12 col-sm-12 col-md-6 col-lg-4">
							<div className="border-none"><span className="icon-psicometricas" ></span></div>
							<h3 >{t("servicios.title3")}</h3>
							<div className="contenedor1">
								<p className="cont1"> {t("servicios.text3")} </p>
							</div>
						</div>


						<div  className="valoresh col-xs-12 col-sm-12 col-md-6 col-lg-4">
							<div className="border-none"><span className="icon-pruebasconfianza" ></span></div>
							<h3 >{t("servicios.title4")}</h3>
							<div className="contenedor1">
								<p className="cont1" >{t("servicios.text4")}</p>
								<p className="cont1" >{t("servicios.text4b")}</p>
								<p className="cont1" >{t("servicios.text4c")}</p>
							</div>
						</div>

						<div  className="valoresh col-xs-12 col-sm-12 col-md-6 col-lg-8">
							<div className="border-none"><span className="icon-capitalhumano" ></span></div>
							<h3 >{t("servicios.title5")}</h3>
							<div className="contenedor1">
								<p className="cont1" >{t("servicios.text5")}</p>
								<p className="cont1" >{t("servicios.text5b")}</p>
								<p className="cont1" >{t("servicios.text5c")}</p>
							</div>
						</div>

						<div  className="valoresh col-xs-12 col-sm-12 col-md-6 col-lg-4">
							<div className="border-none"><span className="icon-socioeconomico" ></span></div>
							<h3 >{t("servicios.title6")}</h3>
							<div className="contenedor1">
								<p className="cont1" >{t("servicios.text6")}</p>
								<p className="cont1" >{t("servicios.text6b")}</p>
								<ul className="cont1" >
									<li>{t("servicios.list1")}</li>
									<li>{t("servicios.list2")}</li>
									<li>{t("servicios.list3")}</li>
									<li>{t("servicios.list4")}</li>
									<li>{t("servicios.list5")}</li>
									<li>{t("servicios.list6")}</li>
								</ul>
							</div>
						</div>

						<div  className="valoresh col-xs-12 col-sm-12 col-md-12 col-lg-8">
							<div className="border-none"><span className="icon-capacitacion" ></span></div>
							<h3 >{t("servicios.title7")}</h3>
							<div className="contenedor1">
								<p className="cont1" >{t("servicios.text7")}</p>
								<p className="cont1" >{t("servicios.text7b")}</p>
								<p className="cont1" ><b>{t("servicios.text7c")} </b></p>
								<p className="cont1" ><b>{t("servicios.text7d")}</b> {t("servicios.text7e")} </p>
								<p className="cont1" ><b>{t("servicios.text7f")}</b> {t("servicios.text7g")}</p>
								<p className="cont1" ><b>{t("servicios.text7h")}</b> {t("servicios.text7i")} </p>
							</div>
						</div>
					</div>
				</div>

				<div className="seccion4" >
					<div className="container">
						<div className="row">
							<div className="sembla col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<div className="title yellow">{t("servicios.text8")}</div>
								<p className="subtitle"> {t("servicios.text9")}</p>
								<div className="dark"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

		);
	};
}

export default translate('common')(Servicios);
