import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import MainButton from './main_button';

export class HeaderDropdownMenu extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
    openProfile: PropTypes.func.isRequired,
    currentUser: PropTypes.object.isRequired
  }

  state = {
    dropdownOpen: false
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const { t, signOut, currentUser, openProfile } = this.props;

    return (
      <Dropdown
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
        className="main-dropdown header-dropdown"
      >
        <DropdownToggle
          caret
          className="main-dropdown__toggle header-dropdown__btn"
        >
          {currentUser.fullName}
        </DropdownToggle>

        <DropdownMenu
          right
          className="header-dropdown__menu"
        >
          <div className="header-dropdown__menu-wrap">
            <p className="font-14 font-700 mb-5">
              {currentUser.fullName}
            </p>

            <p className="font-12 in-black-050">
              {currentUser.email}
            </p>
          </div>

          <div className="divider divider--dark" />

          <div className="header-dropdown__menu-wrap">
            <button
              className="font-14 mb-20"
              onClick={openProfile}
            >
              {t('header.viewProfile')}
            </button>

            <MainButton
              color="blue"
              size="sm"
              className="w-100 mb-15"
            >
              {t('header.submitApp')}
            </MainButton>
          </div>

          <div className="divider divider--dark" />

          <div className="header-dropdown__menu-wrap mb-10">
            <span
              onClick={signOut}
              className="header-modal__link header-modal__link--dark"
            >
              <i className="header-modal__logout icon icon-log-out in-black-035" />

              <span className="d-inline-block align-middle">
                {t('header.logOut')}
              </span>
            </span>
          </div>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default translate(['common'])(HeaderDropdownMenu);
