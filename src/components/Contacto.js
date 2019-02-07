import React, { Component } from "react";
import { translate } from 'react-i18next';

class Contacto extends Component {
	render () {
		const { t } = this.props;

		return (
			<div className="Contact">
				<div className="SliderI">
					<div className="SliderI-header">
						<div id="" className="demo carousel slide" data-ride="carousel">
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img className="imgNosotros" src="../images/bg-contacto.png" alt="Búzon Damsa" />
									<div className="carousel-caption  d-md-block" >
										<h1  className="sliderh1">{t("contacto.title")}  </h1>
										<p className="sliderP2">{t("contacto.subtitle")}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="seccion6">
					<div className="container-btns-contact">
						<h1>{t("contacto.subtitle2")}</h1>
						<p>{t("contacto.text1")}
						</p>
						<p>{t("contacto.text2")} </p>
					</div>
				</div>

				<div className="seccion1">
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="circle-number">1</div>
								{t("contacto.text3")}
							</div>
						</div>
					</div>
				</div>

				<div className="seccion2 container">
					<div className="row">
						<div className="col-md-4">
							<input type="text" name="nombre"  placeholder={t("contacto.placeholder")} className="form-control" required="" />
						</div>
						<div className="col-md-4">
							<input type="text" name="apellidos"  placeholder={t("contacto.placeholder2")} className="form-control" required=""></input>
						</div>
						<div className="col-md-4">
							<input type="text" name="email"  placeholder={t("contacto.placeholder3")} className="form-control" required="" ></input>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<input type="text" name="telefono"  placeholder={t("contacto.placeholder4")} className="form-control" required="" ></input>
						</div>
						<div className="col-md-4">
							<input type="text" name="empresa"  placeholder={t("contacto.placeholder5")} className="form-control" required=""></input>
						</div>
						<div className="col-md-4">
							<input type="text" name="puesto"  placeholder={t("contacto.placeholder6")} className="form-control" required="" ></input>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="subtitle-contact">{t("contacto.text4")}</div>
						</div>
						<div className="col-md-3">
							<input type="radio" name="radio" /><label>{t("contacto.radio1")}</label>
						</div>
						<div className="col-md-3">
							<input type="radio" name="radio" /><label>{t("contacto.radio2")}</label>
						</div>
						<div className="col-md-3">
							<input type="radio" name="radio" /><label>{t("contacto.radio3")}</label>
						</div>
						<div className="col-md-3">
							<input type="radio" name="radio" /><label>{t("contacto.radio4")}</label>
						</div>				
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="subtitle-contact">{t("contacto.text5")}</div>
						</div>
						
						<div className="col-md-3">
							<input type="radio" name="radio" /><label>{t("contacto.radio5")}</label>
						</div>
						<div className="col-md-3">
							<input type="radio" name="radio" /><label>{t("contacto.radio6")}</label>
						</div>
						<div className="col-md-3">
							<input type="radio" name="radio" /><label>{t("contacto.radio7")}</label>
						</div>
						<div className="col-md-3">
							<input type="radio" name="radio" /><label>{t("contacto.radio8")}</label>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="subtitle-contact">{t("contacto.text6")}</div>
						</div>
						
						<div className="col-md-3">
							<input type="radio" name="radio" /><label>{t("contacto.radio9")}</label>
						</div>
						<div className="col-md-3">
							<input type="radio" name="radio" /><label>{t("contacto.radio10")}</label>
						</div>
						<div className="col-md-3">
							<input type="radio" name="radio" /><label>{t("contacto.radio11")}</label>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<textarea name="mensaje" placeholder={t("contacto.placeholder7")} className="areatext form-control3 w-100" required="" ></textarea>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<button id="boton" type="submit" className="btn btn-default btn-contacto"  >{t("contacto.btn")}</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default translate('common')(Contacto);
