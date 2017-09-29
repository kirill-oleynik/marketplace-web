import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../components/footer';
import Header from '../containers/header_container';
import ScrollTopButton from '../components/scroll_top_button';

const MainLayout = ({ children }) => (
  <div className="page-container">
    <Header />

    <main className="flex-grow-1">
      {children}
    </main>

    <Footer />
    <ScrollTopButton />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default MainLayout;
