import React, { Component } from "react";
import { translate } from 'react-i18next';
import axios from 'axios';

class Contacto extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fname : '',
			flastname: '',
			femail : '',
			fphone : '',
			fcompany : '',
			fjob : '',
			
			check1 : '',
			check2 : '',
			check3 : '',

			fmessage : ''
		}
	}

	cleanState = () => {
		this.setState({
			fname : '',
			flastname: '',
			femail : '',
			fphone : '',
			fcompany : '',
			fjob : '',
			
			check1 : '',
			check2 : '',
			check3 : '',

			fmessage : ''

		})
	}

	
	sendEmail = (e) => {
		e.preventDefault();
		console.log(this.state)

		const mensaje = ' Nombre: ' + this.state.fname + ' ' + this.state.flastname + '<br/> Empresa: ' +  this.state.fcompany 
									+ ' <br/> Teléfono: ' +  this.state.fphone + ' <br/> Correo: ' + this.state.femail 
									+ ' <br/> Puesto: ' + this.state.fjob + ' <br/> Tipo de usuario: ' + this.state.check1 
									+ ' <br/> Tema: ' + this.state.check2 + ' <br/> Sucursal: ' + this.state.check3 
									+ ' <br/> Mensaje: ' + this.state.fmessage;
		
		
		axios.post('https://www.damsa.com.mx/WebSiteCore/WebApiEnvioDeCorreo/api/Correos', {
    		Id_Sistema: "SITIO_CONTACTO",
			De: "noreply@damsa.com.mx",
  			Para: "loversareinsane@gmail.com",
  			Copia: "nnino@damsa.com.mx",
  			CopiaOculta: "nnino@damsa.com.mx",
  			Asunto: "Correo enviado desde el formulario de contacto",
  			Msg: mensaje

  		})
  		.then(function (response) {
    		document.getElementById("res-contacto").innerHTML = "Su email fue enviado"
  		})
  		.catch(function (error) {
    		document.getElementById("res-contacto").innerHTML = "Ocurrio un error. Intente más tarde"
			});
			
			this.cleanState()
	}

	render () {
		const { t } = this.props;
		const { fname, fphone, femail, fmessage } = this.state
		const enabled = fname.length > 0 && fphone.length > 0 && femail.length > 0 && fmessage.length > 0;
		return (
			<div className="Contact">
				<div className="SliderI">
					<div className="SliderI-header">
						<div id="" className="demo carousel slide" data-ride="carousel">
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img className="imgNosotros" src="./images/bg-contacto.png" alt="Búzon Damsa" />
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

				<form onSubmit={this.sendEmail}>
				<div className="seccion2 container">
					<div className="row">
						<div className="col-md-4">
							<input type="text" name="nombre" value={this.state.fname} onChange={e => this.setState({ fname: e.target.value })} placeholder={t("contacto.placeholder")} className="form-control" required="" />
						</div>
						<div className="col-md-4">
							<input type="text" name="apellidos" value={this.state.flastname} onChange={e => this.setState({ flastname: e.target.value })} placeholder={t("contacto.placeholder2")} className="form-control" required=""></input>
						</div>
						<div className="col-md-4">
							<input type="text" name="email" value={this.state.femail} onChange={e => this.setState({ femail: e.target.value })} placeholder={t("contacto.placeholder3")} className="form-control" required="" ></input>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<input type="text" name="telefono" value={this.state.fphone} onChange={e => this.setState({ fphone: e.target.value })} placeholder={t("contacto.placeholder4")} className="form-control" required="" ></input>
						</div>
						<div className="col-md-4">
							<input type="text" name="empresa" value={this.state.fcompany} onChange={e => this.setState({ fcompany: e.target.value })} placeholder={t("contacto.placeholder5")} className="form-control" required=""></input>
						</div>
						<div className="col-md-4">
							<input type="text" name="puesto" value={this.state.fjob} onChange={e => this.setState({ fjob: e.target.value })}  placeholder={t("contacto.placeholder6")} className="form-control" required="" ></input>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="subtitle-contact">{t("contacto.text4")}</div>
						</div>
						<div className="col-md-3">
							<input type="radio" value={t("contacto.radio1")} checked={this.state.check1 === t("contacto.radio1")} onChange={e => this.setState({ check1 : e.target.value})} name="radio" /><label>{t("contacto.radio1")}</label>
						</div>
						<div className="col-md-3">
							<input type="radio" value={t("contacto.radio2")} checked={this.state.check1 === t("contacto.radio2")} onChange={e => this.setState({ check1 : e.target.value})} name="radio" /><label>{t("contacto.radio2")}</label>
						</div>
						<div className="col-md-3">
							<input type="radio" value={t("contacto.radio3")} checked={this.state.check1 === t("contacto.radio3")} onChange={e => this.setState({ check1 : e.target.value})} name="radio" /><label>{t("contacto.radio3")}</label>
						</div>
						<div className="col-md-3">
							<input type="radio" value={t("contacto.radio4")} checked={this.state.check1 === t("contacto.radio4")} onChange={e => this.setState({ check1 : e.target.value})} name="radio" /><label>{t("contacto.radio4")}</label>
						</div>				
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="subtitle-contact">{t("contacto.text5")}</div>
						</div>
						
						<div className="col-md-3">
							<input type="radio" value={t("contacto.radio5")} checked={this.state.check2 === t("contacto.radio5")} onChange={e => this.setState({ check2 : e.target.value})} name="radio2" /><label>{t("contacto.radio5")}</label>
						</div>
						<div className="col-md-3">
							<input type="radio" value={t("contacto.radio6")} checked={this.state.check2 === t("contacto.radio6")} onChange={e => this.setState({ check2 : e.target.value})} name="radio2" /><label>{t("contacto.radio6")}</label>
						</div>
						<div className="col-md-3">
							<input type="radio" value={t("contacto.radio7")} checked={this.state.check2 === t("contacto.radio7")} onChange={e => this.setState({ check2 : e.target.value})} name="radio2" /><label>{t("contacto.radio7")}</label>
						</div>
						<div className="col-md-3">
							<input type="radio" value={t("contacto.radio8")} checked={this.state.check2 === t("contacto.radio8")} onChange={e => this.setState({ check2 : e.target.value})} name="radio2" /><label>{t("contacto.radio8")}</label>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="subtitle-contact">{t("contacto.text6")}</div>
						</div>
						
						<div className="col-md-3">
							<input type="radio" value={t("contacto.radio9")} checked={this.state.check3 === t("contacto.radio9")} onChange={e => this.setState({ check3 : e.target.value})} name="radio3" /><label>{t("contacto.radio9")}</label>
						</div>
						<div className="col-md-3">
							<input type="radio" value={t("contacto.radio10")} checked={this.state.check3 === t("contacto.radio10")} onChange={e => this.setState({ check3 : e.target.value})} name="radio3" /><label>{t("contacto.radio10")}</label>
						</div>
						<div className="col-md-3">
							<input type="radio" value={t("contacto.radio11")} checked={this.state.check3 === t("contacto.radio11")} onChange={e => this.setState({ check3 : e.target.value})} name="radio3" /><label>{t("contacto.radio11")}</label>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<textarea name="mensaje" value={this.state.fmessage} onChange={e => this.setState({ fmessage: e.target.value })} placeholder={t("contacto.placeholder7")} className="areatext form-control3 w-100" required="" ></textarea>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<button id="boton" disabled={!enabled} type="submit" className="btn btn-default btn-contacto"  >{t("contacto.btn")}</button>
							<div id="res-contacto" className="text-left color-blue"></div>
						</div>
					</div>
				</div>
				</form>
			</div>
		);
	}
}

export default translate('common')(Contacto);
