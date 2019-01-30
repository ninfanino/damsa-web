import React from "react";
import { NavLink } from "react-router-dom";

const Servicios = () =>  {
    var contenidoDiv = '<div class="row">';
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

    for(var key in galerias) {
        contenidoDiv+='<div class="gale col-xs-12 col-sm-6 col-md-6 col-lg-4"><a href="#/galerias/'+ galerias[key]['src'] +'/' + galerias[key]['photos'] +'"><div class="contenedorGaleria"><img class="logoesr" src="../images/'+galerias[key]['src']+'/1.jpg" alt="'+galerias[key]['name']+'" /><div class="filtro"></div><div class="texto"><h3>'+galerias[key]['name']+'</h3><label> <i class="fa fa-plus" aria-hidden="true"></i></label></div></div></a></div>';
    }
    
    contenidoDiv+= '</div>';
    return (
        
        <div className="Galeri">
            <div className="slide hidden">
            <a className="carousel-control-prev" href=".demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href=".demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a></div>
            <div className="seccion6" >
                <div dangerouslySetInnerHTML={{__html:contenidoDiv}} ></div>
            </div>
        </div>
    );
}

export default Servicios;