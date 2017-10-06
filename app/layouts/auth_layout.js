import React from 'react';

import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import withFixedHeader from '../with_fixed_header';

import AllRights from '../components/all_rights';
import HeaderContainer from '../containers/header_container';
import NotificationsContainer from '../containers/notifications_container';

export const AuthLayout = ({ children }) => (
  <div className="page-container">
    <HeaderContainer />

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

export default withFixedHeader('.login__wrap')(AuthLayout);
