import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import MainButton from './main_button';

class HeaderDropdownMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const { t, currentUser } = this.props;

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
          { currentUser.fullName }
        </DropdownToggle>

        <DropdownMenu
          right
          className="header-dropdown__menu"
        >
          <div className="header-dropdown__menu-wrap">
            <p className="font-14 font-700 mb-5">
              { currentUser.fullName }
            </p>

            <p className="font-12 in-black-050">
              { currentUser.email }
            </p>
          </div>

          <div className="divider divider--dark" />

          <div className="header-dropdown__menu-wrap">
            <p className="font-14 mb-20">
              { t('viewProfile') }
            </p>

            <MainButton
              color="blue"
              size="sm"
              className="w-100 mb-15"
            >
              { t('submitApp') }
            </MainButton>
          </div>

          <div className="divider divider--dark" />

          <div className="header-dropdown__menu-wrap mb-10">
            <a
              href="/"
              className="header-modal__link header-modal__link--dark"
            >
              <i
                className="header-modal__logout icon icon-log-out in-black-035"
              />

              <span className="d-inline-block align-middle">
                { t('logOut') }
              </span>
            </a>
          </div>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

HeaderDropdownMenu.propTypes = {
  currentUser: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

export default HeaderDropdownMenu;
