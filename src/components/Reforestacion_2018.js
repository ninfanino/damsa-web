
import { render } from 'react-dom';
import React, { Component } from 'react';
import $ from 'jquery';
import { NavLink } from "react-router-dom";

import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [

  { src: '../images/reforestacion2018/1.jpg', width: 1, height: 1 },
  { src: '../images/reforestacion2018/2.jpg', width: 1, height: 1 },
  { src: '../images/reforestacion2018/3.jpg', width: 1, height: 1 },
  { src: '../images/reforestacion2018/4.jpg', width: 1, height: 1 },
  { src: '../images/reforestacion2018/5.jpg', width: 1, height: 1 },
  { src: '../images/reforestacion2018/6.jpg', width: 1, height: 1 },
  { src: '../images/reforestacion2018/7.jpg', width: 1, height: 1 },
  { src: '../images/reforestacion2018/8.jpg', width: 1, height: 1 },
  { src: '../images/reforestacion2018/9.jpg', width: 1, height: 1 },
  { src: '../images/reforestacion2018/11.jpg', width: 1, height: 1 },
  { src: '../images/reforestacion2018/12.jpg', width: 1, height: 1 },
  { src: '../images/reforestacion2018/10.jpg', width: 1, height: 1 }
];

export default class Reforestacion_2018 extends Component {







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
