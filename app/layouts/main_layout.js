import React from 'react';
import PropTypes from 'prop-types';

import FooterContainer from '../containers/footer_container';
import HeaderContainer from '../containers/header_container';
import ScrollTopButton from '../components/scroll_top_button';

const MainLayout = ({ children }) => (
  <div className="page-container">
    <HeaderContainer />

    <main className="flex-grow-1">
      {children}
    </main>

    <FooterContainer />
    <ScrollTopButton />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default MainLayout;
