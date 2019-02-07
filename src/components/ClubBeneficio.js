import React, { Component } from "react";
import { translate } from 'react-i18next';


class ClubBeneficio extends Component {
	createGalleries = () => {
        const { t } = this.props;
        var beneficio = this.props.match.params.beneficio;

        const galerias = [
            { 
            	'chicaschic': {
            		name:'Chicas Chic',
	            	logo:'logo1.png',
	            	img:'3-Interior.png',
	            	fb:'https://www.facebook.com/chicaschic2018/',
	            	city:'GDL',
					address:'Abascal y Souza #138, Tel. 33 26 85 96 70. Neruda y Patria. 4341 Local H2'
            	}
            }
        ];

        let contenidoDiv=[];

        
        
        let children = []
        for(var key in galerias) {
	        var logo = "../images/club/" + beneficio + "/" + galerias[key][beneficio]['logo']; 
	        var img =  "../images/club/" + beneficio + "/" + galerias[key][beneficio]['img'];
	        var text = "club." + beneficio + ".txt";
	        var discount = "club." + beneficio + ".discount";
	        var details = "club." + beneficio + ".details";
	        var more = "club." + beneficio + ".more";
	        children.push(<div className="row" key={key}><div className="col-md-5"><img className="photo-beneficio" src={img} alt={galerias[key][beneficio]['name']} /></div><div className="col-md-7"><div className="float-left"><img className="logo-beneficio" src={logo} alt={galerias[key][beneficio]['name']} /></div><div className="float-right fb"><a href={galerias[key][beneficio]['fb']} target="_blank" rel="noopener noreferrer"><div className="border-none"><span className="icon-facebook" ></span></div></a></div><div className="clearfix"></div><div className="txt-benefit">{t(text)}</div><div className="discount">{t(discount)}<div className="terms-discount">{t(details)}</div></div></div><div className="col-12 terms">{t(more)}</div><div className="col-12 address">{galerias[key][beneficio]['address']}</div></div>);
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
