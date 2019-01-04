
import { render } from 'react-dom';
import React, { Component } from 'react';
import $ from 'jquery';
import { NavLink } from "react-router-dom";

import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [

  { src: '../images/paseoanual2018/1.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/2.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/3.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/4.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/5.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/6.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/7.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/8.jpg', width: 1, height: 1 },

  { src: '../images/paseoanual2018/10.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/11.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/12.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/13.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/14.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/15.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/16.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/17.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/18.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/19.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/20.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/21.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/22.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/23.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/24.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/25.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/26.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/27.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/28.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/29.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/30.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/31.jpg', width: 1, height: 1 },

  { src: '../images/paseoanual2018/33.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/34.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/35.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/36.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/37.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/38.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/39.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/40.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/41.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/42.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/43.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/44.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/45.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/46.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/47.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/48.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/49.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/50.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/51.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/52.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/53.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/54.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/55.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/56.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/57.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/58.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/59.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/60.jpg', width: 1, height: 1 },
  { src: '../images/paseoanual2018/61.jpg', width: 1, height: 1 },

  { src: '../images/paseoanual2018/62.jpg', width: 1, height: 1 }
];

export default class paseoanual2018 extends Component {







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
