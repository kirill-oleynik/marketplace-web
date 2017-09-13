import React from 'react';
import PropTypes from 'prop-types';

const ApplicationSlide = ({ className, application, ...rest }) => (
  <div className={`carousel__item  ${className}`} {...rest}>
    <div className="carousel__item-content">
      <span
        className="app-item__img mb-5"
        style={{
          backgroundImage: `url('${application.logo}')`
        }}
      />

      <p className="app-item-slide__title font-16 font-700 mb-5">
        {application.title}
      </p>

      <p className="app-item-slide__descr">
        {application.description}
      </p>
    </div>
  </div>
);

ApplicationSlide.propTypes = {
  className: PropTypes.string,
  application: PropTypes.object.isRequired
};

ApplicationSlide.defaultProps = {
  className: ''
};

export default ApplicationSlide;
