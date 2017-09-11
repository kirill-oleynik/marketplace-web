import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ApplicationPreview = ({ remove, vertical, application }) => (
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

        <button type="button" className="app-item__remove mb-5">
          <i className="app-item__icon icon icon-cross font-8" />
        </button>
      </div>

      <p className="app-item__text">
        {application.description}
      </p>
    </div>
  </span>
);

ApplicationPreview.propTypes = {
  remove: PropTypes.bool,
  vertical: PropTypes.bool,
  application: PropTypes.object.isRequired
};

ApplicationPreview.defaultProps = {
  remove: false,
  vertical: false
};

export default ApplicationPreview;
