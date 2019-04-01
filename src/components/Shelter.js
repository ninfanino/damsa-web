import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { translate } from 'react-i18next';

class Shelter extends Component {
	
	render () {
		const { t } = this.props;
		
		return (
			<div className="Shelter">
				<div className="SliderI">
					<div className="SliderI-header">
						<div className="demo carousel slide" data-ride="carousel">
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img className="imgNosotros" src="../images/bg-servicios.png" alt="Damsa Shelter" />

									<div className="carousel-caption d-md-block" >
										<h1  className="sliderh1"> {t("shelter.title")}  </h1>
										<p className="sliderP2">{t("shelter.subtitle")}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container seccion1" >
					<div className="row justify-content-center">
						<div className="col-12">
							{t("shelter.p1")}
						</div>
						<div className="col-12">
							{t("shelter.p2")}
						</div>
						<div className="col-12">
							{t("shelter.p3")}
						</div>
						<div className="col-12">
							{t("shelter.p4")}
						</div>
						<div className="col-12">
							{t("shelter.p5")}
						</div>
						<div className="col-12">
							{t("shelter.p6")}
						</div>
					</div>
				</div>

				<div className="container seccion2" >
					<div className="row justify-content-center">
						<div className="col-12 subtitle2">
							{t("shelter.subtitle2")}
						</div>
						<div className="col-12">
							<b>{t("shelter.txt1")}</b>
							{t("shelter.desc1")}
						</div>
						<div className="col-12">
							<b>{t("shelter.txt2")}</b>
							{t("shelter.desc2")}
						</div>
						<div className="col-12">
							<b>{t("shelter.txt3")}</b>
							{t("shelter.desc3")}
						</div>
						<div className="col-12">
							<b>{t("shelter.txt4")}</b>
							{t("shelter.desc4")}
						</div>
						<div className="col-12">
							<b>{t("shelter.txt5")}</b>
						</div>
						<div className="col-12">
							<b>{t("shelter.txt6")}</b>
						</div>
						<div className="col-12">
							<b>{t("shelter.txt7")}</b>
							{t("shelter.desc7")}
						</div>
						<div className="col-12">
							<b>{t("shelter.txt8")}</b>
							{t("shelter.desc8")}
						</div>
						<div className="col-12">
							<b>{t("shelter.txt9")}</b>
						</div>
					</div>
				</div>

				
			</div>
		);
	};
}

export default translate('common')(Shelter);