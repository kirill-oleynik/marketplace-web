import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/footer';
import GoTopLink from '../components/go_top_link';
import Header from '../containers/header_container';

const MainLayout = ({ children }) => (
  <div className="page-container">
    <Header />

    <main className="flex-grow-1">
      {children}
    </main>

    <Footer />
    <GoTopLink />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default MainLayout;
