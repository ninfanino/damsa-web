

import React, { Component } from 'react';


import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [

  { src: '../images/diademuertos2018/13.png', width: 1, height: 1 },
  { src: '../images/diademuertos2018/2.png', width: 1, height: 1 },
  { src: '../images/diademuertos2018/3.png', width: 1, height: 1 },
  { src: '../images/diademuertos2018/4.png', width: 1, height: 1 },
  { src: '../images/diademuertos2018/5.png', width: 1, height: 1 },
  { src: '../images/diademuertos2018/6.png', width: 1, height: 1 },
  { src: '../images/diademuertos2018/7.png', width: 1, height: 1 },
  { src: '../images/diademuertos2018/8.png', width: 1, height: 1 },
  { src: '../images/diademuertos2018/9.png', width: 1, height: 1 },
  { src: '../images/diademuertos2018/11.png', width: 1, height: 1 },
  { src: '../images/diademuertos2018/12.png', width: 1, height: 1 },
  { src: '../images/diademuertos2018/10.png', width: 1, height: 1 }
];

export default class Diademuertos2018 extends Component {







    constructor() {
      super();
      this.state = { currentImage: 0 };
      this.closeLightbox = this.closeLightbox.bind(this);
      this.openLightbox = this.openLightbox.bind(this);
      this.gotoNext = this.gotoNext.bind(this);
      this.gotoPrevious = this.gotoPrevious.bind(this);
    }
    openLightbox(event, obj) {
      this.setState({
        currentImage: obj.index,
        lightboxIsOpen: true,
      });
    }
    closeLightbox() {
      this.setState({
        currentImage: 0,
        lightboxIsOpen: false,
      });
    }
    gotoPrevious() {
      this.setState({
        currentImage: this.state.currentImage - 1,
      });
    }
    gotoNext() {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    }



	render () {
		return (
      <div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
		);
	}
}
