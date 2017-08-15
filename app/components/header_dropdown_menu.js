import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import MainButton from './main_button';

class HeaderDropdownMenu extends React.Component {
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
    return (
      <Dropdown
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
        className="main-dropdown header-dropdown"
      >
        <DropdownToggle caret className="main-dropdown__toggle header-dropdown__btn">
          Steve Adams
        </DropdownToggle>
        <DropdownMenu className="header-dropdown__menu" right>
          <div className="header-dropdown__menu-wrap">
            <p className="font-14 font-700 mb-5">Steve Adams</p>
            <p className="font-12 in-black-050">steveadams@gmail.com</p>
          </div>
          <div className="divider divider--dark" />
          <div className="header-dropdown__menu-wrap">
            <p className="font-14 mb-20">View Profile</p>
            <MainButton color="blue" size="sm" className="w-100 mb-15">Submit App</MainButton>
          </div>
          <div className="divider divider--dark" />
          <div className="header-dropdown__menu-wrap mb-10">
            <a href="/" className="header-modal__link header-modal__link--dark">
              <i className="header-modal__logout icon icon-log-out in-black-035" />
              <span className="d-inline-block align-middle">Log Out</span>
            </a>
          </div>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

Dropdown.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func
};

DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  className: PropTypes.string
};

export default HeaderDropdownMenu;
