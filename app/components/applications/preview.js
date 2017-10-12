import React from 'react';

import Link from 'next/link';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const applicationUrl = (application) => ({
  pathname: '/applications',
  query: {
    slug: application.slug
  }
});

const applicationAsUrl = (application) => `/applications/${application.slug}`;

const ApplicationPreview = ({ remove, vertical, application, onRemoveClick }) => (
  <Link prefetch href={applicationUrl(application)} as={applicationAsUrl(application)}>
    <span
      className={classNames(
        'app-item',
        { 'app-item--remove': remove },
        { 'app-item--vertical': vertical }
      )}
    >
      <div>

        <span
          className="app-item__img mb-5 mr-25"
          style={{
            backgroundImage: `url('${application.logo}')`
          }}
        />
      </div>

      <div>
        <div className="d-flex justify-content-between">
          <h4 className="app-item__title">
            {application.title}
          </h4>

          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();

              onRemoveClick();
            }}
            className="app-item__remove mb-5"
          >
            <i className="app-item__icon icon icon-cross font-8" />
          </button>
        </div>

        <p className="app-item__text">
          {application.summary}
        </p>
      </div>
    </span>
  </Link>
);

ApplicationPreview.propTypes = {
  remove: PropTypes.bool,
  vertical: PropTypes.bool,
  onRemoveClick: PropTypes.func,
  application: PropTypes.object.isRequired
};

ApplicationPreview.defaultProps = {
  remove: false,
  vertical: false,
  onRemoveClick: () => {}
};

export default ApplicationPreview;
