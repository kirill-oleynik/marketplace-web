import React, { Component } from 'react';

import Link from 'next/link';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { translate } from 'react-i18next';

import { home, signIn, signUp, favorites } from '../routes';

import MainButton from '../components/main_button';
import ButtonCircle from '../components/button_circle';
import HeaderModalMenu from '../components/header_modal_menu';
import HeaderDropdownMenu from '../components/header_dropdown_menu';

class Header extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
    openProfile: PropTypes.func.isRequired,
    currentUser: PropTypes.object.isRequired,
    openSubmitApplication: PropTypes.func.isRequired
  }

  state = {
    modal: false
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    const {
      t, signOut, currentUser, openProfile, openSubmitApplication
    } = this.props;

    return (
      <div>
        <header className="main-header">
          <Container>
            <div className="main-header__content">
              <div className="hidden-sm-up">
                <span
                  className="main-header__btn-menu icon icon-menu in-white"
                  onClick={this.toggle}
                />
              </div>

              <Link href={home}>
                <a className="page-main-logo">
                  {t('header.applicationName')}
                </a>
              </Link>

              {
                currentUser.id ? (
                  <div className="d-flex align-items-center hidden-xs-down">
                    <Link href={favorites}>
                      <ButtonCircle
                        size="sm"
                        color="grey-light"
                        icon="heart-filled"
                        className="in-white mr-20"
                      />
                    </Link>

                    <HeaderDropdownMenu
                      signOut={signOut}
                      currentUser={currentUser}
                      openProfile={openProfile}
                      openSubmitApplication={openSubmitApplication}
                    />
                  </div>
                ) : (
                  <div className="hidden-xs-down">
                    <Link href={signIn}>
                      <a className="main-header__link">
                        {t('header.logIn')}
                      </a>
                    </Link>

                    <Link href={signUp}>
                      <MainButton
                        color="white"
                        size="md"
                      >
                        {t('header.signUp')}
                      </MainButton>
                    </Link>
                  </div>
                )
              }

              <div className="hidden-sm-up">
                <a
                  href="/"
                  className="main-header__search-btn icon icon-search"
                />
              </div>
            </div>
          </Container>
        </header>

        <HeaderModalMenu
          isOpen={this.state.modal}
          toggle={this.toggle}
          currentUser={currentUser}
          openProfile={openProfile}
          openSubmitApplication={openSubmitApplication}
        />
      </div>
    );
  }
}

export default translate(['common'])(Header);
