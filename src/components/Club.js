import React, { Component } from "react";
import { translate } from 'react-i18next';
import MenuFilters from "./menuFilters";


class Club extends Component {
  /* categorias 
  todas = 0
  alimentos = 1
  belleza, fitness = 2
  educacion = 3
  hogar = 4
  mayoristas = 5
  salud = 6
  servicios = 7
  turismo = 8
  moda = 9
  */
  
	state = {
    filter: 0
  }

  componentDidMount(){
    this.getInfo()
  }

  getInfo() {
    const galerias = {
      0:[
        { src:'pandataller', name:'Panda'}, 
        { src:'latelier', name:'L\'atelier'},
        { src:'best_western', name:'Best Western'}, 
        { src:'erectus', name:'Erectus'}, 
        { src:'patagonica', name:'Patagonica'}, 
        { src:'viajescarnaval', name:'Viajes Carnaval'}, 
        { src:'benedictus', name:'Benedictus'},
        { src:'anfibios', name:'Club Anfibios'},
        { src:'airepaz', name:'AirePaz'},
        { src:'ula', name:'ULA'},
        { src:'chimulco', name:'Chimulco'},
        { src:'Petite_Pia', name:'Petite Pia'},
        { src:'taqueria_charro', name:'Taqueria Charro'},
        { src:'Poptails', name:'Poptails'},
        { src:'Canon_de_la_flores', name:'Cañon de las flores'},
        { src:'lemime', name:'Le Mime'},
        { src:'innovasport', name:'Innova Sport'},
        { src:'european', name:'European Life Style'},
        { src:'Krystal', name:'Grupo Hotelero Santa Fe'},
        { src:'sport_world', name:'Sports World'},
        { src:'benessere', name:'Benessere'},
        { src:'peter_pipper', name:'Peter Piper Pizza'},
        { src:'Vivens', name:'Vivens'},
        { src:'Acuario', name:'Acuario Michin'},
        { src:'museo_cera', name:'Museo de Cera'},
        { src:'renta_tu_auto', name:'Mexico Car Rental'},
        { src:'Porta_blanca', name:'Porta Blanca'},
        { src:'Black_Coffe', name:'Black Coffe'},
        { src:'chopo', name:'Chopo'},
        { src:'alexa_stiletto', name:'Alexxa'},
        { src:'Roca_azul', name:'Club Roca Azul'},
        { src:'granja_las_americas', name:'Granja las Américas'},
        { src:'arriva', name:'Arriva Hoteles'},
        { src:'mambo_cafe', name:'Mambo Café'},
        { src:'bauhaus', name:'Bauhaus / Papelerías Oportunidades'},
        { src:'masvision', name:'Más Visión'},
        { src:'Take_a_wok', name:'Take a Wok'},
        { src:'bellini', name:'Bellini'},
        { src:'univa', name:'Univa'},
        { src:'juguetega', name:'Juguetega'},
        { src:'mockocity', name:'Mocko City'},
        { src:'twoidea', name:'Two Idea'},
        { src:'cityexpress', name:'City Express'},
        { src:'devlyn', name:'Devlyn'},
        { src:'uvm', name:'UVM'},
        { src:'tec_milenio', name:'Tec Milenio'},
        { src:'sams', name:'Sam\'s Club'},
        { src:'suburbia', name:'Suburbia'},
        { src:'tony', name:'Tony Super Papelerias'},
        { src:'hye', name:'Hoteles y experiencias'},
        { src:'high_vision', name:'High Vision'},
        { src:'gayosso', name:'Gayosso'},
        { src:'pampas', name:'Pampas'},
        { src:'upc', name:'Unidad Patológica Clínica'}
      ],
      1:[
        { src:'airepaz', name:'AirePaz'},
        { src:'taqueria_charro', name:'Taqueria Charro'},
        { src:'Poptails', name:'Poptails'},
        { src:'lemime', name:'Le Mime'},
        { src:'peter_pipper', name:'Peter Piper Pizza'},
        { src:'Black_Coffe', name:'Black Coffe'},
        { src:'Take_a_wok', name:'Take a Wok'},
        { src:'bellini', name:'Bellini'},
        { src:'pampas', name:'Pampas'},
        { src:'sams', name:'Sam\'s Club'}
      ],
      2:[
        { src:'latelier', name:'L\'atelier'}, 
        { src:'anfibios', name:'Club Anfibios'},
        { src:'innovasport', name:'Innova Sport'},
        { src:'sport_world', name:'Sports World'},
        { src:'Vivens', name:'Vivens'},
        { src:'Porta_blanca', name:'Porta Blanca'}
      ],
      3:[
        { src:'patagonica', name:'Patagonica'},
        { src:'ula', name:'ULA'},
        { src:'Petite_Pia', name:'Petite Pia'},
        { src:'bauhaus', name:'Bauhaus / Papelerías Oportunidades'},
        { src:'univa', name:'Univa'},
        { src:'mockocity', name:'Mocko City'},
        { src:'uvm', name:'UVM'},
        { src:'tec_milenio', name:'Tec Milenio'},
      ],
      4:[
        { src:'bauhaus', name:'Bauhaus / Papelerías Oportunidades'},
        { src:'mockocity', name:'Mocko City'},
        { src:'twoidea', name:'Two Idea'},
        { src:'sams', name:'Sam\'s Club'},
        { src:'tony', name:'Tony Super Papelerias'},
      ],
      5:[
        { src:'benessere', name:'Benessere'},
        { src:'juguetega', name:'Juguetega'},
        { src:'twoidea', name:'Two Idea'},
        { src:'sams', name:'Sam\'s Club'},
      ],
      6:[
        { src:'erectus', name:'Erectus'}, 
        { src:'chopo', name:'Chopo'},
        { src:'masvision', name:'Más Visión'},
        { src:'devlyn', name:'Devlyn'},
        { src:'high_vision', name:'High Vision'},
        { src:'upc', name:'Unidad Patológica Clínica'},
      ],
      7:[
        { src:'pandataller', name:'Panda'},
        { src:'viajescarnaval', name:'Viajes Carnaval'}, 
        { src:'benedictus', name:'Benedictus'},
        { src:'Canon_de_la_flores', name:'Cañon de las flores'},
        { src:'european', name:'European Life Style'},
        { src:'mockocity', name:'Mocko City'},
        { src:'twoidea', name:'Two Idea'},
        { src:'gayosso', name:'Gayosso'}
      ],
      8:[
        { src:'best_western', name:'Best Western'}, 
        { src:'chimulco', name:'Chimulco'},
        { src:'Krystal', name:'Grupo Hotelero Santa Fe'},
        { src:'Acuario', name:'Acuario Michin'},
        { src:'museo_cera', name:'Museo de Cera'},
        { src:'renta_tu_auto', name:'Mexico Car Rental'},
        { src:'Roca_azul', name:'Club Roca Azul'},
        { src:'granja_las_americas', name:'Granja las Américas'},
        { src:'arriva', name:'Arriva Hoteles'},
        { src:'mambo_cafe', name:'Mambo Café'},
        { src:'mockocity', name:'Mocko City'},
        { src:'cityexpress', name:'City Express'},
        { src:'hye', name:'Hoteles y experiencias'}
      ],
      9:[
        { src:'latelier', name:'L\'atelier'},
        { src:'alexa_stiletto', name:'Alexxa'},
        { src:'suburbia', name:'Suburbia'},
      ]
    };
    
    this.setState({
      data:galerias,
      galerias:galerias[0]
    })
  }

  updateFilters = (filter) => {
    let galerias = this.state.data;
    this.setState({
      galerias:galerias[filter]
    })
  }
      
	render () {
		
    //let table=[]
    let contenidoDiv=[];
  
    for(var key in this.state.galerias) {
      
      let children = []
      var link = "#/beneficio/" + this.state.galerias[key]['src']; 
      var img =  "./images/club/" + this.state.galerias[key]['src'] + "/1-Frente.png";
      var img2 =  "./images/club/" + this.state.galerias[key]['src'] + "/2-Vuelta.png";
      children.push(<div className="cardBox" key={key}><div className="card"><div className="front"><img className="imgcard" src={img} alt={this.state.galerias[key]['name']} /></div><div className="back"><a href={link}><img className="imgcard" src={img2} alt={this.state.galerias[key]['name']} /></a></div></div></div>);
      contenidoDiv.push(<div className="col-grid" key={key}>{children}</div>)
      
    }

		return (
			<div className="club">
				<div className="container-fluid">
					<div className="row">
              <MenuFilters handleFilters={this.updateFilters}/>
              <div className="containerGrid">
							  {contenidoDiv}
              </div>
					</div>
				</div>
			</div>
		);
	};
}

export default translate('common')(Club);
