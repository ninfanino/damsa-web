import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { translate } from 'react-i18next';

class ESR extends Component {
	createGalleries = () => {
        const { t } = this.props;

        const galerias = [
            { src:'fiesta-anual-2018', photos:'192'},
            { src:'fiesta-anual-mty-2018', photos:'29'},
            { src:'fiesta-anual-mx-2018', photos:'51'},
            { src:'dia-muertos-2018', photos:'41'},
            { src:'paseo-anual-2018', photos:'105'},
            { src:'paseo-anual-mty-2018', photos:'30'}
        ];

        //let table=[]
        let contenidoDiv=[];
        
        for(var key in galerias) {
          let children = []
          var link = "#/galerias/" + galerias[key]['src'] + "/" + galerias[key]['photos']; 
          var img =  "./images/" + galerias[key]['src'] + "/1.jpg";
          var name = "galerias." + galerias[key]['src'];
          children.push(<a href={link}><div class="contenedorGaleria"><img class="logoesr" src={img} alt={t(name)} /><div class="filtro"></div><div class="texto"><h3>{t(name)}</h3><label> <i class="fa fa-plus" aria-hidden="true"></i></label></div></div></a>);
          contenidoDiv.push(<div class="gale col-xs-12 col-sm-6 col-md-6 col-lg-4">{children}</div>)
        }
        return contenidoDiv;
      }

