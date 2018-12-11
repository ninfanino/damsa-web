import React from "react";
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import Lightbox from 'react-images';





  

const Galeria1 = () =>  {


	return (


    <Lightbox
            images={[{ src: '../images/diapadre1.png' }, { src: '../images/diaabuelo1.png' }]}
            isOpen={true}


          />




	);
}


export default Galeria1;
