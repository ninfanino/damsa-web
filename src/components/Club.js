import React, { Component } from "react";
import { translate } from 'react-i18next';


class Club extends Component {
	createGalleries = () => {
        
        const galerias = [
            { src:'pandataller', name:'Panda'},
            { src:'airepaz', name:'AirePaz'},
            { src:'chimulco', name:'Chimulco'},
            { src:'Petite_Pia', name:'Petite Pia'},
            { src:'Canon_de_la_flores', name:'Cañon de las flores'},
            { src:'european', name:'European Life Style'},
            { src:'sport_world', name:'Sports World'},
            { src:'chopo', name:'Chopo'},
            { src:'granja_las_americas', name:'Granja las Américas'},
            { src:'arriva', name:'Arriva Hoteles'},
            { src:'mambo_cafe', name:'Mambo Café'},
            { src:'bauhaus', name:'Bauhaus / Papelerías Oportunidades'},
            { src:'masvision', name:'Más Visión'},
            { src:'Take_a_wok', name:'Take a Wok'},
            { src:'bellini', name:'Bellini'},
            { src:'juguetega', name:'Juguetega'},
            { src:'mockocity', name:'Mocko City'},
            { src:'hye', name:'Hoteles y experiencias'},
            { src:'gayosso', name:'Gayosso'},
            { src:'pampas', name:'Pampas'},
            { src:'upc', name:'Unidad Patológica Clínica'}
        ];

        //let table=[]
        let contenidoDiv=[];
        
        for(var key in galerias) {
          let children = []
          var link = "#/beneficio/" + galerias[key]['src']; 
          var img =  "../images/club/" + galerias[key]['src'] + "/1-Frente.png";
          var img2 =  "../images/club/" + galerias[key]['src'] + "/2-Vuelta.png";
          children.push(<div className="cardBox"><div className="card"><div className="front"><img className="front" src={img} alt={galerias[key]['name']} /></div><div className="back"><a href={link}><img className="front" src={img2} alt={galerias[key]['name']} /></a></div></div></div>);
          contenidoDiv.push(<div class="col-md-3" key={key}>{children}</div>)
        }
        return contenidoDiv
      }
	render () {
		
		return (
			<div className="club">
				<div className="container-fluid">
					<div className="row">
						
							{this.createGalleries()}
						
					</div>
				</div>
			</div>
		);
	};
}

export default translate('common')(Club);
