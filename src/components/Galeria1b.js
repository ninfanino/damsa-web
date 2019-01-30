

import React, { Component } from 'react';


import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';


/*const photos = [

  { src: '../images/posada2018/2.jpg', width: 1, height: 1 }
];*/

export default class Galeria1b extends Component {
    
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
    var total = this.props.match.params.photos;
    const photos = [];
    for (var i = 1; i <= total; i++) {
      photos.push({ src: '../images/'+ this.props.match.params.name +'/' + i + '.jpg', width: 1, height: 1 });
    }
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
