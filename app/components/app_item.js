import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const AppItem = ({ position, remove }) => {
  const appLogo = {
    backgroundImage: "url('http://www.geolog.com/files/img/SWN-logo.png')"
  };
  return (
    <a href="" className={classNames('app-item', `app-item--${position}`, `app-item--${remove}`)}>
      {/* Put position='vertical' for vertical view */}
      <div>
        <span className="app-item__img mb-5 mr-25" style={appLogo} />
      </div>
      <div>
        <div className="d-flex justify-content-between">
          <h4 className="app-item__title">My Finances</h4>
          <button type="button" className="app-item__remove mb-5">
            <i className="app-item__icon icon icon-cross font-8" />
          </button>
        </div>
        <p className="app-item__text">
          My Finances is a perfect tool for expense control and manage home budget.
        </p>
      </div>
    </a>
  );
};

AppItem.propTypes = {
  position: PropTypes.string,
  remove: PropTypes.string
};

AppItem.defaultProps = {
  position: '',
  remove: ''
};

export default AppItem;