	render () {
		const { t } = this.props;
		
		return (
			<div className="Ers">
				<div className="SliderI">
					<div className="SliderI-header">
						<div className="demo carousel slide" data-ride="carousel">
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img className="imgNosotros" src="./images/bg-responsabilidad.png" alt="Damsa te escucha" />

									<div className="carousel-caption d-md-block" >
										<h1  className="sliderh1"> {t("esr.title")}  </h1>
										<p className="sliderP2">{t("esr.slogan")}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="seccion2" >
					<div className="row justify-content-center">
						<div  className="sembla col-xs-12 col-sm-8 col-md-5 col-lg-6">
							<img className="logoesr" src="./images/grupos_interes.png" alt={t("esr.subtitle")} />
						</div>

						<div   className="sembla col-xs-12 col-sm-10 col-md-7 col-lg-6">
							<h1 className="title text-left"><b>{t("esr.subtitle")}</b></h1>
							<p className="subtitle text-left"> {t("esr.subtitle2")} </p>
							<div className="dark left"></div>

							<p className="text-left text-esr cont2"> {t("esr.text1")}</p>
							
							<div className="row text-left">
								<div className="" >
									<div className="decoration-none">  <h4 className="texto ers2" > {t("esr.btn")}</h4> </div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="seccion3">
					<div className="row">
						<div   className="sembla col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<h1 className="culturaTitulo" ><b>{t("esr.subtitle3")}</b></h1>
							<p className="culturaP"> {t("esr.text2")}</p>

							<div className="row justify-content-center">
								<div className="col-sm-12" >
									<div className="decoration-none">  <h4 className="texto ers2 center" > {t("esr.btn2")}</h4> </div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="seccion6" >
					<div className="row">
						<div   className="sembla col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<div className="title">{t("esr.subtitle4")}</div>
							<p className="subtitle"> {t("esr.subtitle5")} </p>
							<div className="dark"></div>	
						</div>
					</div>

					<div className="row">
						{this.createGalleries()}
					</div>
					
					<div className="row">
						<div className="btngaleria col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<div className="row justify-content-center">
								<div className="col-sm-12" >
									<NavLink to="/galeria"> 
										<h4 className=" ers2 center"  > {t("esr.galerias")}</h4>
									</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>


				<div className="seccion1" >
					<div className="row">
						<div   className="sembla col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<div className="title">{t("esr.subtitle6")}</div>
							<p className="subtitle"> {t("esr.subtitle7")} </p>
							<div className="dark"></div>
						</div>
					</div>
					<div className="container-fluid">
						<div className="row">
							<div className="valoresh col-xs-12 col-sm-6 col-md-4 col-lg-4">
								<div className="borde" >
								<img className="logosapoyos" src="./images/esr-suenos.jpg" alt="Sueños y Esperanzas A.C." />

								<div className="contenedor1">
								<p className="cont1" >{t("esr.causa1")} </p>
								</div>
								<a href="http://www.suenosyesperanzas.org/" target="_blank" rel="noopener noreferrer"><p className="vermas"> {t("esr.link")}</p></a>
								</div>
							</div>

							<div className="valoresh col-xs-12 col-sm-6 col-md-4 col-lg-4">
								<div className="borde" >
								<img className="logosapoyos" src="./images/esr-pronatura.jpg" alt="ProNatura" />

								<div className="contenedor1">
								<p className="cont1"> {t("esr.causa2")} </p>
								</div>
								<a href="http://www.pronatura.org.mx/" target="_blank" rel="noopener noreferrer"><p className="vermas"> {t("esr.link")}</p></a>
								</div>
							</div>

							<div className="valoresh col-xs-12 col-sm-6 col-md-4 col-lg-4">
								<div className="borde" >
								<img className="logosapoyos" src="./images/esr-lazos.jpg" alt="Lazos" />

								<div className="contenedor1">
								<p className="cont1"> {t("esr.causa3")} </p>

								
								</div>
								<a href="https://www.lazos.org.mx/" target="_blank" rel="noopener noreferrer"><p className="vermas"> {t("esr.link")}</p></a>
								</div>
							</div>

							<div className="valoresh col-xs-12 col-sm-6 col-md-4 col-lg-4">
								<div className="borde" >
								<img className="logosapoyos" src="./images/esr-fm4.jpg" alt="FM4 Paso Libre" />

								<div className="contenedor1">
								<p className="cont1"> {t("esr.causa4")}</p>

								
								</div>
								<a href="https://fm4pasolibre.org/" target="_blank" rel="noopener noreferrer"><p className="vermas"> {t("esr.link")}</p></a>
								</div>
							</div>

							<div className="valoresh col-xs-12 col-sm-6 col-md-4 col-lg-4">
								<div className="borde" >
								<img className="logosapoyos" src="./images/esr-taiyari.jpg" alt="Taiyari" />

								<div className="contenedor1">
								<p className="cont1"> {t("esr.causa5")}</p>

								
								</div>
								<a href="https://www.taiyari.org/" target="_blank" rel="noopener noreferrer"><p className="vermas"> {t("esr.link")}</p></a>
								</div>
							</div>

							<div className="valoresh col-xs-12 col-sm-6 col-md-4 col-lg-4">
								<div className="borde" >
								<img className="logosapoyos" src="./images/esr-complices.jpg" alt="Complices A.C." />

								<div className="contenedor1">
								<p className="cont1"> {t("esr.causa6")}</p>

								
								</div>
								<a href="https://www.complicesac.org/" target="_blank" rel="noopener noreferrer"><p className="vermas"> {t("esr.link")}</p></a>
								</div>
							</div>

							<div className="valoresh -xs-12 col-sm-6 col-md-4 col-lg-4">
								<div className="borde" >
								<img className="logosapoyos" src="./images/esr-telocompro.jpg" alt="Te lo Compro" />

								<div className="contenedor1">
								<p className="cont1"> {t("esr.causa7")}</p>

								
								</div>
								<a href="http://aquitelocompro.com/" target="_blank" rel="noopener noreferrer"><p className="vermas"> {t("esr.link")}</p></a>
								</div>
							</div>

							<div className="valoresh col-xs-12 col-sm-6 col-md-4 col-lg-4">
								<div className="borde" >
								<img className="logosapoyos" src="./images/esr-extra.png" alt="Extra" />

								<div className="contenedor1">
								<p className="cont1"> {t("esr.causa8")} </p>

								
								</div>
								<a href="https://bosqueurbanoextra.org.mx/" target="_blank" rel="noopener noreferrer"><p className="vermas"> {t("esr.link")}</p></a>
								</div>
							</div>
							
							<div className="valoresh col-xs-12 col-sm-6 col-md-4 col-lg-4">
								<div className="borde" >
								<img className="logosapoyos" src="./images/esr-kamami.jpg" alt="Kamami" />

								<div className="contenedor1">
								<p className="cont1"> {t("esr.causa9")}</p>

								
								</div>
								<a href="https://www.casakamami.org/index.html" target="_blank" rel="noopener noreferrer"><p className="vermas"> {t("esr.link")}</p></a>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		);
	};
}

export default translate('common')(ESR);