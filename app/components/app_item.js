import React from 'react';

class AppItem extends React.Component {
  render() {
    const appLogo ={
      backgroundImage: "url('http://www.geolog.com/files/img/SWN-logo.png')"
    };
    return (
      <div className="app-item app-item--vertical">
      {/* Put class '.app-item--vertical' for vertical view */}
        <div>
          <span className="app-item__img" style={appLogo} />
        </div>
        <div>
          <h4 className="app-item__title">My Finances</h4>
          <p className="app-item__text">My Finances is a perfect tool for expense control and manage home budget. My Finances is a perfect tool for expense control and manage home budget.</p>
        </div>
      </div>
    );
  }
}

export default AppItem;
