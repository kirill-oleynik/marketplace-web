import React from 'react';

const appLogo = {
  backgroundImage: "url('http://www.geolog.com/files/img/SWN-logo.png')"
};

const CarouselItem = () => (
  <a href="" className="carousel__item">
    <span className="app-item__img mb-5" style={appLogo} />
    <p className="font-16 font-700 mb-5">DateApp</p>
    <p className="mb-5">Fire up your PHP Apps Performance</p>
  </a>
);

const Carousel = () => (
  <div className="carousel-viewport">
    <div className="carousel">
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
    </div>
    <i className="carousel__arrow carousel__arrow--left icon icon-arrow-left-circle" />
    <i className="carousel__arrow carousel__arrow--right icon icon-arrow-right-circle" />
  </div>
);

export default Carousel;
