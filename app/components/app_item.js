import React from 'react';

const AppItem = () => {
  const appLogo = {
    backgroundImage: "url('http://www.geolog.com/files/img/SWN-logo.png')"
  };
  return (
    <a href="" className="app-item app-item--vertical">
      {/* Put class '.app-item--vertical' for vertical view */}
      <div>
        <span className="app-item__img mb-5 mr-25" style={appLogo} />
      </div>
      <div>
        <h4 className="app-item__title">My Finances</h4>
        <p className="app-item__text">
          My Finances is a perfect tool for expense control and manage home budget.
        </p>
      </div>
    </a>
  );
};

export default AppItem;
