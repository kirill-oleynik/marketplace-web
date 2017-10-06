import React from 'react';

import PropTypes from 'prop-types';

import withFixedHeader from '../with_fixed_header';

import HeaderContainer from '../containers/header_container';
import FooterContainer from '../containers/footer_container';
import ScrollTopButton from '../components/scroll_top_button';
import NotificationsContainer from '../containers/notifications_container';

export const MainLayout = ({ children, isHeaderFixed }) => (
  <div className={`page-container ${isHeaderFixed ? 'pt-60' : ''}`}>
    <HeaderContainer
      fixed={isHeaderFixed}
    />

    <main className="flex-grow-1">
      {children}
    </main>

    <FooterContainer />
    <ScrollTopButton />
    <NotificationsContainer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
  isHeaderFixed: PropTypes.bool.isRequired
};

export default withFixedHeader('.page-container main.flex-grow-1')(MainLayout);
