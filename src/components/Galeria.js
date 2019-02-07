import React from "react";
import { translate } from 'react-i18next';

class Servicios extends React.Component {

    createGalleries = () => {
        const { t } = this.props;

        const galerias = [
            { src:'fiesta-anual-2018', photos:'192', name: 'Fiesta anual 2018'},
            { src:'fiesta-anual-mty-2018', photos:'29', name: 'Fiesta anual MTY 2018'},
            { src:'fiesta-anual-mx-2018', photos:'51', name: 'Fiesta anual CDMX 2018'},
            { src:'dia-muertos-2018', photos:'41', name: 'Día de muertos 2018'},
            { src:'paseo-anual-2018', photos:'105', name: 'Paseo Anual GDL 2018'},
            { src:'paseo-anual-mty-2018', photos:'30', name: 'Paseo Anual MTY 2018'},
            { src:'paseo-anual-mx-2018', photos:'39', name: 'Paseo Anual CDMX 2018'},
            { src:'dia-abuelo-2018', photos:'19', name: 'Día del abuelo 2018'},
            { src:'reforestacion-2018', photos:'45', name: 'Reforestación 2018'},
            { src:'dia-padre-2018', photos:'28', name: 'Día del padre 2018'},
            { src:'dia-madres-2018', photos:'38', name: 'Día de las madres 2018'},
            { src:'dia-nino-2018', photos:'68', name: 'Día del niño 2018'}
        ];

        //let table=[]
        let contenidoDiv=[];
        
        for(var key in galerias) {
          let children = []
          var link = "#/galerias/" + galerias[key]['src'] + "/" + galerias[key]['photos']; 
          var img =  "../images/" + galerias[key]['src'] + "/1.jpg";
          var name = "galerias." + galerias[key]['src'];
          children.push(<a href={link}><div class="contenedorGaleria"><img class="logoesr" src={img} alt={t(name)} /><div class="filtro"></div><div class="texto"><h3>{t(name)}</h3><label> <i class="fa fa-plus" aria-hidden="true"></i></label></div></div></a>);
          contenidoDiv.push(<div class="gale col-xs-12 col-sm-6 col-md-6 col-lg-4">{children}</div>)
        }
        return contenidoDiv
      }

    render() {
        return (
            
            <div className="Galeri">
                
                <div className="seccion6" >
                    <div className="row">
                        {this.createGalleries()}
                    </div>
                </div>
            </div>
        );
    }
}

export default translate('common')(Servicios);