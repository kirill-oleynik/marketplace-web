import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

class ImageGallerySlider extends Component {
  render() {
    const images = [
      {
        original: 'https://via.placeholder.com/1000x600',
        thumbnail: 'https://via.placeholder.com/250x150'
      },
      {
        original: 'https://via.placeholder.com/1000x600',
        thumbnail: 'https://via.placeholder.com/250x150'
      },
      {
        original: 'https://via.placeholder.com/1000x600',
        thumbnail: 'https://via.placeholder.com/250x150'
      }
    ];

    return (
      <ImageGallery
        items={images}
        slideInterval={2000}
        onImageLoad={this.handleImageLoad}
        showPlayButton={false}
      />
    );
  }
}

export default ImageGallerySlider;
