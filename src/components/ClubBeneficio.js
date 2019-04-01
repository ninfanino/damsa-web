import React, { Component } from "react";
import { translate } from 'react-i18next';


class ClubBeneficio extends Component {
	createGalleries = () => {
        const { t } = this.props;
        var beneficio = this.props.match.params.beneficio;

        const galerias = [
            { 
            	'airepaz': {
            		name:'AirePaz',
	            	logo:'Logo.png',
	            	img:'b01.png',
	            	fb:'https://www.facebook.com/airepazchocolateria/',
	            	city:'GDL',
	            	benefits: 1,
					address: [
						['López Cotilla', 'López Cotilla #2008, Arcos de Vallarta, 44160 Guadalajara, Jal. (33)-3825-5007'],
						['López Mateos', 'Av. Adolfo López Mateos Sur #6900, La Rioja, Los Gavilanes, 45640 Zapopan, Jal (33)-31655-0541.'],
						['Santa Margarita', 'Av. Santa Margarita #3600 C-17, Residencial Poniente, 45136 1, Zapopan, Jal. (33)-3805-3203.']
					]
            	}, 
            	'pandataller': {
            		name:'Panda',
	            	logo:'Logo.png',
	            	img:'Panda.jpg',
	            	fb:'https://www.facebook.com/PandaPremiumGarage/',
	            	city:'GDL',
	            	benefits: 2,
					address: [
						['Calzada de los Paraísos', 'Calzada de los Paraísos #161, Granja 45010 Zapopan']
					]
            	}, 
            	'chimulco': {
            		name:'Chimulco',
	            	logo:'logo.png',
	            	img:'b1.png',
	            	fb:'https://www.facebook.com/Chimulco/',
	            	city:'GDL',
	            	benefits: 2,
					address: [
						['Villa Corona', 'Av. Vicente Ruiz Sahagún no. 75, Centro, Villa Corona, Jal. Tel:3616 9393 • 36169697']
					]
            	},
            	'Petite_Pia': {
            		name:'Petite Pía',
	            	logo:'Logo.jpg',
	            	img:'a02.png',
	            	fb:'https://www.facebook.com/PetitePiaDayCare/',
	            	city:'GDL',
	            	benefits: 2,
					address: [
						['Providencia', 'Calle Ley #2731, Providencia, Guadalajara, Jal. Tel: 01-33-23-05-72-50. Correo: informes@petite-pia.com']
					]
            	},
            	'Canon_de_la_flores': {
            		name:'Cañon de las flores',
	            	logo:'Logo_Canon_de_las_flores.png',
	            	img:'canon2019.jpg',
	            	fb:'https://www.facebook.com/canondelasflores/',
	            	city:'GDL',
	            	benefits: 1,
					address: [
						['La Primavera', 'Avenida Cañón de las Flores nº 100, La Primavera, 45220 Zapopan, Jal. Tel: (33) 3151 0160']
					]
            	},
            	'european': {
            		name:'European Life Style',
	            	logo:'logo.png',
	            	img:'European_b01.jpg',
	            	fb:'https://www.facebook.com/Europeanls/',
	            	city:'GDL',
	            	benefits: 1,
					address: [
						['Jardines de Guadalupe', 'Av Guadalupe 4885, Jardines de Guadalupe, 45030 Guadalajara, Jal. Teléfono: 01 33 1380 0909']
					]
            	},
            	'sport_world': {
            		name:'Sports World',
	            	logo:'Logo.png',
	            	img:'catalogo-sport_world-b01.jpg',
	            	fb:'https://www.facebook.com/sportsworldclubes',
	            	city:'Nacional',
	            	benefits: 1,
					address: [
						['Nacional', 'Ma. Patricia Ramos Camacho 54817777 ext.111 Cel 5570067520 maria.ramos@sportsworld.com.mx ']
					]
            	},
            	'chopo': {
            		name:'Chopo',
	            	logo:'1-Frente.png',
	            	img:'chopo-b01.png',
	            	fb:'https://www.facebook.com/chopo.com.mx/',
	            	city:'Nacional',
	            	benefits: 3,
					address: [
						['Guadalajara', 'Av. Americas 620 col Ladrón de Guevara Télefono: 36300202 ext: 65023']
					]
            	},
            	'granja_las_americas': {
            		name:'Granja las Américas',
	            	logo:'logo-granja_las_americas.png',
	            	img:'catalogo-granja_las_americas-b01.jpg',
	            	fb:'https://www.facebook.com/GranjaMex/',
	            	city:'CDMX',
	            	benefits: 3,
					address: [
						['Lomas de Sotelo', 'Blvd. Pípila s/n Acceso nº 3, Lomas de Sotelo, Hipódromo de las Américas, 11200 Miguel Hidalgo, Indispensable realizar reservación al: tel.: 2629-5600 / 5201-7800']
					]
            	},
            	'arriva': {
            		name:'Arriva Hoteles',
	            	logo:'logo-arriva.png',
	            	img:'catalogo-arriva-b01.jpg',
	            	fb:'https://www.facebook.com/grupogoh',
	            	city:'Nacional',
	            	benefits: 1,
					address: [
						['Guadalajara', 'Av. Vallarta #2526 Col. Arcos de Vallarta Guadalajara, Jalisco 3942-4030']
					]
            	},
            	'mambo_cafe': {
            		name:'Mambo Café',
	            	logo:'logo-mambo.png',
	            	img:'catalogo-mambo-b01.jpg',
	            	fb:'https://www.facebook.com/Mambocafe.elnuevoritmo/',
	            	city:'Nacional',
	            	benefits: 2,
					address: [
						['Insurgentes Sur', 'Ciudad de México (55) 5523 9521'],
						['Gustavo Baz', 'Ciudad de México (55) 5361 4624'],
						['Salón Mambocafé', 'Ciudad de México (55)2124 4566'],
						['Toluca', 'Edo. México (72) 2235 0035'],
						['Guadalajara', 'Jalisco (33) 3630 4900'],
						['Cancún', 'Quintana Roo (998) 884 4536'],
						['Mérida', 'Yucatán (999) 987 8787']
					]
            	},
            	'bauhaus': {
            		name:'Bauhaus / Papelerías Oportunidades',
	            	logo:'logo-bauhaus.png',
	            	img:'catalogo-bauhaus-b01.jpg',
	            	fb:'https://www.facebook.com/Mambocafe.elnuevoritmo/',
	            	city:'Nacional',
	            	benefits: 2,
					address: [
						['Matriz', 'Enrique González Martínez #26 y #28 Horario de L-S de 9:00am a 8:00pm, Dom. De 10:00am – 5:00pm Col. Centro, Guadalajara, Jal. (33)3613 0013 (33)3614 3614'],
						['Patria', 'Av. Patria #600 Esq. Naciones Unidas Plaza Amistad, Locales 8,9 y 11, Horario de L-S de 9:00am a 8:00pm. Col.Jardines Universidad, Zapopan, Jal.\n(33)3165 0437'],
						['Aviación', 'Av. Aviación #4455 Local 106, Plaza Dúo. Horario de L-S de 9:00am a 8:00pm. Col. San Juan de Ocotan, Zapopan, Jal. (33) 1561 9167']
					]
            	},
            	'masvision': {
            		name:'Más Visión',
	            	logo:'logo-masvision.png',
	            	img:'catalogo-masvision-b01.jpg',
	            	fb:'https://www.facebook.com/OpticasMasVisionMexico/?fref=ts',
	            	city:'Nacional',
	            	benefits: 1,
					address: [
						['Torre WTC', 'Montecito 38, Piso 45, Torre WTC Cd. de México, Col. Nápoles 9000 8305 / 9000 8325']
					]
            	},
            	'Take_a_wok': {
            		name:'Take a Wok',
	            	logo:'logo-takeawok.png',
	            	img:'catalogo-taw-b01.jpg',
	            	fb:'https://www.facebook.com/takeawokmx/',
	            	city:'CDMX',
	            	benefits: 1,
					address: [
						['Centro Histórico', 'Independencia #56 Local A Colonia Centro Delegación Cuauhtémoc. 50841621 / 7595 4805'],
						['Zona Rosa', 'Calle Dinamarca #26 Colonia Juárez Delegación Cuauhtémoc. 5546.6384'],
						['Del Valle', 'Avenida Insurgentes Sur #636 Colonia Del Valle Norte Delegación Benito Juárez. 5523.3400'],
						['Coapa', 'Avenida Cafetales #1786 Colonia Hda. de Coyoacán Delegación Coyoacán 5594.7170'],
						['Plaza Metrópoli', 'Avenida Patriotismo #229 Colonia San Pedro de los Pinos Delegación Benito Juárez 5271.8608'],
						['Hipódromo Condesa', 'Avenida Insurgentes Sur #515 Colonia Hipódromo Condesa Delegación Cuauhtémoc. 2614.2856'],
						['Av. Coyoacán', 'Avenida Coyoacán #707 Colonia Del Valle Centro Delegación Benito Juárez 1107.7840']
					]
            	},
            	'bellini': {
            		name:'Bellini',
	            	logo:'logo-bellini.png',
	            	img:'catalogo-bellini-b01.jpg',
	            	fb:'https://www.facebook.com/BelliniRestauranteGiratorio/',
	            	city:'CDMX',
	            	benefits: 1,
					address: [
						['Torre WTC', 'Montecito 38, Piso 45, Torre WTC Cd. de México, Col. Nápoles 9000 8305 / 9000 8325']
					]
            	},
            	'juguetega': {
            		name:'Juguetega',
	            	logo:'logo-juguetega.png',
	            	img:'catalogo-Juguetega-b01.jpg',
	            	fb:'https://www.facebook.com/JUGUETEGA/',
	            	city:'GDL',
	            	benefits: 1,
					address: [
						['Matriz', 'Álvaro Obregón #323 Col. San Juan de Dios Zapopan, Jalisco (33)3617 1953 (33)3654 0066'],
						['Terraza Belenes', 'Av. Laureles #1300 Col. Parque Industrial Belenes Norte Zapopan, Jalisco (33)645789'],
						['Sucursal México', 'Homero #156 Col. Vallarta San Jorge Guadalajara, Jalisco (33) 3121 9588 (33) 3121 9589']
					]
            	},
            	'mockocity': {
            		name:'Mocko City',
	            	logo:'logo-mockocity.png',
	            	img:'catalogo-mockocity-b01.jpg',
	            	fb:'https://www.facebook.com/mockocity',
	            	city:'Nacional',
	            	benefits: 1,
					address: [
						['Plaza Patria', 'Local D-2 Planta Baja 3111-0519'],
						['Plaza Dlucca', 'Av. Santa Margarita 4199 Local L-9 Col. Valle Real 3109-8394'],
						['Chapalita', 'Av. De Las Rosas 161 Planta Alta Dentro Del Chai 3070-1818'],
						['Espacio Galerias', 'Economos 5404, Col. Arcos Guadalupe Locales 2305-0379'],
						['Providencia', 'Av. Terranova Dentro De Chai 3640-0572'],
						['Polanco/Cdmx', 'Galileo 38 Planta Alta Dentro De Chai 55 4459-5994'],
						['Morelia/Michoacan', 'Av. Acueducto 307 Dentro Del Chai 3154-3681'],
						['Forum', 'Blvd. Gral. Marcelino G. Barragán local R-PB- Prados del NIlo, 44840 Guadalajara, Jal. '],
						['Tlaquepaque', 'Independencia 208 Centro 44450 San Pedro, Tlaquepaque, Jal. '],
						['Chop', 'Av. Mexico 2328 Col. Ladron de guevara, 44600, Guadalajara. '],
						['Américas', 'Av. Americas 651 Col. Ladron de guevara, 44600, Guadalajara. ']
					]
            	},
            	'hye': {
            		name:'Hoteles y experiencias',
	            	logo:'logo-hye.png',
	            	img:'catalogo-hye-b01.jpg',
	            	fb:'https://www.facebook.com/HotelesyExperiencias',
	            	city:'Nacional',
	            	benefits: 1,
					address: [
						['Plaza Patria', 'Local D-2 Planta Baja 3111-0519'],
						['Plaza Dlucca', 'Av. Santa Margarita 4199 Local L-9 Col. Valle Real 3109-8394'],
						['Chapalita', 'Av. De Las Rosas 161 Planta Alta Dentro Del Chai 3070-1818'],
						['Espacio Galerias', 'Economos 5404, Col. Arcos Guadalupe Locales 2305-0379'],
						['Providencia', 'Av. Terranova Dentro De Chai 3640-0572'],
						['Polanco/Cdmx', 'Galileo 38 Planta Alta Dentro De Chai 55 4459-5994'],
						['Morelia/Michoacan', 'Av. Acueducto 307 Dentro Del Chai 3154-3681'],
						['Forum', 'Blvd. Gral. Marcelino G. Barragán local R-PB- Prados del NIlo, 44840 Guadalajara, Jal. '],
						['Tlaquepaque', 'Independencia 208 Centro 44450 San Pedro, Tlaquepaque, Jal. '],
						['Chop', 'Av. Mexico 2328 Col. Ladron de guevara, 44600, Guadalajara. '],
						['Américas', 'Av. Americas 651 Col. Ladron de guevara, 44600, Guadalajara. ']
					]
            	},
            	'gayosso': {
            		name:'Gayosso',
	            	logo:'logo-gayosso.png',
	            	img:'catalogo-gayosso-b01.jpg',
	            	fb:'https://www.facebook.com/Gayossoonline/',
	            	city:'GDL',
	            	benefits: 7,
					address: [
						['Atn a clientes', 'Capilla del Carmen 3630-1415, Capillas Vallarta ext.107 3615-6015, convenios@gayosso.com'],
						['Terraza Belenes', 'Av. Laureles #1300 Col. Parque Industrial Belenes Norte Zapopan, Jalisco (33)645789'],
						['Sucursal México', 'Homero #156 Col. Vallarta San Jorge Guadalajara, Jalisco (33) 3121 9588 (33) 3121 9589']
					]
            	},
            	'pampas': {
            		name:'Pampas',
	            	logo:'logo-mr_pampas.png',
	            	img:'catalogo-mr_pampas-b01.jpg',
	            	fb:'https://www.facebook.com/mrpampasgdl/',
	            	city:'GDL',
	            	benefits: 1,
					address: []
            	},
            	'upc': {
            		name:'Unidad de Patología Clínica',
	            	logo:'logo-upc.png',
	            	img:'catalogo-upc-b01.jpg',
	            	fb:'https://www.facebook.com/pages/Unidad-De-Patolog%C3%ADa-Cl%C3%ADnica/179614038751142',
	            	city:'GDL',
	            	benefits: 1,
					address: [
						['Contacto', 'Dra. María Cristina Álvarez Ordoñez medicina.industrial@upc.com.mx (33)3669-0334']
					]
            	}
            }
        ];

        let contenidoDiv=[];

        
        
        let children = [];
        let benefits = [];
        let paquetes = [];
        for(var key in galerias) {
        	
	        var logo = "../images/club/" + beneficio + "/" + galerias[key][beneficio]['logo']; 
	        var img =  "../images/club/" + beneficio + "/" + galerias[key][beneficio]['img'];
	        var text = "club." + beneficio + ".txt";
	        
	        var more = "club." + beneficio + ".more";
	        
	        
	        for(var i = 0; i < galerias[key][beneficio]['benefits']; i++) {
	        	var discount = "club." + beneficio + ".discount" + i;
	        	var details = "club." + beneficio + ".details" + i;

	        	benefits.push(<div className="discount" key={i}>{t(discount)}<div className="terms-discount">{t(details)}</div></div>);
	        }

	        if(beneficio == 'hye') {
	        	for(var i = 1; i <= 3; i++) {
	        		var paquete = "club." + beneficio + ".paquete" + i;
	        		var condicion = "club." + beneficio + ".condicion" + i;
	        		var texto = "club." + beneficio + ".txt" + i;
	        		var imgHotel =  "../images/club/" + beneficio + "/paquete" + i + ".jpg";

	        		paquetes.push(<div className="discount paquete row"><div className="col-md-7">{t(paquete)}<div className="terms-discount">{t(condicion)}</div><p>{t(texto)}</p></div><div className="col-md-5"><img className="photo-paquete" src={imgHotel} alt={paquete} /></div></div>);
	        	}
	        }

	        children.push(<div className="row" key={key}><div className="col-md-5"><img className="photo-beneficio" src={img} alt={galerias[key][beneficio]['name']} /></div><div className="col-md-7"><div className="float-left"><img className="logo-beneficio" src={logo} alt={galerias[key][beneficio]['name']} /></div><div className="float-right fb"><a href={galerias[key][beneficio]['fb']} target="_blank" rel="noopener noreferrer"><div className="border-none"><span className="icon-facebook" ></span></div></a></div><div className="clearfix"></div><div className="txt-benefit">{t(text)}</div>{benefits}</div><div className="col-12 paquetes">{paquetes}</div><div className="col-12 terms">{t(more)}</div></div>);

	        for(var key2 in galerias[key][beneficio]['address']) {
	        	var k = key + key2;
	        	children.push(<div className="row" key={k}> <div className="title-address col-12">{galerias[key][beneficio]['address'][key2][0]}</div><div className="col-12"> {galerias[key][beneficio]['address'][key2][1]}</div></div>);
	        }

	        
	        contenidoDiv.push(<div className="container" key={key}>{children}</div>)
    	}
        return contenidoDiv;
        
      }
	render () {
		
		return (
			<div className="club">
				
					{this.createGalleries()}
				
			</div>
		);
	};
}

export default translate('common')(ClubBeneficio);
