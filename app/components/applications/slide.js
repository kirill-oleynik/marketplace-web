import React from 'react';

import Link from 'next/link';
import PropTypes from 'prop-types';

const applicationUrl = (application) => ({
  pathname: '/applications',
  query: {
    slug: application.slug
  }
});

const applicationAsUrl = (application) => `/applications/${application.slug}`;

const ApplicationSlide = ({ className, application, ...rest }) => (
  <Link prefetch href={applicationUrl(application)} as={applicationAsUrl(application)}>
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
          {application.summary}
        </p>
      </div>
    </div>
  </Link>
);

ApplicationSlide.propTypes = {
  className: PropTypes.string,
  application: PropTypes.object.isRequired
};

ApplicationSlide.defaultProps = {
  className: ''
};

export default ApplicationSlide;
