

import React, { Component } from 'react';


import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [

  { src: '../images/posada2018/2.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/3.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/4.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/5.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/6.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/7.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/8.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/9.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/10.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/11.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/12.jpg', width: 1, height: 1 },

  { src: '../images/posada2018/26.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/27.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/28.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/29.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/30.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/31.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/32.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/33.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/34.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/35.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/36.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/37.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/38.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/39.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/40.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/41.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/42.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/43.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/44.jpg', width: 1, height: 1 },
  { src: '../images/posada2018/45.jpg', width: 1, height: 1 }
];

export default class Galeria1 extends Component {







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
