import React from 'react';

import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import AllRights from '../components/all_rights';
import Header from '../containers/header_container';
import NotificationsContainer from '../containers/notifications_container';

const AuthLayout = ({ children }) => (
  <div className="page-container">
    <Header />

    <main className="login__container flex-grow-1">
      <div className="login__wrap">
        <Container>
          {children}

          <AllRights />
          <NotificationsContainer />
        </Container>
      </div>
    </main>
  </div>
);

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default AuthLayout;
