import React from 'react';

import Link from 'next/link';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { translate } from 'react-i18next';

import { home, signIn, signUp, favorites } from '../routes';

import MainButton from './main_button';
import Autocomplete from './autocomplete';
import ButtonCircle from './button_circle';
import HeaderDropdownMenu from './header_dropdown_menu';

export const Header = ({
  t, signOut, onMenuClick, currentUser, openProfile, searchFetch,
  openSubmitApplication, searchCategories, searchApplications
}) => (
  <header className="main-header">
    <Container>
      <div className="main-header__content">
        <div className="hidden-sm-up">
          <span
            onClick={onMenuClick}
            className="main-header__btn-menu icon icon-menu in-white mb-10"
          />
        </div>

        <Link href={home}>
          <a className="page-main-logo mr-20">
            {t('header.applicationName')}
          </a>
        </Link>

        <Autocomplete
          fetch={searchFetch}
          categories={searchCategories}
          applications={searchApplications}
          className="flex-grow-1 max-550 hidden-xs-down mr-20"
          placeholder={t('search.placeholder')}
        />

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
      </div>
    </Container>
  </header>
);

Header.propTypes = {
  t: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  searchFetch: PropTypes.func.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  openProfile: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  searchCategories: PropTypes.array.isRequired,
  searchApplications: PropTypes.array.isRequired,
  openSubmitApplication: PropTypes.func.isRequired
};

export default translate(['common'])(Header);
