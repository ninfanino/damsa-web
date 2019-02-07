import React, { Component } from "react";
import { translate } from 'react-i18next';


class Club extends Component {
	createGalleries = () => {
        
        const galerias = [
            { src:'chicaschic', name:'Chicas Chic'}
        ];

        //let table=[]
        let contenidoDiv=[];
        
        for(var key in galerias) {
          let children = []
          var link = "#/beneficio/" + galerias[key]['src']; 
          var img =  "../images/club/" + galerias[key]['src'] + "/1-Frente.png";
          var img2 =  "../images/club/" + galerias[key]['src'] + "/2-Vuelta.png";
          children.push(<div className="cardBox"><div className="card"><div className="front"><img className="front" src={img} alt={galerias[key]['name']} /></div><div className="back"><a href={link}><img className="front" src={img2} alt={galerias[key]['name']} /></a></div></div></div>);
          contenidoDiv.push(<div class="col-md-3">{children}</div>)
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
