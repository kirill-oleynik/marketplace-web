import React from 'react';
import Slick from 'react-slick';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ApplicationSlide from './slide';

const Arrow = ({ onClick, direction }) => (
  <i
    onClick={onClick}
    className={
      classNames(
        'icon',
        'carousel__arrow',
        `carousel__arrow--${direction}`,
        `icon-arrow-${direction}-circle`
      )
    }
  />
);

Arrow.propTypes = {
  onClick: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired
};

const settings = {
  speed: 500,
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: <Arrow direction="left" onClick={() => {}} />,
  nextArrow: <Arrow direction="right" onClick={() => {}} />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

const ApplicationsCarousel = ({ applications }) => (
  <Slick {...settings}>
    {
      applications.map((application) => (
        <ApplicationSlide
          key={application.id}
          application={application}
        />
      ))
    }
  </Slick>
);

ApplicationsCarousel.propTypes = {
  applications: PropTypes.array.isRequired
};

export default ApplicationsCarousel;
